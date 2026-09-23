
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
        number: "01",
        title: "MD Gunasena",
        description:
            "A modern web platform developed with a strong focus on responsive design, user experience and modern frontend development.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://md-gunasena.vercel.app/",
        githubUrl: "#",
        video: "/videos/md-gunasena.mp4",
    },
    {
        number: "02",
        title: "Safari Tales by Podi",
        description:
            "A responsive tourism website for safari services and vehicle rentals, designed with a modern interface and mobile-friendly experience.",
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        liveUrl: "https://safaritalesbypodi.com/",
        githubUrl: "#",
        video: "/videos/safari-tales.mp4",
    },
    {
        number: "03",
        title: "Personal Portfolio",
        description:
            "A modern developer portfolio showcasing my skills, experience, education, projects and frontend development journey.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        video: "/videos/portfolio.mp4",
    },
]

function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#080808] px-5 py-24 sm:px-6 sm:py-32"
        >
            {/* Background Effects */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
                        My Work
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Featured{" "}
                        <span className="text-cyan-400">Projects</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-lg sm:leading-8">
                        A selection of projects I have worked on using modern
                        frontend technologies and development practices.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{
                                opacity: 0,
                                y: 45,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.65,
                                delay: index * 0.12,
                            }}
                            whileHover={{
                                y: -10,
                                rotateX: 2,
                                rotateY: index === 1 ? 0 : index === 0 ? 1 : -1,
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/25"
                        >
                            {/* Card Glow */}
                            <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-cyan-400/0 via-transparent to-blue-500/0 opacity-0 transition duration-500 group-hover:from-cyan-400/[0.08] group-hover:to-blue-500/[0.06] group-hover:opacity-100" />

                            {/* Project Preview */}
                            <div className="relative h-56 overflow-hidden sm:h-60">
                                {/* Video */}
                                <video
                                    src={project.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                                />

                                {/* Video Dark Overlay */}
                                <div className="absolute inset-0 bg-black/60 transition duration-500 group-hover:bg-black/45" />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/10 to-cyan-400/[0.04]" />

                                {/* Top Number */}
                                <div className="absolute left-5 top-5 z-10">
                                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-gray-300 backdrop-blur-md">
                                        {project.number}
                                    </span>
                                </div>

                                {/* Center Icon */}
                                <div className="absolute inset-0 z-10 flex items-center justify-center">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-[22px] border border-cyan-400/20 bg-black/40 shadow-[0_0_70px_rgba(34,211,238,0.14)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_90px_rgba(34,211,238,0.22)] sm:h-24 sm:w-24">
                                        <span className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                                            {"</>"}
                                        </span>
                                    </div>
                                </div>

                                {/* Desktop Hover Button */}
                                <div className="absolute inset-0 z-20 hidden items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100 sm:flex">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:scale-105 hover:bg-cyan-300"
                                    >
                                        View Project
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 flex-1 text-sm leading-7 text-gray-500">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map(
                                        (technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-gray-400 transition-colors duration-300 group-hover:border-cyan-400/10 group-hover:text-gray-300"
                                            >
                                                {technology}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/[0.08] pt-5">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                                    >
                                        Live Demo
                                        <ExternalLink size={15} />
                                    </a>

                                    <span className="hidden text-gray-700 sm:block">
                                        /
                                    </span>

                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-gray-500 transition hover:text-white"
                                    >
                                        GitHub
                                        <Github size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

