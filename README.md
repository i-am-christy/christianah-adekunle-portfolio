# Christianah Adekunle — Portfolio

Personal site for **Adekunle Christianah Ayomide** (Luna), an AI/ML engineer and ML Research Intern at Veenode Technologies working on NLP for low-resource African languages. First-class Computer Science, FUTA.

Home uses a two-column hero with portrait, an about block with compact highlight cards (NACOSS Tech Confluence, DataLab, CGPA, presidency), practice lanes, project cards, experience, and writing. Resume is downloadable from the header. Sections use a short rise-in animation; the highlight cards stagger on scroll.

The visual language is matte dark purple (`#160e1a`), deep burgundy (`#6b1c2a`), white type, and charcoal (`#111111`) structural blocks. Type is **Inter** loads from Google Fonts). The portrait is `public/portrait.jpg`.

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
