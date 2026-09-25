
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

    const rotateX = useTransform(
        mouseY,
        [-0.5, 0.5],
        [7, -7]
    )

    const rotateY = useTransform(
        mouseX,
        [-0.5, 0.5],
        [-7, 7]
    )

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

        const rect =
            cardRef.current.getBoundingClientRect()

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5

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
                amount: 0.15,
            }}
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
            {/* =========================
                AMBIENT CARD GLOW
            ========================= */}

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

            {/* =========================
                HOVER GRADIENT
            ========================= */}

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

            {/* =========================
                TOP ROW
            ========================= */}

            <div
                className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                "
            >
                {/* Icon */}

                <motion.div
                    whileHover={{
                        rotate: 8,
                        scale: 1.08,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                    }}
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
                        className="
                            text-cyan-400
                            drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]
                        "
                    />
                </motion.div>

                {/* Number */}

                <span
                    className="
                        text-[11px]
                        font-semibold
                        tracking-[0.25em]
                        text-gray-700
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400/40
                    "
                >
                    {category.number}
                </span>
            </div>

            {/* =========================
                TITLE
            ========================= */}

            <h3
                className="
                    relative
                    z-10
                    mt-7
                    text-xl
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-cyan-400
                "
            >
                {category.title}
            </h3>

            {/* =========================
                DESCRIPTION
            ========================= */}

            <p
                className="
                    relative
                    z-10
                    mt-3
                    text-sm
                    leading-7
                    text-gray-500
                "
            >
                {category.description}
            </p>

            {/* =========================
                DIVIDER
            ========================= */}

            <div
                className="
                    relative
                    z-10
                    my-6
                    h-px
                    bg-gradient-to-r
                    from-white/[0.08]
                    via-white/[0.05]
                    to-transparent
                "
            />

            {/* =========================
                SKILLS
            ========================= */}

            <div
                className="
                    relative
                    z-10
                    mt-auto
                    flex
                    flex-wrap
                    gap-2
                "
            >
                {category.skills.map(
                    (skill, skillIndex) => (
                        <motion.span
                            key={skill}
                            initial={{
                                opacity: 0,
                                y: 8,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.35,
                                delay:
                                    index * 0.1 +
                                    skillIndex * 0.05,
                            }}
                            whileHover={{
                                y: -3,
                                scale: 1.04,
                            }}
                            className="
                                cursor-default
                                rounded-full
                                border
                                border-white/[0.08]
                                bg-white/[0.025]
                                px-3
                                py-1.5
                                text-[11px]
                                font-medium
                                text-gray-400
                                transition-colors
                                duration-300
                                hover:border-cyan-400/30
                                hover:bg-cyan-400/[0.07]
                                hover:text-cyan-400
                            "
                        >
                            {skill}
                        </motion.span>
                    )
                )}
            </div>

            {/* =========================
                BOTTOM ACCENT
            ========================= */}

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

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[28px]
                    border
                    border-white/[0.03]
                "
            />
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
            className="
                relative
                overflow-hidden
                bg-[#080808]
                px-5
                py-24
                sm:px-6
                sm:py-32
            "
        >
            {/* =========================
                BACKGROUND
            ========================= */}

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
                    className="
                        absolute
                        -left-40
                        top-1/4
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-cyan-500
                        blur-[150px]
                    "
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
                    className="
                        absolute
                        -right-40
                        bottom-0
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-blue-500
                        blur-[160px]
                    "
                />

                {/* Grid */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-40
                        [background-image:linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)]
                        [background-size:70px_70px]
                    "
                />
            </div>

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                "
            >
                {/* =========================
                    HEADING
                ========================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
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
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mx-auto
                        mb-14
                        max-w-3xl
                        text-center
                        sm:mb-16
                    "
                >
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />

                        <p
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-cyan-400
                                sm:text-sm
                            "
                        >
                            My Skills
                        </p>

                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Technologies I{" "}

                        <span
                            className="
                                bg-gradient-to-r
                                from-cyan-300
                                via-cyan-400
                                to-blue-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Work With
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-gray-400
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        A collection of technologies and tools I use
                        to design, develop and deliver modern web
                        applications.
                    </p>
                </motion.div>

                {/* =========================
                    SKILLS GRID
                ========================= */}

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-7
                    "
                >
                    {skillCategories.map(
                        (category, index) => (
                            <SkillCard
                                key={category.title}
                                category={category}
                                index={index}
                            />
                        )
                    )}
                </div>

                {/* =========================
                    BOTTOM DIVIDER
                ========================= */}

                <motion.div
                    initial={{
                        scaleX: 0,
                        opacity: 0,
                    }}
                    whileInView={{
                        scaleX: 1,
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                    }}
                    className="
                        mt-16
                        h-px
                        origin-left
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/25
                        to-transparent
                        sm:mt-20
                    "
                />
            </div>
        </section>
    )
}

export default Skills

