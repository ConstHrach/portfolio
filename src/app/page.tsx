import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hrachya Harutyunyan | Software Engineer",
  description: "Software Engineer portfolio",
};

const projects = [
  {
    tag: "Full Stack",
    title: "Coming Soon",
    description: "A full-stack web application built with modern technologies.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    tag: "AI / LLM",
    title: "Coming Soon",
    description: "An AI-powered application leveraging large language models.",
    stack: ["Python", "LangChain", "OpenAI", "FastAPI"],
  },
  {
    tag: "Machine Learning",
    title: "Coming Soon",
    description: "A finance prediction model built from the ground up.",
    stack: ["Python", "scikit-learn", "pandas", "yfinance"],
  },
  {
    tag: "Data / BI",
    title: "Coming Soon",
    description: "A business intelligence dashboard with real-time data insights.",
    stack: ["React", "D3.js", "PostgreSQL", "Python"],
  },
];

const skills = [
  "TypeScript", "JavaScript", "Python", "React",
  "Next.js", "Node.js", "PostgreSQL", "Git",
  "Tailwind CSS", "REST APIs", "Machine Learning", "LLMs",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white overflow-x-hidden">

      {/* Global background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-violet-700/10 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-indigo-700/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-violet-800/8 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#09090f]/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg">Hrachya H.</span>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-20">
        <h1 className="relative text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Hrachya<br />
          <span className="text-gray-500">Harutyunyan</span>
        </h1>
        <p className="relative text-xl text-gray-400 max-w-xl mb-10">
          Software Engineer building full-stack apps, AI tools, and data-driven products.
          Focused on clean code and real-world impact.
        </p>
        <div className="relative flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/ConstHrach"
            target="_blank"
            className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 mb-16">Things I have built</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-violet-400 font-medium uppercase tracking-widest">{project.tag}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, j) => (
                  <span key={j} className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-16">Technologies I work with</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="border border-white/10 rounded-lg p-4 text-center hover:border-white/30 transition-colors">
              <p className="text-sm text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-32 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-400 mb-10 max-w-lg">
          Open to software engineering roles. If you are building something interesting, reach out.
        </p>
        <a
          href="mailto:hrachya62799@gmail.com"
          className="inline-block px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-lg"
        >
          hrachya62799@gmail.com
        </a>
        <div className="flex gap-6 mt-10 text-gray-400">
          <a href="https://github.com/ConstHrach" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/hrachyaharutyunyan" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-600 text-sm">
        <p>2026 Hrachya Harutyunyan</p>
      </footer>

    </main>
  );
}