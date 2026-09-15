# Christianah Adekunle — Portfolio

Personal site for **Adekunle Christianah Ayomide** (Luna), an AI/ML engineer and first-class Computer Science graduate of FUTA.

The visual language is matte dark purple (`#160e1a`), deep burgundy (`#6b1c2a`), white type, and charcoal (`#111111`) structural blocks. Type is **Inter** (the same family [victorakinode.com](https://victorakinode.com/) loads from Google Fonts). No gradients, no glow, no glass. The portrait is `public/portrait.jpg` (Aso Imagery).

Copy is limited to her GitHub (`i-am-christy`), her published posts, and facts she supplied. Platform accounts (Kaggle, Hugging Face, Hashnode, Streamlit, and similar) are listed only as profiles or tools, not as affiliations.

## Source code — where to edit

This project is a Next.js app. After you create a GitHub (or Origin) repository from this Cursor project, clone it and edit locally.

| What you want to change | File |
| --- | --- |
| Name, bio, experience, projects, skills, links | `src/lib/site.ts` |
| Home page layout | `src/app/page.tsx` |
| About, Work, Expertise, Writing, Contact | `src/app/about/page.tsx`, `src/app/work/`, `src/app/expertise/page.tsx`, `src/app/writing/page.tsx`, `src/app/contact/page.tsx` |
| Colours | `src/app/globals.css` |
| Portrait | `public/portrait.jpg` |
| Fonts | `src/app/layout.tsx` (`Inter` from `next/font/google`) |

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

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Inter.

## Deploy on Vercel

```bash
npx vercel --prod --yes
```

If you are not logged in:

```bash
npx vercel deploy --temporary --yes
```

Then open the claim URL the CLI prints so the deployment stays live under your Vercel account. No database or secrets are required.

GitHub Pages is a poor fit here: the site uses Next.js image optimisation and is not a static export.

Add the intern employer in `src/lib/site.ts` when you want that organisation named.
