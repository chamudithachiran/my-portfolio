
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import {
    ArrowDown,
    Code2,
    Monitor,
    Rocket,
    Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"

/* =========================
   3D TILT CARD
========================= */

function TiltCard({
    children,
}: {
    children: React.ReactNode
}) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-200, 200], [8, -8])
    const rotateY = useTransform(x, [-200, 200], [-8, 8])

    const springX = useSpring(rotateX, {
        stiffness: 180,
        damping: 20,
    })

    const springY = useSpring(rotateY, {
        stiffness: 180,
        damping: 20,
    })

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect()

        const mouseX =
            event.clientX - rect.left - rect.width / 2

        const mouseY =
            event.clientY - rect.top - rect.height / 2

        x.set(mouseX)
        y.set(mouseY)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                rotateX: springX,
                rotateY: springY,
                transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full"
        >
            {children}
        </motion.div>
    )
}

/* =========================
   ANIMATED COUNTER
========================= */

function Counter({
    value,
    suffix = "",
    label,
}: {
    value: number
    suffix?: string
    label: string
}) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number | null = null
        let animationFrame: number

        const duration = 1600

        const animate = (timestamp: number) => {
            if (!startTime) {
                startTime = timestamp
            }

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            )

            const current = Math.floor(progress * value)

            setCount(current)

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(animate)
            }
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animationFrame =
                        requestAnimationFrame(animate)

                    observer.disconnect()
                }
            },
            {
                threshold: 0.4,
            }
        )

        const element = document.getElementById(
            `counter-${label}`
        )

        if (element) {
            observer.observe(element)
        }

        return () => {
            observer.disconnect()

            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [value, label])

    return (
        <div
            id={`counter-${label}`}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                p-4
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:bg-cyan-400/[0.04]
                sm:p-5
            "
        >
            <div
                className="
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-cyan-400/10
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-cyan-400/20
                "
            />

            <div className="relative">
                <div className="text-2xl font-black text-white sm:text-3xl">
                    {count}

                    <span className="text-cyan-400">
                        {suffix}
                    </span>
                </div>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-gray-500 sm:text-xs sm:tracking-[0.18em]">
                    {label}
                </p>
            </div>
        </div>
    )
}

/* =========================
   ABOUT
========================= */

function About() {
    return (
        <section
            id="about"
            className="
                relative
                overflow-hidden
                bg-[#050505]
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
                        opacity: [0.08, 0.15, 0.08],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -left-40
                        top-20
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-cyan-400
                        blur-[150px]
                    "
                />

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.05, 0.12, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -right-40
                        bottom-10
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-blue-500
                        blur-[160px]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)]
                        bg-[size:70px_70px]
                    "
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =========================
                    SECTION HEADING
                ========================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-14 text-center sm:mb-16"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            mb-3
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        <span className="h-px w-8 bg-cyan-400/60 sm:w-10" />

                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                            About Me
                        </p>

                        <span className="h-px w-8 bg-cyan-400/60 sm:w-10" />
                    </motion.div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            leading-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Turning Ideas Into

                        <br className="hidden sm:block" />

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
                            {" "}Digital Experiences
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
                        A passionate software engineering undergraduate
                        focused on creating modern and user-friendly web
                        applications.
                    </p>
                </motion.div>

                {/* =========================
                    MAIN CONTENT
                ========================= */}

                <div
                    className="
                        grid
                        items-center
                        gap-12
                        lg:grid-cols-2
                        lg:gap-20
                    "
                >

                    {/* =========================
                        LEFT - 3D VISUAL
                    ========================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -60,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex justify-center"
                    >
                        <TiltCard>

                            <div className="relative mx-auto w-full max-w-md">

                                {/* =========================
                                    OUTER GLOW
                                ========================= */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.08, 1],
                                        opacity: [0.12, 0.25, 0.12],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        absolute
                                        -inset-4
                                        rounded-[2rem]
                                        bg-cyan-400/30
                                        blur-3xl
                                    "
                                />

                                {/* =========================
                                    MAIN CARD
                                ========================= */}

                                <div
                                    className="
                                        relative
                                        h-[390px]
                                        overflow-hidden
                                        rounded-[2rem]
                                        border
                                        border-white/10
                                        bg-[#050505]
                                        shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                                        sm:h-[450px]
                                    "
                                >

                                    {/* =========================
                                        BACKGROUND IMAGE
                                    ========================= */}

                                    <div className="absolute inset-0">

                                        <img
                                            src="/about-bg.jpg"
                                            alt="Developer workspace"
                                            className="
                                                h-full
                                                w-full
                                                scale-105
                                                object-cover
                                                object-center
                                                transition-transform
                                                duration-1000
                                            "
                                        />

                                        {/* Main dark overlay */}
                                        <div className="absolute inset-0 bg-black/60" />

                                        {/* Cyan atmosphere */}
                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                bg-gradient-to-br
                                                from-cyan-400/20
                                                via-transparent
                                                to-blue-600/25
                                            "
                                        />

                                        {/* Top black gradient */}
                                        <div
                                            className="
                                                absolute
                                                inset-x-0
                                                top-0
                                                h-32
                                                bg-gradient-to-b
                                                from-black/70
                                                to-transparent
                                            "
                                        />

                                        {/* Bottom black gradient */}
                                        <div
                                            className="
                                                absolute
                                                inset-x-0
                                                bottom-0
                                                h-48
                                                bg-gradient-to-t
                                                from-black
                                                via-black/70
                                                to-transparent
                                            "
                                        />

                                    </div>


                                    {/* =========================
                                        ANIMATED LIGHT
                                    ========================= */}

                                    <motion.div
                                        animate={{
                                            x: [0, 40, 0],
                                            y: [0, -20, 0],
                                            opacity: [0.08, 0.2, 0.08],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            absolute
                                            -right-20
                                            -top-20
                                            h-60
                                            w-60
                                            rounded-full
                                            bg-cyan-400
                                            blur-[100px]
                                        "
                                    />

                                    <motion.div
                                        animate={{
                                            x: [0, -30, 0],
                                            y: [0, 20, 0],
                                            opacity: [0.06, 0.16, 0.06],
                                        }}
                                        transition={{
                                            duration: 7,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            absolute
                                            -bottom-20
                                            -left-20
                                            h-60
                                            w-60
                                            rounded-full
                                            bg-blue-500
                                            blur-[100px]
                                        "
                                    />


                                    {/* =========================
                                        DECORATIVE CIRCLE
                                    ========================= */}

                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="
                                            absolute
                                            -right-24
                                            -top-24
                                            h-64
                                            w-64
                                            rounded-full
                                            border
                                            border-cyan-400/10
                                        "
                                    />

                                    <motion.div
                                        animate={{
                                            rotate: -360,
                                        }}
                                        transition={{
                                            duration: 25,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                        className="
                                            absolute
                                            -bottom-24
                                            -left-24
                                            h-64
                                            w-64
                                            rounded-full
                                            border
                                            border-blue-500/10
                                        "
                                    />


                                    {/* =========================
                                        TOP BADGE
                                    ========================= */}

                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            absolute
                                            left-5
                                            top-5
                                            z-20
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-black/40
                                            px-3
                                            py-2
                                            backdrop-blur-xl
                                        "
                                    >
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                                        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-300">
                                            Developer
                                        </span>
                                    </motion.div>


                                    {/* =========================
                                        CENTER CONTENT
                                    ========================= */}

                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            h-full
                                            flex-col
                                            items-center
                                            justify-center
                                            px-5
                                            text-center
                                            sm:px-8
                                        "
                                    >

                                        {/* Code Circle */}

                                        <motion.div
                                            animate={{
                                                y: [0, -8, 0],
                                                rotate: [0, 2, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                            className="
                                                relative
                                                flex
                                                h-24
                                                w-24
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-cyan-400/30
                                                bg-black/45
                                                shadow-[0_0_60px_rgba(34,211,238,0.3)]
                                                backdrop-blur-md
                                                sm:h-28
                                                sm:w-28
                                            "
                                        >

                                            <div
                                                className="
                                                    absolute
                                                    inset-2
                                                    rounded-full
                                                    border
                                                    border-dashed
                                                    border-cyan-400/25
                                                "
                                            />

                                            <Code2
                                                size={44}
                                                className="
                                                    text-cyan-400
                                                    drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]
                                                    sm:h-[50px]
                                                    sm:w-[50px]
                                                "
                                            />

                                        </motion.div>


                                        {/* Title */}

                                        <h3
                                            className="
                                                mt-6
                                                text-2xl
                                                font-bold
                                                text-white
                                                drop-shadow-lg
                                                sm:mt-7
                                                sm:text-3xl
                                            "
                                        >
                                            Software Engineering
                                        </h3>


                                        {/* Description */}

                                        <p
                                            className="
                                                mt-3
                                                text-sm
                                                text-gray-300
                                                drop-shadow-md
                                            "
                                        >
                                            Frontend • Full-Stack • Web Development
                                        </p>


                                        {/* Status */}

                                        <div
                                            className="
                                                mt-6
                                                flex
                                                items-center
                                                gap-2
                                                rounded-full
                                                border
                                                border-cyan-400/20
                                                bg-black/45
                                                px-4
                                                py-2
                                                backdrop-blur-xl
                                                sm:mt-7
                                            "
                                        >

                                            <motion.span
                                                animate={{
                                                    opacity: [0.3, 1, 0.3],
                                                    scale: [0.8, 1.2, 0.8],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                }}
                                                className="
                                                    h-2
                                                    w-2
                                                    rounded-full
                                                    bg-cyan-400
                                                    shadow-[0_0_10px_rgba(34,211,238,0.8)]
                                                "
                                            />

                                            <span className="text-xs font-medium text-cyan-300">
                                                Building & Learning
                                            </span>

                                        </div>

                                    </div>


                                    {/* =========================
                                        SPARKLE BADGE
                                    ========================= */}

                                    <motion.div
                                        animate={{
                                            y: [0, -6, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            absolute
                                            bottom-5
                                            left-5
                                            z-20
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/40
                                            px-3
                                            py-2
                                            backdrop-blur-xl
                                        "
                                    >
                                        <Sparkles
                                            size={16}
                                            className="text-cyan-400"
                                        />
                                    </motion.div>


                                    {/* =========================
                                        ROCKET BADGE
                                    ========================= */}

                                    <motion.div
                                        animate={{
                                            y: [0, 6, 0],
                                        }}
                                        transition={{
                                            duration: 3.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="
                                            absolute
                                            bottom-5
                                            right-5
                                            z-20
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-black/40
                                            px-3
                                            py-2
                                            backdrop-blur-xl
                                        "
                                    >
                                        <Rocket
                                            size={16}
                                            className="text-cyan-400"
                                        />
                                    </motion.div>


                                    {/* Card border */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            z-30
                                            rounded-[2rem]
                                            border
                                            border-cyan-400/10
                                        "
                                    />

                                </div>
                            </div>

                        </TiltCard>
                    </motion.div>


                    {/* =========================
                        RIGHT - CONTENT
                    ========================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 60,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <div className="mb-6">
                            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-600">
                                Who I Am
                            </p>

                            <h3 className="text-3xl font-bold text-white sm:text-4xl">
                                Hello! I'm{" "}

                                <span className="text-cyan-400">
                                    Chamuditha
                                </span>
                            </h3>
                        </div>


                        {/* Description */}

                        <div
                            className="
                                space-y-5
                                text-sm
                                leading-7
                                text-gray-400
                                sm:text-base
                                sm:leading-8
                            "
                        >
                            <p>
                                I'm a Software Engineering undergraduate
                                with a strong interest in frontend and
                                full-stack web development. I enjoy turning
                                ideas into clean, responsive and interactive
                                digital experiences.
                            </p>

                            <p>
                                I have hands-on experience working with modern
                                frontend technologies including React.js,
                                TypeScript and Tailwind CSS. I also have
                                experience working with Node.js and Git in
                                real-world development workflows.
                            </p>

                            <p>
                                My goal is to continuously improve my
                                technical skills, build meaningful products
                                and grow as a professional software developer.
                            </p>
                        </div>


                        {/* =========================
                            STATS
                        ========================= */}

                        <div className="mt-9 grid grid-cols-3 gap-2 sm:gap-3">

                            <Counter
                                value={2}
                                suffix="+"
                                label="Years Learning"
                            />

                            <Counter
                                value={6}
                                suffix="+"
                                label="Months Internship"
                            />

                            <Counter
                                value={3}
                                suffix="+"
                                label="Projects"
                            />

                        </div>


                        {/* =========================
                            HIGHLIGHTS
                        ========================= */}

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">

                            {/* Frontend */}

                            <motion.div
                                whileHover={{
                                    y: -7,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    backdrop-blur-xl
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-24
                                        w-24
                                        rounded-full
                                        bg-cyan-400/10
                                        blur-2xl
                                        transition-all
                                        duration-500
                                        group-hover:bg-cyan-400/20
                                    "
                                />

                                <div className="relative">

                                    <Monitor
                                        size={24}
                                        className="
                                            text-cyan-400
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />

                                    <h4 className="mt-3 font-semibold text-white">
                                        Frontend
                                    </h4>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Modern UI development
                                    </p>

                                </div>
                            </motion.div>


                            {/* Development */}

                            <motion.div
                                whileHover={{
                                    y: -7,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    backdrop-blur-xl
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-24
                                        w-24
                                        rounded-full
                                        bg-cyan-400/10
                                        blur-2xl
                                        transition-all
                                        duration-500
                                        group-hover:bg-cyan-400/20
                                    "
                                />

                                <div className="relative">

                                    <Code2
                                        size={24}
                                        className="
                                            text-cyan-400
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />

                                    <h4 className="mt-3 font-semibold text-white">
                                        Development
                                    </h4>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Clean & scalable code
                                    </p>

                                </div>
                            </motion.div>


                            {/* Growth */}

                            <motion.div
                                whileHover={{
                                    y: -7,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-5
                                    backdrop-blur-xl
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        -right-10
                                        -top-10
                                        h-24
                                        w-24
                                        rounded-full
                                        bg-cyan-400/10
                                        blur-2xl
                                        transition-all
                                        duration-500
                                        group-hover:bg-cyan-400/20
                                    "
                                />

                                <div className="relative">

                                    <Rocket
                                        size={24}
                                        className="
                                            text-cyan-400
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />

                                    <h4 className="mt-3 font-semibold text-white">
                                        Growth
                                    </h4>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Always learning
                                    </p>

                                </div>
                            </motion.div>

                        </div>


                        {/* =========================
                            CV BUTTON
                        ========================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="mt-8"
                        >

                            <motion.a
                                href="/cv.pdf"
                                download
                                whileHover={{
                                    scale: 1.04,
                                    boxShadow:
                                        "0 0 35px rgba(34,211,238,0.35)",
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-cyan-400
                                    px-7
                                    py-3.5
                                    font-semibold
                                    text-black
                                    transition-colors
                                    duration-300
                                    hover:bg-cyan-300
                                "
                            >
                                Download CV

                                <ArrowDown
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:translate-y-1
                                    "
                                />
                            </motion.a>

                        </motion.div>

                    </motion.div>
                </div>


                {/* =========================
                    BOTTOM DECORATION
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
                        via-cyan-400/30
                        to-transparent
                        sm:mt-20
                    "
                />

            </div>
        </section>
    )
}

export default About

