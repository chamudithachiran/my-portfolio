import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import {
    Code2,
    Database,
    GitBranch,
    Layers,
    Server,
    Wrench,
} from "lucide-react"
import { useRef } from "react"

/* =========================
   SKILL DATA
========================= */

const skillCategories = [
    {
        number: "01",
        title: "Frontend Development",
        icon: Code2,
        description:
            "Building modern, responsive and interactive user interfaces with a strong focus on user experience.",
        skills: [
            { name: "React.js", level: 90 },
            { name: "TypeScript", level: 82 },
            { name: "JavaScript", level: 88 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Next.js", level: 70 },
        ],
    },
    {
        number: "02",
        title: "Backend Development",
        icon: Server,
        description:
            "Developing server-side applications, APIs and backend services for modern web applications.",
        skills: [
            { name: "Node.js", level: 72 },
            { name: "REST APIs", level: 78 },
            { name: "Express.js", level: 68 },
        ],
    },
    {
        number: "03",
        title: "Database",
        icon: Database,
        description:
            "Working with databases and application data to build reliable and scalable applications.",
        skills: [
            { name: "MongoDB", level: 70 },
            { name: "Firebase", level: 65 },
        ],
    },
    {
        number: "04",
        title: "Version Control",
        icon: GitBranch,
        description:
            "Managing source code, branches and collaborative development workflows using Git.",
        skills: [
            { name: "Git", level: 88 },
            { name: "GitHub", level: 85 },
            { name: "Branching", level: 80 },
            { name: "Pull Requests", level: 78 },
        ],
    },
    {
        number: "05",
        title: "UI & Development",
        icon: Layers,
        description:
            "Creating clean, reusable and responsive interfaces with modern development practices.",
        skills: [
            { name: "Responsive Design", level: 92 },
            { name: "Component Architecture", level: 85 },
            { name: "UI Development", level: 88 },
            { name: "API Integration", level: 78 },
        ],
    },
    {
        number: "06",
        title: "Development Tools",
        icon: Wrench,
        description:
            "Using modern development tools to improve productivity, testing and application development.",
        skills: [
            { name: "VS Code", level: 95 },
            { name: "Vite", level: 88 },
            { name: "NPM", level: 85 },
            { name: "Postman", level: 75 },
        ],
    },
]

/* =========================
   SKILL PROGRESS BAR
========================= */

function SkillBar({
    name,
    level,
    delay,
}: {
    name: string
    level: number
    delay: number
}) {
    return (
        <div className="group/bar">
            <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-400 transition-colors duration-300 group-hover/bar:text-cyan-400">
                    {name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.3, duration: 0.4 }}
                    className="text-[10px] font-semibold text-cyan-400/70"
                >
                    {level}%
                </motion.span>
            </div>

            {/* Track */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                {/* Fill */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.1,
                        delay,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                >
                    {/* Shimmer */}
                    <motion.span
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                            duration: 1.8,
                            delay: delay + 0.8,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>
            </div>
        </div>
    )
}

/* =========================
   3D SKILL CARD
========================= */

function SkillCard({
    category,
    index,
}: {
    category: (typeof skillCategories)[number]
    index: number
}) {
    const cardRef = useRef<HTMLElement | null>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7])

    const springRotateX = useSpring(rotateX, {
        stiffness: 180,
        damping: 22,
    })

    const springRotateY = useSpring(rotateY, {
        stiffness: 180,
        damping: 22,
    })

    const handleMouseMove = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const Icon = category.icon

    return (
        <motion.article
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1200,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                group
                relative
                flex
                min-h-[360px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-[#0a0a0a]
                p-6
                shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                transition-all
                duration-500
                hover:border-cyan-400/25
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.5)]
                sm:p-7
            "
        >
            {/* Ambient Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.04, 0.09, 0.04],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-cyan-400
                    blur-[90px]
                "
            />

            {/* Hover Gradient */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -inset-px
                    rounded-[28px]
                    bg-gradient-to-br
                    from-cyan-400/[0.10]
                    via-transparent
                    to-blue-500/[0.08]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Top Row */}
            <div className="relative z-10 flex items-start justify-between">
                <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-cyan-400/20
                        bg-cyan-400/[0.07]
                        shadow-[0_0_35px_rgba(34,211,238,0.06)]
                        transition-all
                        duration-500
                        group-hover:border-cyan-400/40
                        group-hover:bg-cyan-400/[0.12]
                        group-hover:shadow-[0_0_45px_rgba(34,211,238,0.15)]
                    "
                >
                    <Icon
                        size={25}
                        strokeWidth={1.8}
                        className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]"
                    />
                </motion.div>

                <span className="text-[11px] font-semibold tracking-[0.25em] text-gray-700 transition-colors duration-300 group-hover:text-cyan-400/40">
                    {category.number}
                </span>
            </div>

            {/* Title */}
            <h3 className="relative z-10 mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                {category.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 mt-3 text-sm leading-7 text-gray-500">
                {category.description}
            </p>

            {/* Divider */}
            <div className="relative z-10 my-5 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-transparent" />

            {/* Skill Progress Bars */}
            <div className="relative z-10 mt-auto space-y-3">
                {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={index * 0.1 + skillIndex * 0.07}
                    />
                ))}
            </div>

            {/* Bottom Accent */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    transition-all
                    duration-700
                    group-hover:w-full
                "
            />

            {/* Border */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/[0.03]" />
        </motion.article>
    )
}

/* =========================
   SKILLS SECTION
========================= */

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#080808] px-5 py-24 sm:px-6 sm:py-32"
        >
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.04, 0.09, 0.04],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500 blur-[150px]"
                />

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.04, 0.08, 0.04],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500 blur-[160px]"
                />

                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] [background-size:70px_70px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
                >
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
                            My Skills
                        </p>
                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Technologies I{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Work With
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                        A collection of technologies and tools I use to design,
                        develop and deliver modern web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-16 h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent sm:mt-20"
                />
            </div>
        </section>
    )
}

export default Skills