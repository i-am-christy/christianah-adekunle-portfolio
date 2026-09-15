# Christianah Adekunle — Portfolio

Personal site for **Adekunle Christianah Ayomide** (Luna), an AI/ML engineer and ML Research Intern at Veenode Technologies working on NLP for low-resource African languages. First-class Computer Science, FUTA.

Home uses a two-column hero with portrait, an about block with stats, practice lanes, project cards, experience, and writing. Resume is downloadable from the header.

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
| Resume PDF | `public/christianah-adekunle-resume.pdf` |
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

## Push to GitHub (`i-am-christy`)

This cloud workspace is not logged in as that GitHub account. From a machine where you are signed in as **i-am-christy**:

1. Create an empty repository on GitHub (no README, no `.gitignore`, no license), for example `christianah-adekunle-portfolio`.
2. In the project root:

```bash
git remote add github https://github.com/i-am-christy/christianah-adekunle-portfolio.git
git branch -M main
git push -u github main
```

If GitHub already created a `README` on the new repo, pull with rebase first:

```bash
git pull github main --rebase --allow-unrelated-histories
git push -u github main
```

Commit any local edits before you push:

```bash
git add -A
git status
git commit -m "Describe your change"
git push
```

## Deploy on Vercel

Browser login at [vercel.com](https://vercel.com) is enough. You do not need the CLI.

1. Open [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repo (`i-am-christy/christianah-adekunle-portfolio`).
3. If Vercel asks to install the GitHub app, grant access to that repo (or the whole `i-am-christy` account).
4. Leave the defaults: Framework **Next.js**, Root Directory **`.`**, build command `next build`.
5. Click **Deploy**. No environment variables are required.

The production URL will look like `https://christianah-adekunle-portfolio.vercel.app`. You can share that freely. Later pushes to `main` on GitHub will redeploy automatically.

Optional CLI (only if `npx vercel whoami` shows your account):

```bash
npx vercel login
npx vercel --prod --yes
```

Logging into the Vercel website does not log in the CLI on another computer.

GitHub Pages is a poor fit here: the site uses Next.js image optimisation and is not a static export.

The downloadable resume is `public/christianah-adekunle-resume.pdf`, converted from the attached CV.

Live: [christianahadekunle.vercel.app](https://christianahadekunle.vercel.app/).
