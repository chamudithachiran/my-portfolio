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
        title: "Frontend Development",
        icon: Code2,
        description: "Building modern and responsive user interfaces.",
        skills: [
            "React.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "Next.js",
        ],
    },
    {
        title: "Backend Development",
        icon: Server,
        description: "Developing server-side applications and APIs.",
        skills: [
            "Node.js",
            "REST APIs",
            "Express.js",
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Working with application data and databases.",
        skills: [
            "MongoDB",
            "Firebase",
        ],
    },
    {
        title: "Version Control",
        icon: GitBranch,
        description: "Managing source code and development workflows.",
        skills: [
            "Git",
            "GitHub",
            "Branching",
            "Pull Requests",
        ],
    },
    {
        title: "UI & Development",
        icon: Layers,
        description: "Creating clean, accessible and interactive experiences.",
        skills: [
            "Responsive Design",
            "Component Architecture",
            "UI Development",
            "API Integration",
        ],
    },
    {
        title: "Development Tools",
        icon: Wrench,
        description: "Tools I use throughout the development process.",
        skills: [
            "VS Code",
            "Vite",
            "NPM",
            "Postman",
        ],
    },
]

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#080808] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        My Skills
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Technologies I
                        <span className="text-cyan-400"> Work With</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        A collection of technologies and tools I use to design,
                        develop and deliver modern web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                            >
                                {/* Icon */}
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition duration-300 group-hover:scale-110">
                                    <Icon
                                        size={24}
                                        className="text-cyan-400"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-bold text-white">
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {category.description}
                                </p>

                                {/* Skills */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-medium text-gray-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Skills