import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

function Github({ size = 20 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

const projects = [
    {
        title: "MD Gunasena",
        description:
            "A modern web platform developed with a strong focus on responsive design, user experience and modern frontend development.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://md-gunasena.vercel.app/",
        githubUrl: "#",
    },
    {
        title: "Safari Tales by Podi",
        description:
            "A responsive tourism website for safari services and vehicle rentals, designed with a modern interface and mobile-friendly experience.",
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        liveUrl: "https://safaritalesbypodi.com/",
        githubUrl: "#",
    },
    {
        title: "Personal Portfolio",
        description:
            "A modern developer portfolio showcasing my skills, experience, education, projects and frontend development journey.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
    },
]

function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#080808] px-6 py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        My Work
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Featured
                        <span className="text-cyan-400"> Projects</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        A selection of projects I have worked on using modern
                        frontend technologies and development practices.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.12,
                            }}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                        >
                            {/* Project Preview */}
                            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/5">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

                                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_60px_rgba(34,211,238,0.08)] transition-all duration-500 group-hover:scale-110">
                                    <span className="text-3xl font-bold text-cyan-400">
                                        {"</>"}
                                    </span>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                                    >
                                        View Project
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-7">
                                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                    {project.title}
                                </h3>

                                <p className="mt-4 flex-1 text-sm leading-7 text-gray-500">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-gray-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                                    >
                                        Live Demo
                                        <ExternalLink size={16} />
                                    </a>

                                    <span className="text-gray-700">|</span>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
                                    >
                                        GitHub
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects