
import { motion } from "framer-motion"
import {
    Code2,
    Database,
    GitBranch,
    Layers,
    Server,
    Wrench,
} from "lucide-react"

const skillCategories = [
    {
        number: "01",
        title: "Frontend Development",
        icon: Code2,
        description:
            "Building modern, responsive and interactive user interfaces with a strong focus on user experience.",
        skills: [
            "React.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Next.js",
        ],
    },
    {
        number: "02",
        title: "Backend Development",
        icon: Server,
        description:
            "Developing server-side applications, APIs and backend services for modern web applications.",
        skills: ["Node.js", "REST APIs", "Express.js"],
    },
    {
        number: "03",
        title: "Database",
        icon: Database,
        description:
            "Working with databases and application data to build reliable and scalable applications.",
        skills: ["MongoDB", "Firebase"],
    },
    {
        number: "04",
        title: "Version Control",
        icon: GitBranch,
        description:
            "Managing source code, branches and collaborative development workflows using Git.",
        skills: ["Git", "GitHub", "Branching", "Pull Requests"],
    },
    {
        number: "05",
        title: "UI & Development",
        icon: Layers,
        description:
            "Creating clean, reusable and responsive interfaces with modern development practices.",
        skills: [
            "Responsive Design",
            "Component Architecture",
            "UI Development",
            "API Integration",
        ],
    },
    {
        number: "06",
        title: "Development Tools",
        icon: Wrench,
        description:
            "Using modern development tools to improve productivity, testing and application development.",
        skills: ["VS Code", "Vite", "NPM", "Postman"],
    },
]

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#080808] px-5 py-24 sm:px-6 sm:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400 sm:text-sm">
                        My Skills
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                        Technologies I{" "}
                        <span className="text-cyan-400">
                            Work With
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-lg sm:leading-8">
                        A collection of technologies and tools I use to
                        design, develop and deliver modern web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon

                        return (
                            <motion.article
                                key={category.title}
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
                                    delay: index * 0.1,
                                }}
                                whileHover={{
                                    y: -10,
                                    rotateX: 2,
                                    rotateY:
                                        index % 2 === 0 ? 1 : -1,
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/25 sm:p-7"
                            >
                                {/* Card Glow */}
                                <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-cyan-400/0 via-transparent to-blue-500/0 opacity-0 transition duration-500 group-hover:from-cyan-400/[0.08] group-hover:to-blue-500/[0.06] group-hover:opacity-100" />

                                {/* Top Row */}
                                <div className="relative z-10 flex items-start justify-between">
                                    {/* Icon */}
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.12] group-hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]">
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                            className="text-cyan-400"
                                        />
                                    </div>

                                    {/* Number */}
                                    <span className="text-[11px] font-semibold tracking-[0.2em] text-gray-700 transition-colors duration-300 group-hover:text-cyan-400/40">
                                        {category.number}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="relative z-10 mt-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="relative z-10 mt-3 text-sm leading-7 text-gray-500">
                                    {category.description}
                                </p>

                                {/* Divider */}
                                <div className="relative z-10 my-6 h-px bg-white/[0.07]" />

                                {/* Skills */}
                                <div className="relative z-10 mt-auto flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-gray-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills

