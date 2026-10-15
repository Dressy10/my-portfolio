# Samuel Dressman - Portfolio

Personal portfolio built with React, TypeScript and Vite.

## Develop

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run lint
```

## Docker

```bash
docker compose up --build
```

## Structure

- `src/index.css` - design tokens (colours, type scale, spacing) and shared styles
- `src/components/` - one component and stylesheet per section (Hero, About, Skills, Projects, Resume, Certifications, Contact)
- `.github/workflows/portfolio.yml` - CI/CD pipeline
