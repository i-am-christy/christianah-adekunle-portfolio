export const site = {
  name: "Christianah Adekunle",
  legalName: "Adekunle Christianah Ayomide",
  shortName: "CA",
  nickname: "Luna",
  title: "AI/ML Engineer",
  role: "ML Research Intern",
  employer: "Veenode Technologies",
  location: "Lagos, Nigeria",
  email: "the.christianah.adekunle@gmail.com",
  headline: "Christianah Adekunle.",
  accent: "Engineer. Builder. First-class.",
  tagline:
    "Machine Learning Research Intern at Veenode Technologies, building a Nigerian code-switching NLP pipeline. First-class Computer Science, FUTA.",
  summary:
    "I design and ship end-to-end ML pipelines, voice AI agents, and data-driven products — from raw data to production APIs and interactive apps.",
  portrait: "/portrait.jpg",
  resume: "/christianah-adekunle-resume.pdf",
  urls: {
    github: "https://github.com/i-am-christy",
    linkedin: "https://linkedin.com/in/christianah-adekunle",
    hashnode: "https://i-am-christy.hashnode.dev/",
    kaggle: "https://www.kaggle.com/techrookie",
    huggingface: "https://huggingface.co/AllehellA",
    veenode: "https://veenode.org",
  },
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/expertise", label: "Expertise" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const

export const stats = [
  { value: "4.77/5.0", label: "CGPA" },
  { value: "Best in CS", label: "Class of 2024" },
  { value: "1st female", label: "NACOSS FUTA President" },
  { value: "8", label: "Projects on GitHub" },
] as const

export const highlights = [
  "AI & ML Engineer",
  "NLP for African languages",
  "Computer Vision",
  "Public Health ML",
] as const

export const expertise = [
  {
    slug: "predictive-modelling",
    title: "Predictive Modelling",
    subtitle: "Classification & ensembles",
    description:
      "Feature engineering, class-imbalance handling, and ensemble models — LightGBM, XGBoost, CatBoost, and Random Forests — evaluated with the metrics that actually matter in production.",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    subtitle: "Proctoring & detection",
    description:
      "Real-time identity checks, liveness, gaze, and object detection. YOLOv8, dlib landmarks, and websocket pipelines that turn a webcam into a reliable exam monitor.",
  },
  {
    slug: "public-health",
    title: "Public Health ML",
    subtitle: "Surveillance & risk maps",
    description:
      "Models that help allocate scarce health resources: malaria risk from household surveys, Lassa fever signals from social media, and geospatial early-warning APIs.",
  },
  {
    slug: "voice-language",
    title: "Voice & Language AI",
    subtitle: "Low-resource NLP",
    description:
      "NLP for low-resource African languages: Whisper ASR for Nigerian-accented English, code-switching pipelines, and Nigerian Sign Language pose generation.",
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Agents, RAG, workflows",
    description:
      "Voice agents, LLM-powered workflows, and RAG pipelines — n8n, VAPI, and the Claude API — wired into the tools people already use, not a chatbot in isolation.",
  },
  {
    slug: "data-pipelines",
    title: "Data Pipelines",
    subtitle: "From scrape to API",
    description:
      "Lead enrichment, market-data collectors, FastAPI services, and Dockerised inference. Pipelines that tolerate messy inputs and still return a clean JSON payload.",
  },
] as const

export type Project = {
  slug: string
  title: string
  category: string
  status: "Live" | "Open source" | "Research"
  summary: string
  problem: string
  description: string
  features: string[]
  impact: string
  role: string
  stack: string[]
  github: string
  live?: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: "whisper-nigerian",
    title: "Whisper-Small Nigerian ASR",
    category: "Speech",
    status: "Open source",
    summary:
      "Fine-tuned openai/whisper-small on Nigerian-accented English; normalized WER 5.25% (7.97% raw) on held-out eval.",
    problem:
      "Off-the-shelf ASR struggles with Nigerian-accented English, which breaks every pipeline that starts with speech.",
    description:
      "Fine-tuned openai/whisper-small on a Nigerian-accented English speech dataset and published the model plus a full model card — hyperparameters and before/after metrics — to Hugging Face Hub.",
    features: [
      "Full fine-tune of Whisper-small",
      "Held-out evaluation with WER",
      "Model card with training hyperparameters",
      "Published on Hugging Face Hub",
    ],
    impact:
      "Normalized WER dropped from the pretrained baseline to 5.25% (7.97% raw) on held-out eval.",
    role: "Fine-tuning, evaluation, and Hub publication.",
    stack: ["PyTorch", "Transformers", "Whisper", "Hugging Face Hub"],
    github: "https://huggingface.co/AllehellA/whisper-small-nigerian-en",
    live: "https://huggingface.co/AllehellA/whisper-small-nigerian-en",
    metrics: [
      { label: "Norm. WER", value: "5.25%" },
      { label: "Raw WER", value: "7.97%" },
    ],
  },
  {
    slug: "signbridge",
    title: "SignBridge",
    category: "Voice & Language AI",
    status: "Open source",
    summary:
      "Spoken Nigerian English to sign-language pose sequences via a pose transformer. The 3D avatar is still in progress.",
    problem:
      "Most speech tools stop at text. NSL users still need a signed output, not a caption.",
    description:
      "Audio is transcribed and a Progressive Transformer produces pose / animation data for Nigerian Sign Language. The Hugging Face Space is the live demo of that pose generation. A 3D avatar renderer is not shipped yet.",
    features: [
      "Speech-to-text into the pose pipeline",
      "Progressive Transformer for sign-language pose generation",
      "Hugging Face Space demo of animation data",
    ],
    impact:
      "A working pose-generation step toward accessible NSL output, without claiming a finished 3D product.",
    role: "Designed and trained the pose-transformer pipeline and published the demo on Hugging Face.",
    stack: ["PyTorch", "Whisper", "Transformers", "Hugging Face"],
    github: "https://github.com/i-am-christy/speech-to-sign-backend",
    live: "https://huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
  },
  {
    slug: "testa",
    title: "Testa",
    category: "Computer Vision",
    status: "Live",
    summary:
      "An AI-proctored exam platform with identity verification, blink liveness, gaze monitoring, and YOLOv8n object detection.",
    problem:
      "Remote exams are easy to game. Invigilators cannot watch every camera, and a single flag after the fact is too late.",
    description:
      "Testa is an examination product built around computer vision. Candidates upload a reference photo, pass an identity gate, blink to prove liveness, then sit the paper under live monitoring. The backend scores gaze, extra people, prohibited objects, and microphone activity into a timestamped violation log with a Low / Medium / High risk rating.",
    features: [
      "Face match against a reference photo",
      "Blink-based liveness check",
      "Gaze and head-pose tracking with dlib landmarks",
      "YOLOv8n detection for phones, books, and extra people",
      "Client-side voice-activity detection",
      "Admin live monitoring and post-exam review",
    ],
    impact:
      "Turns a webcam into an invigilator. Every session leaves a forensic trail — snapshots, audio evidence, and a rule-based risk score — so an exam board can review rather than guess.",
    role: "Built the computer-vision notebooks that became the production services, then wired them into a FastAPI + React 19 stack with websocket frame streaming.",
    stack: ["Python", "FastAPI", "YOLOv8", "dlib", "React", "TypeScript", "PostgreSQL"],
    github: "https://github.com/i-am-christy/testa",
    live: "https://testa-blush-nu.vercel.app",
  },
  {
    slug: "cooperative-rl",
    title: "Cooperative RL",
    category: "Reinforcement Learning",
    status: "Live",
    summary:
      "Q-learning that recommends continue, restructure, or escalate for borrowers in Nigerian cooperative societies.",
    problem:
      "Cooperative lenders often have no early-warning system. Default is noticed after the money is gone.",
    description:
      "A Q-learning agent trained on 5,000 simulated Nigerian cooperative loans. The state space is repayment ratio, missed payments, wealth index, and outstanding balance. Actions are continue, restructure, or flag for an administrator. A hybrid rule + Q-table engine covers unvisited states so the dashboard never invents an indefensible recommendation.",
    features: [
      "81-state Q-table trained over 1,000 episodes",
      "Hybrid rule overrides for high-risk borrowers",
      "SMOTE-balanced preprocessing pipeline",
      "Streamlit dashboard for single-borrower assessment",
      "Portfolio-level action distribution and reward curve",
    ],
    impact:
      "The agent recalls 63.2% of defaulters on the hold-out set — an early-warning layer for cooperatives that currently have none. Logistic regression still wins on classification; the RL model wins on actionable interventions.",
    role: "Sole author: data simulation, MDP design, training, evaluation, and the administrator dashboard.",
    stack: ["Python", "NumPy", "scikit-learn", "SMOTE", "Streamlit"],
    github: "https://github.com/i-am-christy/cooperative_rl",
    live: "https://cooperativer-rl.streamlit.app/",
    metrics: [
      { label: "Recall", value: "0.632" },
      { label: "Accuracy", value: "0.740" },
      { label: "AUC-ROC", value: "0.695" },
    ],
  },
  {
    slug: "malaria-prediction",
    title: "Malaria Risk Map",
    category: "Public Health ML",
    status: "Live",
    summary:
      "Random Forest on NMIS 2021 (70,428 records), with a household risk predictor and a state-level choropleth.",
    problem:
      "Nigeria carries about 27% of the global malaria burden. National programmes still allocate nets and tests with coarse geography.",
    description:
      "A supervised pipeline on the Nigeria Malaria Indicator Survey 2021 (70,428 records). Logistic Regression, Decision Tree, and Random Forest are trained with 10-fold stratified CV and SMOTE. The winning Random Forest (AUC-ROC 0.80) is served in Streamlit: a household form that returns Low / Moderate / High risk, and a choropleth of positivity across 37 states.",
    features: [
      "NMIS 2021 household-member recode (DHS)",
      "RF importance screening and SMOTE",
      "10-fold stratified cross-validation",
      "Interactive Nigeria risk map",
      "Instant household risk score",
    ],
    impact:
      "A practical tool for targeting interventions at state and household resolution instead of a single national average.",
    role: "End-to-end: data contract with DHS, training pipeline, evaluation, and Streamlit product.",
    stack: ["Python", "scikit-learn", "pandas", "Streamlit", "NMIS 2021"],
    github: "https://github.com/i-am-christy/malaria-prediction",
    live: "https://malaria-prediction-webapp.streamlit.app/",
    metrics: [
      { label: "RF accuracy", value: "0.721" },
      { label: "F1", value: "0.729" },
      { label: "AUC-ROC", value: "0.799" },
    ],
  },
  {
    slug: "lassa-surveillance",
    title: "Lassa Fever Surveillance",
    category: "Public Health ML",
    status: "Open source",
    summary:
      "Tweet-relevance classifier packaged as a Dockerised FastAPI service on Render, with spaCy NER for Nigerian location.",
    problem:
      "Official Lassa reporting lags the outbreak. Digital traces on social media appear first, but they are noisy and unlocated.",
    description:
      "An early-warning pipeline: OSINT scraping for Lassa-related posts, heuristic auto-labelling plus human review, a lightweight TF-IDF Random Forest (under 500 MB), spaCy NER with a Nigeria-state fallback, and a Dockerised FastAPI /predict endpoint.",
    features: [
      "Custom tweet ingestion without a paid API",
      "Weak supervision with human-in-the-loop review",
      "TF-IDF + Random Forest classifier",
      "spaCy NER plus Nigerian state/city fallback",
      "Batch and single-tweet JSON API",
    ],
    impact:
      "Shows that outbreak intelligence does not need a giant LLM. A portable model can flag relevant posts and attach a location in milliseconds.",
    role: "Took the classifier from notebook to a containerised FastAPI service on Render — packaging model artifacts and dependencies into a working Docker image. Wrote the technical walkthrough on Hashnode.",
    stack: ["Python", "scikit-learn", "spaCy", "FastAPI", "Docker", "Render"],
    github: "https://github.com/i-am-christy/lassa_fever_surveillance_model",
  },
  {
    slug: "crypto-recommender",
    title: "Crypto Recommender",
    category: "Applied ML",
    status: "Open source",
    summary:
      "CoinGecko market data, engineered momentum and volatility features, and a FastAPI service that says Strong Buy, Buy, or Avoid.",
    problem:
      "Most coin tips are vibes. A conservative investor and an aggressive one should not see the same list.",
    description:
      "A rule-based statistical recommender. It pulls live CoinGecko data, computes momentum, volatility, liquidity, and value metrics, then ranks assets against Conservative, Moderate, or Aggressive risk preference. Explainable by design — no black-box model pretending to know the future.",
    features: [
      "Real-time CoinGecko collection with retries",
      "Feature engineering for momentum and volatility",
      "Risk-preference matched rankings",
      "FastAPI deployment and Docker image",
    ],
    impact:
      "An inspectable buy/hold/avoid layer that a user can actually argue with, instead of a mystery score.",
    role: "Built the collector, feature pipeline, scoring rules, and API.",
    stack: ["Python", "CoinGecko API", "pandas", "FastAPI", "Docker"],
    github: "https://github.com/i-am-christy/crypto-investment-recommender",
  },
  {
    slug: "lead-pipeline",
    title: "Lead Enrichment Pipeline",
    category: "Data Engineering",
    status: "Open source",
    summary:
      "Google Maps discovery, Apollo/Hunter/ZeroBounce enrichment, Supabase storage, and outreach states from raw to sent.",
    problem:
      "Sales teams start from a spreadsheet of names with no emails, no validation, and no memory of who was contacted.",
    description:
      "A Node.js pipeline that finds businesses, enriches people and companies, validates emails, upserts into Postgres, and tracks outreach. Failures are first-class: Promise.allSettled, Logtail, and Sentry keep a noisy multi-API world from taking the whole run down.",
    features: [
      "Query-based lead collection",
      "Apollo, Hunter, and ZeroBounce enrichment",
      "Supabase repository pattern with upserts",
      "Outreach states: raw, sent, failed",
      "Upstash Redis job queue",
    ],
    impact:
      "A repeatable backend for outbound work — structured contacts instead of a graveyard of CSVs.",
    role: "Backend engineering: API clients, storage layer, and pipeline orchestration.",
    stack: ["Node.js", "Supabase", "Redis", "Sentry", "Resend"],
    github: "https://github.com/i-am-christy/solar-marketing-pipeline",
  },
  {
    slug: "co2-emissions",
    title: "Vehicle CO₂ Analysis",
    category: "Data Analysis",
    status: "Open source",
    summary:
      "EDA of 2,222 Canadian vehicle models: which fuel types, classes, and engines actually move the emissions needle.",
    problem:
      "Consumers are sold 'efficient' vehicles without a clear picture of what drives tailpipe CO₂.",
    description:
      "Transport Canada fuel-consumption ratings, analysed with pandas and seaborn and wrapped in a Streamlit filter dashboard. Fuel consumption correlates 0.90 with CO₂. Compact diesels and the Prius sit at the clean end; passenger vans and Lamborghinis do not.",
    features: [
      "Correlation and group-level EDA",
      "Interactive make / class / fuel filters",
      "Policy-facing recommendations",
    ],
    impact:
      "Turns a government table into advice a buyer or a regulator can act on.",
    role: "Analysis, visualisation, and dashboard.",
    stack: ["Python", "pandas", "seaborn", "Streamlit"],
    github: "https://github.com/i-am-christy/vehicle_co2_emissions_analysis",
  },
]

export const competitions = [
  {
    title: "DSN-AI-hackathon-2024",
    year: "2024",
    href: "https://github.com/i-am-christy/DSN-AI-hackathon-2024",
    note: "This repo contains my submission for DSN/AI hackathon 2024",
  },
  {
    title: "blue-chip-comp",
    year: "2023",
    href: "https://github.com/i-am-christy/blue-chip-comp",
    note: "This repo contains my submission for blue-chip-competition 2023",
  },
  {
    title: "bluechip-kaggle-2024",
    year: "2024",
    href: "https://github.com/i-am-christy/bluechip-kaggle-2024",
    note: "github.com/i-am-christy/bluechip-kaggle-2024",
  },
  {
    title: "wids-challenge2",
    year: "2024",
    href: "https://github.com/i-am-christy/wids-challenge2",
    note: "The code that I wrote to participate in wids datathon challenge 2 (2024)",
  },
  {
    title: "HNG_task_1",
    year: "2025",
    href: "https://github.com/i-am-christy/HNG_task_1",
    note: "Using Data Analysis for SEO optimization and shortening of product titles",
  },
] as const

export const writing = [
  {
    title: "Engineering a Real-Time Lassa Fever Surveillance Model",
    date: "December 2025",
    href: "https://i-am-christy.hashnode.dev/engineering-a-real-time-lassa-fever-surveillance-model",
    summary:
      "How a scraper, weak supervision, a small Random Forest, and a Nigeria-aware NER fallback become an outbreak API — without standing up an LLM.",
  },
  {
    title: "A Data Science Journey with Lasso Regression to Predict Chess Game Winners",
    date: "November 2024",
    href: "https://i-am-christy.hashnode.dev/a-data-science-journey-with-lasso-regression-to-predict-chess-game-winner",
    summary:
      "Lichess data, regularisation, and the unglamorous work of asking which features actually decide a game of kings.",
  },
  {
    title: "Marketing Insight Report",
    date: "January 2025",
    href: "https://i-am-christy.hashnode.dev/marketing-insight-report",
    summary:
      "9,994 transactions later: discounts were eating profit, tables were a trap, and the West region was carrying the business.",
  },
] as const

export const experience = [
  {
    role: "Machine Learning Research Intern",
    org: "Veenode Technologies",
    period: "2025 – Present",
    detail:
      "Building a Nigerian code-switching NLP pipeline (English, Nigerian Pidgin, Yoruba, Hausa, Igbo) starting from the MENYO-20k dataset, including synthetic data generation strategies, under a Lagos AI research team.",
  },
  {
    role: "Data Analyst Intern",
    org: "Ondo State Contributory Health Commission",
    period: "Jul 2024 – Nov 2024",
    detail:
      "Built Power BI and Excel dashboards for departmental KPI reporting; used Python (Pandas) to automate data aggregation across multiple sources.",
  },
  {
    role: "President",
    org: "NACOSS, FUTA Chapter",
    period: "Undergraduate",
    detail:
      "First female, longest-serving, and most active President of the Nigeria Association of Computer Science Students at FUTA.",
  },
  {
    role: "General Secretary",
    org: "NACOSS, FUTA Chapter",
    period: "Undergraduate",
    detail:
      "Served as General Secretary of the Nigeria Association of Computer Science Students, FUTA Chapter.",
  },
  {
    role: "Chairman, Class of 2024 FYB Committee",
    org: "Department of Computer Science, FUTA",
    period: "2024",
    detail:
      "Led farewell operations for the graduating Computer Science cohort.",
  },
] as const

export const skills = [
  {
    group: "Machine learning",
    items: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "scikit-learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Q-learning",
    ],
  },
  {
    group: "Computer vision & language",
    items: ["Whisper", "YOLOv8", "dlib", "Transformers", "spaCy"],
  },
  {
    group: "AI automation",
    items: ["n8n", "VAPI", "Claude API", "RAG", "LLM workflows"],
  },
  {
    group: "Product & data",
    items: [
      "FastAPI",
      "Docker",
      "Hugging Face Hub",
      "Streamlit",
      "React",
      "PostgreSQL",
      "pandas",
      "Power BI",
    ],
  },
] as const

export const leadership = [
  {
    title: "NACOSS FUTA President",
    detail:
      "First female, longest-serving, and most active President of the Nigeria Association of Computer Science Students, FUTA Chapter.",
  },
  {
    title: "NACOSS FUTA General Secretary",
    detail:
      "Served as General Secretary of the Nigeria Association of Computer Science Students, FUTA Chapter.",
  },
  {
    title: "Class of 2024 FYB Chairman",
    detail:
      "Chaired the Computer Science farewell committee — the operational side of graduating a cohort, not just sitting in the photo.",
  },
] as const

export const awards = [
  {
    title: "Best Graduating Student",
    detail:
      "Department of Computer Science, Class of 2024. CGPA 4.77 / 5.0. Graduate Member, Computer Professionals Registration Council of Nigeria (GMCPN).",
  },
  {
    title: "Most Outstanding NACOSS Executive",
    detail:
      "Recognised as the most outstanding NACOSS executive at the FUTA chapter.",
  },
  {
    title: "Academia Female of the Year",
    detail: "Class of 2024.",
  },
] as const

export const about = {
  intro:
    "I'm an AI/ML Engineer and ML Research Intern at Veenode Technologies, where I build solutions to NLP problems as they relate to low-resource African languages. My approach is pretty simple: if an answer exists, I'll dig until I find it.",
  body: [
    "I finished top of my class — Best Graduating Student, B.Tech Computer Science, FUTA, CGPA 4.77/5.0 — and I'm also a Graduate Member of CPN. What stuck with me from those years wasn't the coursework, honestly. It was learning to sit with a problem until the \"why\" actually made sense, instead of moving on once something worked. I also spent a good chunk of undergrad leading people: General Secretary of NACOSS, then its first female and longest-serving President, plus FYB Chairman for the CS Class of 2024. So I've had practice both shipping work and getting a room of people to move in the same direction.",
    "These days I'm pointing that foundation at scalable AI systems — Python, Scikit-Learn, TensorFlow — and treating every unfamiliar tool as a quick problem to solve rather than a reason to wait. I write about what I'm learning along the way. Partly because explaining something is the fastest way to find out if I actually understand it, partly because I'd rather AI stay legible than stay mysterious.",
    "I'm looking for an entry-level ML role or internship, ideally somewhere I can learn from people sharper than me and get my hands on work that ships. If that's you, I'm around.",
  ],
  facts: [
    { label: "Full name", value: "Adekunle Christianah Ayomide" },
    { label: "Now", value: "Machine Learning Research Intern, Veenode Technologies" },
    { label: "Also", value: "Luna" },
    { label: "Based in", value: "Lagos, Nigeria" },
    { label: "Education", value: "B.Tech Computer Science, First Class — FUTA" },
    { label: "Honour", value: "Best Graduating Student, Class of 2024 · 4.77/5.0" },
    {
      label: "Awards",
      value:
        "Most Outstanding NACOSS Executive · Academia Female of the Year, Class of 2024",
    },
    { label: "Registration", value: "Graduate Member, CPN (GMCPN)" },
  ],
  education: [
    {
      school: "Federal University of Technology, Akure",
      credential: "B.Tech Computer Science, First Class",
      extra: "Nov 2019 – Nov 2025 · Best Graduating Student, Class of 2024 · CGPA 4.77/5.0",
    },
    {
      school: "Computer Professionals Registration Council of Nigeria",
      credential: "Graduate Member (GMCPN)",
      extra: "Professional registration",
    },
  ],
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getExpertise(slug: string) {
  return expertise.find((item) => item.slug === slug)
}
