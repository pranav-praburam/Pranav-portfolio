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

const profile = {
  name: "Pranav",
  headline: "Junior Data Engineer and Backend Engineer",
  subheadline:
    "I build reliable data pipelines, analytics products, and backend systems that turn messy data into useful decisions.",
  quickLinks: [
    { label: "Resume", href: "https://example.com/resume.pdf" },
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin" },
  ],
};

const projects: Project[] = [
  {
    name: "NBA Data & ML Analytics Platform",
    summary:
      "An end-to-end platform for ingesting NBA data, serving analytics through APIs, and exposing prediction workflows through a clean product surface.",
    highlights: [
      "Built data ingestion and transformation pipelines for game, team, and model features.",
      "Exposed analytics and prediction endpoints through a backend API designed for real product use.",
      "Connected dashboards and ML outputs so users can move from raw stats to predictions quickly.",
    ],
    links: [
      { label: "Live Demo", href: "https://example.com/live-demo" },
      { label: "Dashboard", href: "https://example.com/dashboard" },
      { label: "API Docs", href: "https://example.com/api-docs" },
      { label: "Prediction Page", href: "https://example.com/predictions" },
      { label: "GitHub", href: "https://github.com/yourusername/nba-platform" },
    ],
  },
  {
    name: "FanFeast",
    summary:
      "A fan-focused product concept centered on accessible sports experiences, polished presentation, and practical web delivery.",
    highlights: [
      "Shaped a streamlined user experience for discovery and engagement.",
      "Focused on simple product flows, responsive layouts, and deployment readiness.",
      "Practiced translating an idea into a clean public-facing web experience.",
    ],
    links: [{ label: "Website", href: "https://example.com/fanfeast" }],
  },
];

const experience = [
  {
    role: "Data Engineer / Backend Engineer Projects",
    period: "Recent Work",
    description:
      "Built portfolio projects that simulate production-style engineering: data ingestion, API design, analytics delivery, and deployment-ready web products.",
  },
  {
    role: "Early Career Software Development",
    period: "Foundation",
    description:
      "Developed strength in Python, SQL, ETL thinking, backend services, and turning technical work into clear business-facing outcomes.",
  },
];

const skills = [
  "Python",
  "SQL",
  "FastAPI",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Pandas",
  "scikit-learn",
  "REST APIs",
  "ETL Pipelines",
  "Data Modeling",
  "Git",
  "Vercel",
  "Docker",
];

const contactLinks = [
  { label: "Email", href: "mailto:pranav@example.com" },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-linkedin" },
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
              Open to Software and Data Roles
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-ink sm:text-6xl">
              {profile.name}, {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
              {profile.subheadline}
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
                  Data pipelines, analytics APIs, backend systems
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="text-3xl font-semibold text-ink">2+</p>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    Portfolio projects built around full-stack delivery and real product flows
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-5">
                  <p className="text-3xl font-semibold text-ink">14</p>
                  <p className="mt-2 text-sm leading-6 text-slate">
                    Core tools across backend engineering, analytics, deployment, and ML
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
            copy="A small set of projects that highlight API design, data engineering, analytics delivery, and production-minded implementation."
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
            copy="My work is centered on building systems that are clear, dependable, and useful to both technical teams and end users."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <article
                key={item.role}
                className="rounded-[1.75rem] border border-ink/10 bg-white/80 p-7 shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{item.role}</h3>
                <p className="mt-4 text-base leading-7 text-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-12 sm:py-16">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to ship reliable work"
            copy="A balanced stack across data engineering, backend development, web presentation, and deployment."
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
              Looking for a junior engineer who can grow fast and build thoughtfully.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              I am interested in data engineering, backend engineering, and analytics-focused software roles.
              If you are hiring or would like to connect, I would love to hear from you.
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

