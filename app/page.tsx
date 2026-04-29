type LinkItem = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  summary: string;
  highlights: string[];
  links: LinkItem[];
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
};

const profile = {
  name: "Pranav Praburam",
  headline: "Data Engineer and Backend Engineer",
  subheadline:
    "I build ETL pipelines, analytics APIs, and backend data services that turn complex data into reliable products and practical business insights.",
  quickLinks: [
    { label: "Resume", href: "/Pranav_Praburam_Resume_Updated.pdf" },
    { label: "GitHub", href: "https://github.com/pranav-praburam" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranavpraburam" },
  ],
};

const projects: Project[] = [
  {
    name: "NBA Analytics Data Pipeline",
    summary:
      "An end-to-end NBA data and machine learning platform for ingesting, transforming, and serving real-time game data through analytics APIs and prediction workflows.",
    highlights: [
      "Designed and deployed an end-to-end pipeline with FastAPI and PostgreSQL to process 2,000+ NBA games across multiple seasons.",
      "Implemented incremental, idempotent ingestion workflows with composite keys and automated daily jobs through GitHub Actions.",
      "Built analytics APIs, data quality endpoints, and a scikit-learn logistic regression model that reached 69.8% accuracy and 0.75 ROC-AUC for matchup prediction.",
    ],
    links: [
      { label: "Live Demo", href: "http://16.54.146.35" },
      { label: "Dashboard", href: "http://16.54.146.35/dashboard" },
      { label: "API Docs", href: "http://16.54.146.35/docs" },
      { label: "Prediction Page", href: "http://16.54.146.35/predict" },
      {
        label: "GitHub",
        href: "https://github.com/pranav-praburam/nba-data-pipeline",
      },
    ],
  },
  {
    name: "FanFeast",
    summary:
      "A sports rewards platform built for live pilot environments, combining event ingestion, backend workflows, and near real-time user reward operations.",
    highlights: [
      "Built the core ingestion pipeline for sports events, bets, QR scans, restaurant activity, and reward redemptions.",
      "Integrated SportsRadar data and AWS-hosted backend workflows to support betting, credits, and reward operations across two pilot restaurant locations.",
      "Supported a live product used by 50+ users and recognized with 2nd place at the 2024 Brandeis SPARK Competition.",
    ],
    links: [{ label: "Website", href: "https://thefanfeastofficial.com" }],
  },
];

const experience: ExperienceItem[] = [
  {
    company: "eClinicalWorks",
    role: "Application Systems Analyst (Production Systems)",
    period: "Aug 2025 - Current",
    location: "Westborough, MA",
    description:
      "Own production data investigations across MySQL and Microsoft SQL Server, using SQL-driven analysis and validation to resolve client-impacting issues.",
    achievements: [
      "Investigate 6 to 8 daily production data issues across application and database layers.",
      "Resolve an average of 2 client-impacting cases per day by correcting records and restoring downstream data accuracy.",
      "Improve defect triage with high-signal engineering handoffs, logs, screenshots, and database findings.",
    ],
  },
  {
    company: "FanFeast LLC",
    role: "Software Engineer (Founding Team)",
    period: "May 2024 - Current",
    location: "Waltham, MA",
    description:
      "Build backend ingestion, operational data workflows, and analytics foundations for a live sports rewards platform.",
    achievements: [
      "Built the core ingestion pipeline for sports events, bets, rewards, QR scans, and restaurant activity.",
      "Designed AWS-hosted backend infrastructure with MySQL-backed workflows for near real-time operations.",
      "Supported a live product used by 50+ users and recognized with 2nd place at the 2024 Brandeis SPARK Competition.",
    ],
  },
  {
    company: "RightRev",
    role: "Data Engineer",
    period: "May 2024 - Aug 2024",
    location: "Santa Clara, CA",
    description:
      "Built data processing services that convert unstructured documents into structured, automated downstream workflows.",
    achievements: [
      "Optimized Python and Google Document AI pipelines for structured extraction from unstructured inputs.",
      "Developed LLM-powered processing services to classify and transform large datasets.",
      "Improved document parsing performance and API-driven automation capabilities.",
    ],
  },
  {
    company: "eClinicalWorks",
    role: "Software Development Intern",
    period: "May 2023 - Aug 2023",
    location: "Westborough, MA",
    description:
      "Supported frontend performance analysis and QA workflows focused on Angular application memory usage.",
    achievements: [
      "Identified inefficient data bindings with Angular profiling tools to reduce UI memory consumption.",
      "Automated memory leak reporting with JavaScript to reduce manual analysis time.",
      "Assisted targeted performance optimizations through QA and debugging workflows.",
    ],
  },
];

const skills = [
  "Python",
  "SQL",
  "Java",
  "JavaScript",
  "Go",
  "Swift",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "Microsoft SQL Server",
  "SQLAlchemy",
  "scikit-learn",
  "Google Document AI",
  "REST APIs",
  "ETL Pipelines",
  "Data Modeling",
  "AWS",
  "GitHub Actions",
  "Render",
  "Git",
  "Docker",
];

const contactLinks = [
  { label: "Email", href: "mailto:pranav.vardhan@gmail.com" },
  { label: "GitHub", href: "https://github.com/pranav-praburam" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranavpraburam" },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate sm:text-lg">{copy}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[linear-gradient(135deg,rgba(216,231,245,0.95),rgba(244,247,251,0.65))]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:24px_24px]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between py-4">
          <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
            {profile.name}
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate md:flex">
            <a href="#projects" className="transition hover:text-ink">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-ink">
              Experience
            </a>
            <a href="#skills" className="transition hover:text-ink">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Contact
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.85fr)] lg:py-24"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Open to Data Engineering and Backend Roles
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
              {profile.name}, {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
              {profile.subheadline}
            </p>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate">
              Shrewsbury, MA · Brandeis University CS · AWS Certified Cloud Practitioner
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {profile.quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-card transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Snapshot
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-sky/45 p-5">
                <p className="text-sm text-slate">Focus</p>
                <p className="mt-1 text-lg font-semibold text-ink">
                  ETL pipelines, analytics APIs, backend data services
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="text-3xl font-semibold text-ink">4</p>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    Relevant roles across data engineering, backend systems, and software development
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="text-3xl font-semibold text-ink">2,000+</p>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    NBA games processed across multiple seasons in the analytics pipeline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Projects"
            title="Work that shows how I build"
            copy="Projects that highlight backend engineering, data platform design, production workflows, and machine learning applied to real product experiences."
          />

          <div className="mt-10 grid gap-8">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`rounded-[2rem] border border-ink/10 p-8 shadow-card ${
                  index === 0 ? "bg-white" : "bg-white/75"
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      {index === 0 ? "Featured Project" : "Project"}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-ink sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate sm:text-lg">
                      {project.summary}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm leading-6 text-slate sm:text-base">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Experience"
            title="Engineering with a practical mindset"
            copy="My experience spans production troubleshooting, backend implementation, and data workflows that support real users and operational teams."
          />

          <div className="mt-10 grid gap-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-[1.75rem] border border-ink/10 bg-white/80 p-7 shadow-card"
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                      {item.company}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-ink">{item.role}</h3>
                    <p className="mt-2 text-sm font-medium text-slate">
                      {item.period} · {item.location}
                    </p>
                    <p className="mt-4 text-base leading-7 text-slate">{item.description}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate sm:text-base">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to ship reliable work"
            copy="A practical stack across data engineering, backend services, cloud infrastructure, automation, and analytics."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12 sm:py-16">
          <div className="rounded-[2rem] border border-ink/10 bg-ink px-8 py-10 text-white shadow-card sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
              Looking for an engineer who can build clean systems and grow quickly.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              I am interested in data engineering, backend engineering, and analytics-focused software roles.
              If you are hiring or would like to connect, I would love to hear from you at
              {" "}
              pranav.vardhan@gmail.com.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky hover:bg-white hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
