<script>
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import Hero from "./components/Hero.svelte";
  import WhoAmI from "./components/WhoAmI.svelte";
  import Picture from "./components/Picture.svelte";
  import RoleBox from "./components/RoleBox.svelte";
  import About from "./components/About.svelte";
  import Projects from "./components/Projects.svelte";
  import Experience from "./components/Experience.svelte";
  import Contact from "./components/Contact.svelte";

  const logo = "~/";

  const navCta = { label: "contact ↗", href: "#contact" };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Resume", href: "#contact" },
  ];

  const heroData = {
    name: "Mahesh Patapalli",
    title: "ML Engineer / Data Scientist",
    buttons: [
      { label: "Experience →", href: "#experience", primary: false },
      { label: "contact ↗", href: "#contact", primary: true },
    ],
  };

  const roleEntries = [
    { label: "role", value: "software engineer" },
    { label: "focus", value: "software & systems" },
    { label: "stack", value: "Rust · TypeScript · SQL" },
    { label: "interests", value: "infrastructure · tooling · AI" },
  ];

  const aboutBio = [
    "I'm a software engineer who enjoys building systems, working with interesting technologies, and understanding the details beneath the abstractions.",
    "Lately I've been exploring backend systems with Rust, local AI tooling, and building small, practical applications.",
  ];

  const aboutSkills = [
    { category: "Languages", items: ["Rust", "Python", "TypeScript"] },
    { category: "Web", items: ["Svelte", "HTML", "TailWind"] },
    { category: "Systems", items: ["Docker", "Linux", "Nginx"] },
    { category: "Data", items: ["PostgreSQL", "ChromaDB"] },
    { category: "Tools", items: ["Git", "CI/CD", "VS Code"] },
  ];

  const projectsList = [
    {
      name: "project-one",
      icon: "https://img.icons8.com/?size=100&id=LZlzJaNYvek4&format=png&color=000000",
      description:
        "A local AI toolkit for running and managing models with a simple web interface.",
      tags: ["Python", "Gradio", "Docker"],
      demo: "#",
      source: "#",
    },
    {
      name: "project-two",
      description:
        "A minimal backend service built with Axum, featuring a clean API, PostgreSQL and structured error handling.",
      tags: ["Rust", "Axum", "PostgreSQL"],
      demo: "#",
      source: "#",
    },
    {
      name: "project-three",
      description:
        "A 3D asset explorer for browsing and searching a large model collection with embeddings.",
      tags: ["Python", "ChromaDB", "Web"],
      demo: "#",
      source: "#",
    },
  ];

  const experienceList = [
    {
      company: "Acme Corp",
      role: "Senior Software Engineer",
      duration: "2024 — Present",
      description:
        "Leading backend architecture and building distributed systems for real-time data processing pipelines.",
      tags: ["Rust", "Kafka", "PostgreSQL", "Docker"],
    },
    {
      company: "StartupXYZ",
      role: "Software Engineer",
      duration: "2022 — 2024",
      description:
        "Built and maintained core API services, integrated ML models into production, and improved CI/CD workflows.",
      tags: ["Python", "FastAPI", "AWS", "Terraform"],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      duration: "2020 — 2022",
      description:
        "Developed web applications and dashboards for clients across various domains including e-commerce and analytics.",
      tags: ["TypeScript", "Svelte", "Node.js", "PostgreSQL"],
    },
  ];

  const socialLinks = [
    {
      label: "github.com/mahesh",
      href: "https://github.com/mahesh",
      icon: "github",
    },
    {
      label: "linkedin.com/in/mahesh",
      href: "https://linkedin.com/in/mahesh",
      icon: "linkedin",
    },
    {
      label: "mahesh@example.com",
      href: "mailto:mahesh@example.com",
      icon: "mail",
    },
  ];

  const contactData = {
    prompt: "~/dev $ contact",
    heading: "Contact",
    description:
      "Have a project, idea or just want to talk? Feel free to reach out.",
    email: "mahesh@example.com",
    socials: socialLinks,
  };
</script>

<div class="min-h-screen bg-gray-950 text-gray-400 font-mono flex flex-col">
  <Navbar {logo} links={navLinks} cta={navCta} />

  <main class="flex-1">
    <Hero>
      <WhoAmI {...heroData} socials={socialLinks} />
      <!-- <Picture /> -->
    </Hero>

    <About bio={aboutBio} skills={aboutSkills} />

    <Projects projects={projectsList} />

    <Experience experiences={experienceList} />

    <Contact {...contactData} />
  </main>

  <Footer {logo} socials={socialLinks} />
</div>
