# Studio Bressan

Sito web dello **Studio Bressan** — Dott.ssa Romina Bressan, Commercialista e
Revisore Legale (Rovigo).

Attualmente è un sito placeholder (single page) con i recapiti dello studio,
costruito per crescere facilmente verso un sito completo.

## Stack

- **[Vite](https://vite.dev/)** — dev server + build statico (nessun framework).
- HTML / CSS / JS vanilla, zero dipendenze a runtime.
- Deploy su **Cloudflare Pages** (output statico).

Scelta volutamente minimale: nessuna complessità superflua oggi, ma con un build
step reale e una struttura pronta per aggiungere pagine e componenti domani.

## Sviluppo locale

```bash
npm install      # solo la prima volta
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # genera la cartella dist/
npm run preview  # anteprima locale della build di produzione
```

## Deploy su Cloudflare Pages

### Opzione A — da riga di comando (Wrangler)

```bash
npm run deploy   # build + wrangler pages deploy dist
```

Richiede un login una tantum: `npx wrangler login`.

### Opzione B — Git integration (consigliata)

Collega questo repository in **Cloudflare Dashboard → Pages → Create project →
Connect to Git** con queste impostazioni:

| Impostazione         | Valore          |
| -------------------- | --------------- |
| Build command        | `npm run build` |
| Build output directory | `dist`        |

Ogni push sul branch principale pubblica automaticamente.

## Struttura

```
.
├── index.html          # pagina principale (+ meta SEO, JSON-LD)
├── src/
│   ├── styles.css      # stili
│   └── main.js         # entry point JS
├── public/             # asset serviti così come sono (copiati in dist/)
│   ├── logo.png
│   ├── favicon.ico / favicon-32.png / apple-touch-icon.png
│   ├── robots.txt / sitemap.xml
│   └── _headers        # header HTTP per Cloudflare Pages
├── vite.config.js
├── wrangler.toml
└── package.json
```

## Sviluppi futuri

- Nuove pagine: aggiungere un file `.html` e registrarlo in
  `vite.config.js → build.rollupOptions.input`.
- Aggiornare `public/sitemap.xml` quando si aggiungono pagine.
- Per contenuti dinamici o componenti, è possibile introdurre un framework
  (es. Astro/React) mantenendo Vite e Cloudflare Pages.
