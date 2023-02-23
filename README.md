My personal page. [Follow the link](https://pablomiragarcia.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/06c9d5b5-74cd-410c-ac62-0830260fc441/deploy-status)](https://app.netlify.com/sites/pablomiragarcia/deploys)

## 🚀 Project Structure

```bash
/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Head.astro
│   │   ├── NavigationBar
│   │   │   ├── Link.astro
│   │   │   ├── LinksSection.astro
│   │   │   └── Main.astro
│   │   ├── Post.astro
│   │   └── PostsGrid.astro
│   ├── env.d.ts
│   ├── icons
│   │   └── logo.svg
│   ├── layouts
│   │   └── MainLayout.astro
│   ├── pages
│   │   ├── 404.astro
│   │   └── blog
│   │       └── index.astro
│   └── styles
│       └── global.css
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
