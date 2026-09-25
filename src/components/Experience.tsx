
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    GitBranch,
    ExternalLink,
    Sparkles,
} from "lucide-react"
import { useRef } from "react"

function ExperienceCard() {
    const ref = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [5, -5]),
        {
            stiffness: 180,
            damping: 20,
        }
    )

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
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

    const technologies = [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Git",
    ]

    const responsibilities = [
        "Developed responsive frontend interfaces using React.js and TypeScript.",
        "Built reusable UI components with Tailwind CSS.",
        "Worked with JavaScript and TypeScript during frontend development.",
        "Used Git for source control and project collaboration.",
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl"
        >
            {/* Timeline */}
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent md:block" />

            {/* Timeline Node */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                }}
                className="absolute left-0 top-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#050505] shadow-[0_0_30px_rgba(34,211,238,0.18)] md:flex"
            >
                <BriefcaseBusiness
                    size={21}
                    className="text-cyan-400"
                />
            </motion.div>

            <div className="md:pl-16">
                <motion.div
                    ref={ref}
                    style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1200,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/20 sm:p-10"
                >
                    {/* Ambient Glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px] transition duration-700 group-hover:bg-cyan-400/20" />

                    <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] transition duration-700 group-hover:bg-blue-500/20" />

                    {/* Top Shine */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-60" />

                    {/* Header */}
                    <div className="relative flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-start">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                    Professional Experience
                                </p>
                            </div>

                            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Frontend Developer
                            </h3>

                            <p className="mt-2 text-sm text-gray-500 sm:text-base">
                                Frontend Development Role
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            className="flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-2 text-xs font-medium text-cyan-300 sm:text-sm"
                        >
                            <Sparkles size={14} />
                            Industry Experience
                        </motion.div>
                    </div>

                    {/* Description */}
                    <div className="relative mt-8">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                                <Code2
                                    size={17}
                                    className="text-cyan-400"
                                />
                            </span>

                            What I Worked On
                        </h4>

                        <p className="mt-4 max-w-4xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            Worked on frontend development tasks, creating
                            responsive and user-friendly web interfaces using
                            modern JavaScript and TypeScript technologies.
                            Collaborated with development workflows and
                            contributed to real-world web projects.
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="relative mt-10">
                        <h4 className="text-lg font-semibold text-white">
                            Key Responsibilities
                        </h4>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {responsibilities.map(
                                (responsibility, index) => (
                                    <motion.div
                                        key={responsibility}
                                        initial={{
                                            opacity: 0,
                                            x: -15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay:
                                                0.1 +
                                                index * 0.08,
                                        }}
                                        className="group/item flex gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-4 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="mt-0.5 shrink-0 text-cyan-400 transition group-hover/item:scale-110"
                                        />

                                        <p className="text-sm leading-6 text-gray-400">
                                            {responsibility}
                                        </p>
                                    </motion.div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="relative mt-10 border-t border-white/10 pt-8">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                                <GitBranch
                                    size={17}
                                    className="text-cyan-400"
                                />
                            </span>

                            Technologies
                        </h4>

                        <div className="mt-5 flex flex-wrap gap-2.5">
                            {technologies.map(
                                (technology, index) => (
                                    <motion.span
                                        key={technology}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            delay:
                                                0.05 +
                                                index * 0.05,
                                        }}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.04,
                                        }}
                                        className="cursor-default rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium text-gray-300 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300 sm:text-sm"
                                    >
                                        {technology}
                                    </motion.span>
                                )
                            )}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="relative mt-10 border-t border-white/10 pt-8">
                        <h4 className="text-lg font-semibold text-white">
                            Projects Contributed To
                        </h4>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {/* MD Gunasena */}
                            <motion.a
                                href="https://md-gunasena.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    y: -5,
                                }}
                                className="group/project relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                            >
                                <div className="absolute right-4 top-4 opacity-0 transition duration-300 group-hover/project:opacity-100">
                                    <ExternalLink
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                                    <Code2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                </div>

                                <h5 className="mt-4 font-semibold text-white transition group-hover/project:text-cyan-400">
                                    MD Gunasena
                                </h5>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    A modern web platform built
                                    with a focus on responsive
                                    frontend development.
                                </p>

                                <span className="mt-4 inline-block text-sm font-medium text-cyan-400">
                                    View Project →
                                </span>
                            </motion.a>

                            {/* Safari Tales */}
                            <motion.a
                                href="https://safaritalesbypodi.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                    y: -5,
                                }}
                                className="group/project relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                            >
                                <div className="absolute right-4 top-4 opacity-0 transition duration-300 group-hover/project:opacity-100">
                                    <ExternalLink
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">
                                    <Code2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                </div>

                                <h5 className="mt-4 font-semibold text-white transition group-hover/project:text-cyan-400">
                                    Safari Tales by Podi
                                </h5>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    A responsive tourism website
                                    focused on safari services
                                    and vehicle rentals.
                                </p>

                                <span className="mt-4 inline-block text-sm font-medium text-cyan-400">
                                    View Project →
                                </span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
                </motion.div>
            </div>
        </motion.div>
    )
}

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[120px]" />

            <div className="pointer-events-none absolute -left-40 top-1/3 h-72 w-72 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[120px]" />

            {/* Subtle Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
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
                        Experience
                    </motion.p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        My Professional
                        <span className="text-cyan-400">
                            {" "}
                            Journey
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        Practical experience gained through
                        real-world frontend development and
                        software projects.
                    </p>
                </motion.div>

                <ExperienceCard />
            </div>
        </section>
    )
}

export default Experience

