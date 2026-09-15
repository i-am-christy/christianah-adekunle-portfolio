# Christianah Adekunle — Portfolio

Personal site for **Adekunle Christianah Ayomide** (Luna), an AI/ML engineer and first-class Computer Science graduate of FUTA.

The visual language is matte dark purple (`#160e1a`), deep burgundy (`#6b1c2a`), white type, and charcoal (`#111111`) structural blocks. No gradients, no glow, no glass. Copy is drawn from GitHub, Hashnode, and public professional records. The portrait is `public/portrait.jpg` (Aso Imagery).

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

```bash
npm run build
npm start
```

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.

## Deploy on Vercel

This is a standard Next.js app. From the project root:

```bash
npx vercel --prod --yes
```

If you are not logged in, create a claimable preview instead:

```bash
npx vercel deploy --temporary --yes
```

Then open the claim URL the CLI prints so the deployment stays live under your Vercel account. No database or secrets are required.

GitHub Pages is a poor fit here: the site uses Next.js image optimisation and is not a static export.

Replace the intern employer on the About page when you want that organisation named.
