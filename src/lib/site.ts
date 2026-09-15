export const site = {
  name: "Christianah Adekunle",
  legalName: "Adekunle Christianah Ayomide",
  shortName: "CA",
  nickname: "Luna",
  title: "AI/ML Engineer",
  role: "ML Research Intern",
  employer: "Veenode Technologies",
  location: "Akure, Ondo State, Nigeria",
  email: "the.christianah.adekunle@gmail.com",
  headline: "Christianah Adekunle.",
  accent: "I build machine learning systems.",
  tagline: "ML Research Intern at Veenode Technologies.",
  summary:
    "First-class Computer Science, FUTA. Applied ML for health, language, and finance.",
  portrait: "/portrait.jpg",
  resume: "/christianah-adekunle-resume.pdf",
  urls: {
    github: "https://github.com/i-am-christy",
    linkedin: "https://linkedin.com/in/christianah-adekunle",
    hashnode: "https://i-am-christy.hashnode.dev/",
    kaggle: "https://www.kaggle.com/techrookie",
    huggingface: "https://huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
    veenode: "https://veenode.org",
  },
} as const

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
] as const

export const expertise = [
  {
    slug: "predictive-modelling",
    title: "Predictive modelling",
    subtitle: "Classification & ensembles",
    description: "Feature engineering, class imbalance, and ensembles (LightGBM, XGBoost, CatBoost).",
  },
  {
    slug: "computer-vision",
    title: "Computer vision",
    subtitle: "Proctoring & detection",
    description: "Identity, liveness, gaze, and object detection with YOLOv8 and landmark models.",
  },
  {
    slug: "public-health",
    title: "Public health ML",
    subtitle: "Surveillance & risk maps",
    description: "Malaria risk from household surveys and Lassa signals from social posts.",
  },
  {
    slug: "voice-language",
    title: "Voice & language",
    subtitle: "Speech, RAG, agents",
    description: "Whisper, sign-language production, RAG, and voice agents.",
  },
  {
    slug: "ai-automation",
    title: "AI automation",
    subtitle: "Agents & workflows",
    description: "n8n, VAPI, and Claude workflows wired into tools people already use.",
  },
  {
    slug: "data-pipelines",
    title: "Data pipelines",
    subtitle: "From scrape to API",
    description: "Lead enrichment, collectors, FastAPI services, and Dockerised inference.",
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
  stack: string[]
  github: string
  live?: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: "testa",
    title: "Testa",
    category: "Computer vision",
    status: "Live",
    summary: "AI exam proctoring: identity, liveness, gaze, and YOLOv8 object detection.",
    problem: "Remote exams are easy to game without real-time camera checks.",
    description:
      "Candidates verify identity and liveness, then sit the paper under live computer-vision monitoring.",
    stack: ["Python", "FastAPI", "YOLOv8", "dlib", "React", "PostgreSQL"],
    github: "https://github.com/i-am-christy/testa",
    live: "https://testa-blush-nu.vercel.app",
  },
  {
    slug: "signbridge",
    title: "SignBridge",
    category: "Voice & language",
    status: "Open source",
    summary: "Spoken English to 3D Nigerian Sign Language via Whisper and a pose transformer.",
    problem: "Most speech tools stop at text. NSL users still need a signed output.",
    description:
      "Whisper transcribes audio; a Progressive Transformer produces pose; a 3D avatar signs it.",
    stack: ["PyTorch", "Whisper", "FastAPI", "React", "Three.js"],
    github: "https://github.com/i-am-christy/speech-to-sign-backend",
    live: "https://huggingface.co/spaces/AllehellA/nigerian-speech-to-sign",
  },
  {
    slug: "cooperative-rl",
    title: "Cooperative RL",
    category: "Reinforcement learning",
    status: "Live",
    summary: "Q-learning for continue / restructure / escalate on cooperative loans.",
    problem: "Cooperative lenders often see default only after the money is gone.",
    description:
      "An 81-state Q-table on simulated Nigerian cooperative loans, with a Streamlit dashboard.",
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
    category: "Public health ML",
    status: "Live",
    summary: "Random Forest malaria risk from NMIS 2021, with a state-level map.",
    problem: "Malaria targeting in Nigeria is still too coarse for household decisions.",
    description: "Supervised models on 10,717 RDT results. Random Forest AUC-ROC 0.80.",
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
    category: "Public health ML",
    status: "Open source",
    summary: "TF-IDF + Random Forest API that flags Lassa-related posts and a Nigerian location.",
    problem: "Official Lassa reports lag. Social posts appear first, but they are noisy.",
    description: "Scrape, weak labels, a small classifier, and FastAPI inference.",
    stack: ["Python", "scikit-learn", "spaCy", "FastAPI", "Docker"],
    github: "https://github.com/i-am-christy/lassa_fever_surveillance_model",
  },
  {
    slug: "crypto-recommender",
    title: "Crypto Recommender",
    category: "Applied ML",
    status: "Open source",
    summary: "CoinGecko features in, Strong Buy / Buy / Avoid out, via FastAPI.",
    problem: "Coin lists ignore risk preference.",
    description:
      "Rule-based momentum and volatility scores matched to Conservative, Moderate, or Aggressive.",
    stack: ["Python", "CoinGecko API", "pandas", "FastAPI", "Docker"],
    github: "https://github.com/i-am-christy/crypto-investment-recommender",
  },
  {
    slug: "lead-pipeline",
    title: "Lead Enrichment Pipeline",
    category: "Data engineering",
    status: "Open source",
    summary: "Maps → enrichment → validated emails in Postgres, with outreach state.",
    problem: "Outbound starts from names with no emails and no memory of who was contacted.",
    description: "Node.js pipeline: discovery, Apollo/Hunter/ZeroBounce, Supabase upserts, Redis jobs.",
    stack: ["Node.js", "Supabase", "Redis", "Sentry", "Resend"],
    github: "https://github.com/i-am-christy/solar-marketing-pipeline",
  },
  {
    slug: "co2-emissions",
    title: "Vehicle CO₂ Analysis",
    category: "Data analysis",
    status: "Open source",
    summary: "EDA of 2,222 Canadian vehicle models: what actually moves tailpipe CO₂.",
    problem: "‘Efficient’ vehicles are sold without a clear picture of emissions drivers.",
    description: "Transport Canada ratings in pandas, with a Streamlit filter dashboard.",
    stack: ["Python", "pandas", "seaborn", "Streamlit"],
    github: "https://github.com/i-am-christy/vehicle_co2_emissions_analysis",
  },
]

export const competitions = [
  {
    title: "DSN-AI-hackathon-2024",
    year: "2024",
    href: "https://github.com/i-am-christy/DSN-AI-hackathon-2024",
  },
  {
    title: "bluechip-kaggle-2024",
    year: "2024",
    href: "https://github.com/i-am-christy/bluechip-kaggle-2024",
  },
  {
    title: "wids-challenge2",
    year: "2024",
    href: "https://github.com/i-am-christy/wids-challenge2",
  },
  {
    title: "blue-chip-comp",
    year: "2023",
    href: "https://github.com/i-am-christy/blue-chip-comp",
  },
  {
    title: "HNG_task_1",
    year: "2025",
    href: "https://github.com/i-am-christy/HNG_task_1",
  },
] as const

export const writing = [
  {
    title: "Engineering a Real-Time Lassa Fever Surveillance Model",
    date: "Dec 2025",
    href: "https://i-am-christy.hashnode.dev/engineering-a-real-time-lassa-fever-surveillance-model",
  },
  {
    title: "Predicting chess winners with Lasso regression",
    date: "Nov 2024",
    href: "https://i-am-christy.hashnode.dev/a-data-science-journey-with-lasso-regression-to-predict-chess-game-winner",
  },
  {
    title: "Marketing Insight Report",
    date: "Jan 2025",
    href: "https://i-am-christy.hashnode.dev/marketing-insight-report",
  },
] as const

export const experience = [
  {
    role: "ML Research Intern",
    org: "Veenode Technologies",
    href: "https://veenode.org",
    period: "Present",
    detail: "Machine learning research for AI products.",
  },
  {
    role: "President",
    org: "NACOSS, FUTA Chapter",
    period: "Undergraduate",
    detail: "First female, longest-serving, and most active President of NACOSS FUTA.",
  },
  {
    role: "General Secretary",
    org: "NACOSS, FUTA Chapter",
    period: "Undergraduate",
    detail: "General Secretary, NACOSS FUTA Chapter.",
  },
  {
    role: "FYB Chairman",
    org: "Computer Science, FUTA",
    period: "2024",
    detail: "Chairman, Computer Science Class of 2024 FYB Committee.",
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
    items: ["FastAPI", "Streamlit", "React", "Node.js", "PostgreSQL", "pandas", "Docker"],
  },
] as const

export const awards = [
  {
    title: "Best Graduating Student",
    detail: "Computer Science, Class of 2024 · CGPA 4.77 / 5.0 · GMCPN",
  },
  {
    title: "Most Outstanding NACOSS Executive",
    detail: "NACOSS FUTA Chapter",
  },
  {
    title: "Academia Female of the Year",
    detail: "Class of 2024",
  },
] as const

export const about = {
  intro:
    "I’m an AI/ML engineer and ML Research Intern at Veenode Technologies. I ship models that leave the notebook — computer vision, public-health prediction, and language systems.",
  body: [
    "First-class B.Tech Computer Science, FUTA (Best Graduating Student, Class of 2024, CGPA 4.77/5.0). Graduate Member of CPN (GMCPN).",
    "At FUTA I served as General Secretary, then as the first female, longest-serving, and most active President of NACOSS, and as FYB Chairman for Computer Science Class of 2024.",
  ],
  facts: [
    { label: "Name", value: "Adekunle Christianah Ayomide" },
    { label: "Now", value: "ML Research Intern, Veenode Technologies" },
    { label: "Education", value: "B.Tech Computer Science, First Class — FUTA" },
    { label: "Registration", value: "GMCPN" },
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
