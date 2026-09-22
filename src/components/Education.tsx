import { motion } from "framer-motion"
import {
    GraduationCap,
    BookOpen,
    Award,
} from "lucide-react"

const education = [
    {
        title: "Higher National Diploma in Software Engineering",
        institution: "Higher National Diploma Program",
        duration: "2 Years",
        description:
            "Studying software engineering with a focus on software development, web technologies, programming, databases and modern development practices.",
        icon: GraduationCap,
    },
    {
        title: "Software Engineering Undergraduate",
        institution: "Undergraduate Studies",
        duration: "Current",
        description:
            "Developing practical knowledge in software engineering while focusing on frontend and full-stack web development.",
        icon: BookOpen,
    },
]

function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-[#080808] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Education
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        My Academic
                        <span className="text-cyan-400"> Journey</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        My academic background and continuous learning journey
                        in software engineering.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="mx-auto max-w-4xl">

                    {education.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -40 : 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15,
                                }}
                                className="relative mb-8 last:mb-0"
                            >

                                {/* Timeline */}
                                {index !== education.length - 1 && (
                                    <div className="absolute left-6 top-14 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-cyan-400/40 to-white/5 sm:block" />
                                )}

                                {/* Card */}
                                <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8">

                                    {/* Icon */}
                                    <div className="flex items-start gap-5">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                                            <Icon
                                                size={24}
                                                className="text-cyan-400"
                                            />
                                        </div>

                                        <div className="flex-1">

                                            {/* Duration */}
                                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">

                                                <div>
                                                    <p className="text-sm font-medium text-cyan-400">
                                                        {item.duration}
                                                    </p>

                                                    <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-2 text-sm text-gray-500">
                                                        {item.institution}
                                                    </p>
                                                </div>

                                                <Award
                                                    size={22}
                                                    className="hidden text-gray-600 sm:block"
                                                />

                                            </div>

                                            {/* Description */}
                                            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            </motion.div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Education