# Studio Bressan

Sito web dello **Studio Bressan** — Dott.ssa Romina Bressan, Commercialista e
Revisore Legale (Rovigo).

Attualmente è un sito placeholder (single page) con i recapiti dello studio,
costruito per crescere facilmente verso un sito completo.

## Stack

- **[Vite](https://vite.dev/)** — dev server + build statico (nessun framework).
- HTML / CSS / JS vanilla, zero dipendenze a runtime.
- Deploy su **GitHub Pages** (output statico).

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

## Deploy su GitHub Pages

Il repository di pubblicazione è:

```text
git@github.com:danog-clients/studio-bressan.net.git
```

### Prima pubblicazione

```bash
npm run deploy
```

Lo script esegue una build locale e poi pubblica il commit corrente su
`danog-clients/studio-bressan.net`, branch `main`.

Se preferisci configurare il remote una volta sola:

```bash
git remote add pages git@github.com:danog-clients/studio-bressan.net.git
git push pages HEAD:main
```

### Deploy automatico

Il workflow `.github/workflows/pages.yml`:

- installa le dipendenze con `npm ci`;
- genera la build con `npm run build`;
- pubblica `dist/` su GitHub Pages con le Actions ufficiali di GitHub.

Nel repository GitHub:

- abilita **Settings → Pages → Build and deployment → Source: GitHub Actions**;
- imposta **Settings → Pages → Custom domain** su `studio-bressan.net`;
- abilita **Enforce HTTPS** quando GitHub lo rende disponibile.

### Dominio

`studio-bressan.net` è un dominio apex. Nel DNS, configura `@` verso GitHub
Pages con record `A`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Se vuoi supportare anche IPv6, aggiungi record `AAAA`:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Il file `public/CNAME` mantiene il dominio custom nel build artifact, ma con
GitHub Actions la configurazione effettiva va impostata anche in **Settings →
Pages**.

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
│   └── CNAME           # dominio custom GitHub Pages
├── .github/workflows/
│   └── pages.yml       # build + deploy su GitHub Pages
├── vite.config.js
└── package.json
```

## Sviluppi futuri

- Nuove pagine: aggiungere un file `.html` e registrarlo in
  `vite.config.js → build.rollupOptions.input`.
- Aggiornare `public/sitemap.xml` quando si aggiungono pagine.
- Per contenuti dinamici o componenti, è possibile introdurre un framework
  (es. Astro/React) mantenendo Vite e GitHub Pages.
