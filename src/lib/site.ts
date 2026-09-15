export const site = {
  name: "Christianah Adekunle",
  legalName: "Adekunle Christianah Ayomide",
  shortName: "CA",
  nickname: "Luna",
  title: "AI/ML Engineer",
  location: "Akure, Ondo State, Nigeria",
  email: "the.christianah.adekunle@gmail.com",
  headline: "Christianah Adekunle.",
  accent: "Engineer. Builder. First-class.",
  tagline:
    "Machine learning systems for health, language, and finance. First-class Computer Science graduate from FUTA. Currently an ML engineering intern.",
  summary:
    "I design and ship end-to-end ML pipelines, voice AI agents, and data-driven products — from raw data to production APIs and interactive apps.",
  portrait: "/portrait.jpg",
  urls: {
    github: "https://github.com/i-am-christy",
    linkedin: "https://linkedin.com/in/christianah-adekunle",
    hashnode: "https://i-am-christy.hashnode.dev/",
    kaggle: "https://www.kaggle.com/techrookie",
    huggingface: "https://huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
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
  "Computer Vision",
  "Public Health ML",
  "Voice & Language AI",
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
    subtitle: "Speech, RAG, agents",
    description:
      "Whisper transcription, transformer sign-language production, LLM workflows, and voice agents. Building the layer between spoken language and usable software.",
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
    slug: "signbridge",
    title: "SignBridge",
    category: "Voice & Language AI",
    status: "Open source",
    summary:
      "Spoken audio to 3D Nigerian Sign Language. Whisper for speech, a Progressive Transformer for pose, and a Three.js avatar.",
    problem:
      "Most speech tools stop at text. Deaf Nigerians who use NSL still have to wait for a human interpreter.",
    description:
      "SignBridge is a real-time translator between spoken English and Nigerian Sign Language. Audio is transcribed with OpenAI Whisper, mapped to skeletal pose sequences by a custom Progressive Transformer, and rendered on a 3D avatar with React Three Fiber. The Hugging Face Space hosts a public demo of the speech-to-sign pipeline.",
    features: [
      "Whisper speech-to-text",
      "Progressive Transformer for sign-language production",
      "3D avatar with React Three Fiber",
      "Live microphone capture and file upload",
      "FastAPI inference service",
    ],
    impact:
      "A working prototype of accessible communication for NSL users — not a caption, a signed animation.",
    role: "Designed the ML pipeline and FastAPI backend; the frontend consumes pose data and drives the avatar.",
    stack: ["PyTorch", "Whisper", "FastAPI", "React", "Three.js", "Tailwind"],
    github: "https://github.com/i-am-christy/speech-to-sign-backend",
    live: "https://huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
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
      "Random Forest on the 2021 Nigeria Malaria Indicator Survey, deployed as a household predictor and state-level choropleth.",
    problem:
      "Nigeria carries about 27% of the global malaria burden. National programmes still allocate nets and tests with coarse geography.",
    description:
      "A supervised pipeline on 10,717 valid RDT results from NMIS 2021. Logistic Regression, Decision Tree, and Random Forest are trained with 10-fold stratified CV and SMOTE. The winning Random Forest (AUC-ROC 0.80) is served in Streamlit: a household form that returns Low / Moderate / High risk, and a choropleth of positivity across 37 states.",
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
      "Tweet scraper, weak supervision, TF-IDF + Random Forest, and a FastAPI service that returns relevance, confidence, and Nigerian location.",
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
    role: "Designed the labelling strategy, trained the classifier, and packaged inference as a containerised API. Wrote the technical walkthrough on Hashnode.",
    stack: ["Python", "scikit-learn", "spaCy", "FastAPI", "Docker"],
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
    role: "Machine Learning Engineering Intern",
    org: "",
    period: "Present",
    detail:
      "I design and ship end-to-end ML pipelines, voice AI agents, and data-driven products — from raw data to production deployment.",
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
      "scikit-learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "PyTorch",
      "Q-learning",
    ],
  },
  {
    group: "Computer vision & language",
    items: ["YOLOv8", "dlib", "Whisper", "Transformers", "spaCy"],
  },
  {
    group: "AI automation",
    items: ["n8n", "VAPI", "Claude API", "RAG", "LLM workflows"],
  },
  {
    group: "Product & data",
    items: [
      "FastAPI",
      "Streamlit",
      "React",
      "Node.js",
      "PostgreSQL",
      "pandas",
      "Docker",
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
    "Adekunle Christianah Ayomide is an AI/ML engineer who builds systems that leave the notebook. Her work spans computer vision for exam integrity, reinforcement learning for cooperative lending, public-health models for malaria and Lassa fever, and LLM-powered automation.",
  body: [
    "She is a first-class graduate of Computer Science at the Federal University of Technology, Akure, and the Best Graduating Student of the 2024 class (CGPA 4.77/5.0). She currently works as a Machine Learning Engineering Intern, shipping pipelines, voice agents, RAG workflows, and data products.",
    "Before that title, she was already running things: first female, longest-serving, and most active President of NACOSS FUTA, previously General Secretary of the same association, and Chairman of the Computer Science Class of 2024 FYB Committee. She is a Graduate Member of the Computer Professionals Registration Council of Nigeria (GMCPN).",
    "The through-line in the GitHub is Nigeria-shaped problems: NSL animation, cooperative loan recovery, state-level malaria maps, Lassa signals in tweets. The stack is Python, scikit-learn, PyTorch, FastAPI, n8n, and whatever frontend the user actually needs.",
  ],
  facts: [
    { label: "Full name", value: "Adekunle Christianah Ayomide" },
    { label: "Also", value: "Luna" },
    { label: "Based in", value: "Akure, Ondo State, Nigeria" },
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
      extra: "Best Graduating Student, Class of 2024 · CGPA 4.77/5.0",
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
