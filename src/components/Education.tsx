
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import {
    GraduationCap,
    BookOpen,
    Award,
    Sparkles,
} from "lucide-react"
import { useRef } from "react"

const education = [
    {
        number: "01",
        title: "Higher National Diploma in Software Engineering",
        institution: "Higher National Diploma Program",
        duration: "2 Years",
        status: "Completed / Studied",
        description:
            "Studying software engineering with a focus on software development, web technologies, programming, databases and modern development practices.",
        icon: GraduationCap,
    },
    {
        number: "02",
        title: "Software Engineering Undergraduate",
        institution: "Undergraduate Studies",
        duration: "Current",
        status: "Currently Studying",
        description:
            "Developing practical knowledge in software engineering while focusing on frontend and full-stack web development.",
        icon: BookOpen,
    },
]

function EducationCard({
    item,
    index,
}: {
    item: (typeof education)[number]
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [4, -4]),
        {
            stiffness: 180,
            damping: 20,
        }
    )

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
        {
            stiffness: 180,
            damping: 20,
        }
    )

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const x =
            (event.clientX - rect.left) / rect.width - 0.5

        const y =
            (event.clientY - rect.top) / rect.height - 0.5

        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const Icon = item.icon

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
            }}
            className="relative"
        >
            {/* Timeline Node */}
            <motion.div
                initial={{
                    scale: 0,
                    opacity: 0,
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.25 + index * 0.15,
                    duration: 0.5,
                    type: "spring",
                }}
                className="absolute left-0 top-8 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#080808] shadow-[0_0_30px_rgba(34,211,238,0.15)] sm:flex"
            >
                <Icon
                    size={21}
                    className="text-cyan-400"
                />
            </motion.div>

            {/* Timeline Line */}
            {index !== education.length - 1 && (
                <motion.div
                    initial={{
                        scaleY: 0,
                    }}
                    whileInView={{
                        scaleY: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                    }}
                    className="absolute left-6 top-20 hidden h-[calc(100%+2rem)] w-px origin-top bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent sm:block"
                />
            )}

            <div className="sm:pl-20">
                <motion.div
                    ref={ref}
                    style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1200,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/25 sm:p-8"
                >
                    {/* Ambient Glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-cyan-400/[0.07] blur-[90px] transition duration-700 group-hover:bg-cyan-400/[0.15]" />

                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-blue-500/[0.06] blur-[90px] transition duration-700 group-hover:bg-blue-500/[0.12]" />

                    {/* Top Accent */}
                    <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-70" />

                    {/* Mobile Icon */}
                    <div className="relative mb-5 flex items-center justify-between sm:hidden">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                            <Icon
                                size={21}
                                className="text-cyan-400"
                            />
                        </div>

                        <span className="text-xs font-bold tracking-[0.2em] text-gray-600">
                            {item.number}
                        </span>
                    </div>

                    {/* Card Header */}
                    <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1 text-xs font-semibold text-cyan-300">
                                    {item.duration}
                                </span>

                                <span className="text-xs font-bold tracking-[0.2em] text-gray-600">
                                    {item.number}
                                </span>
                            </div>

                            <h3 className="mt-4 text-xl font-bold leading-snug text-white sm:text-2xl">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {item.institution}
                            </p>
                        </div>

                        {/* Status */}
                        <motion.div
                            whileHover={{
                                scale: 1.04,
                            }}
                            className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-400"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                            {item.status}
                        </motion.div>
                    </div>

                    {/* Description */}
                    <div className="relative mt-6 border-t border-white/[0.07] pt-6">
                        <p className="text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            {item.description}
                        </p>
                    </div>

                    {/* Bottom */}
                    <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gray-600">
                            <Award size={15} />

                            Academic Journey
                        </div>

                        <motion.div
                            animate={{
                                y: [0, -3, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <Sparkles
                                size={17}
                                className="text-cyan-400/60"
                            />
                        </motion.div>
                    </div>

                    {/* Hover Bottom Glow */}
                    <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                </motion.div>
            </div>
        </motion.div>
    )
}

function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-[#080808] px-6 py-24 sm:py-32"
        >
            {/* Background Glows */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[120px]" />

            <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <motion.p
                        initial={{
                            opacity: 0,
                            letterSpacing: "0.1em",
                        }}
                        whileInView={{
                            opacity: 1,
                            letterSpacing: "0.3em",
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mb-3 text-sm font-medium uppercase text-cyan-400"
                    >
                        Education
                    </motion.p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        My Academic
                        <span className="text-cyan-400">
                            {" "}
                            Journey
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        My academic background and continuous
                        learning journey in software engineering.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="mx-auto max-w-5xl space-y-8">
                    {education.map((item, index) => (
                        <EducationCard
                            key={item.title}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Academic Note */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3,
                    }}
                    className="mx-auto mt-14 max-w-3xl text-center"
                >
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                    <p className="mt-6 text-sm leading-7 text-gray-500">
                        Continuously learning, building and improving
                        through practical software engineering
                        experience.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Education

