
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    type Variants,
} from "framer-motion"
import { useEffect, useRef, useState, useCallback, type ReactNode, type ElementType } from "react"
import {
    ArrowRight,
    Code2,
    Download,
    Mail,
    Briefcase,
    Star,
    Coffee,
} from "lucide-react"

import MagneticButton from "./MagneticButton"

/* =========================================================
   CUSTOM SOCIAL ICONS
========================================================= */

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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4c.3-1.2.3-2.4-.1-3.5 0 0-1.1-.3-3.6 1.3a12.3 12.3 0 0 0-6.5 0C6.6.2 5.5.5 5.5.5c-.4 1.1-.4 2.3-.1 3.5A5.4 5.4 0 0 0 4 7.5c0 5.4 3.5 7 6.8 7a4.8 4.8 0 0 0-1 3.5v4" />
            <path d="M9 18c-4.5 2-5-2-7-2" />
        </svg>
    )
}

function Linkedin({ size = 20 }: { size?: number }) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

function WhatsApp({ size = 20 }: { size?: number }) {
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
            <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-.9L3 20l1.1-5.2a8.4 8.4 0 0 1-.9-4A8.5 8.5 0 1 1 21 11.5Z" />
            <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c-.1.1-.2.2-.1.4.3.6.8 1.1 1.4 1.5.5.3 1.1.6 1.7.8.2.1.3 0 .4-.1l.7-.8c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.3.6-.1.6-.4 1.1-.9 1.4-.5.3-1.1.4-1.7.2-1-.3-2-.8-2.9-1.4-1.1-.7-2-1.7-2.7-2.7-.5-.8-.9-1.7-1-2.6-.1-.6 0-1.2.3-1.8Z" />
        </svg>
    )
}

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 82 },
    { name: "JavaScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 70 },
    { name: "Git / GitHub", level: 85 },
]

/* =========================================================
   REAL PROFILE STATS
========================================================= */

const stats = [
    {
        icon: Briefcase,
        value: 9,
        label: "Projects",
        suffix: "+",
    },
    {
        icon: Coffee,
        value: 6,
        label: "Months Internship",
        suffix: "+",
    },
    {
        icon: Star,
        value: 2,
        label: "Years HND",
        suffix: "",
    },
]

/* =========================================================
   TYPEWRITER ROLES
========================================================= */

const roles = [
    "Frontend Developer",
    "React & TypeScript Developer",
    "Software Engineering Undergraduate",
    "Web Developer",
]

function useTypewriter(
    words: string[],
    speed = 75,
    pause = 2000
) {
    const [displayed, setDisplayed] = useState("")
    const [wordIdx, setWordIdx] = useState(0)
    const [charIdx, setCharIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = words[wordIdx]
        let timeout: ReturnType<typeof setTimeout>

        if (!deleting && charIdx < current.length) {
            timeout = setTimeout(() => {
                setCharIdx((c) => c + 1)
            }, speed)
        } else if (!deleting && charIdx === current.length) {
            timeout = setTimeout(() => {
                setDeleting(true)
            }, pause)
        } else if (deleting && charIdx > 0) {
            timeout = setTimeout(() => {
                setCharIdx((c) => c - 1)
            }, speed / 2)
        } else if (deleting && charIdx === 0) {
            setDeleting(false)
            setWordIdx((i) => (i + 1) % words.length)
        }

        setDisplayed(current.slice(0, charIdx))

        return () => clearTimeout(timeout)
    }, [charIdx, deleting, wordIdx, words, speed, pause])

    return displayed
}

/* =========================================================
   STAT COUNTER
========================================================= */

function StatCounter({
    value,
    suffix,
    label,
    icon: Icon,
}: {
    value: number
    suffix: string
    label: string
    icon: ElementType
}) {
    const [count, setCount] = useState(0)

    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true

                    let start = 0
                    const step = value / 40

                    const timer = setInterval(() => {
                        start += step

                        if (start >= value) {
                            setCount(value)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, 35)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [value])

    return (
        <div
            ref={ref}
            className="flex min-w-0 flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] px-2 py-4 backdrop-blur-md sm:px-4"
        >
            <Icon
                size={16}
                className="text-cyan-400"
            />

            <span className="text-xl font-black text-white sm:text-2xl">
                {count}
                {suffix}
            </span>

            <span className="text-center text-[9px] uppercase tracking-[0.12em] text-gray-500 sm:text-[10px] sm:tracking-widest">
                {label}
            </span>
        </div>
    )
}

/* =========================================================
   SKILL BAR
========================================================= */

function SkillBar({
    name,
    level,
}: {
    name: string
    level: number
}) {
    const [animated, setAnimated] = useState(false)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className="group"
        >
            <div className="mb-1 flex justify-between text-xs">
                <span className="text-gray-400 transition-colors duration-300 group-hover:text-cyan-400">
                    {name}
                </span>

                <span className="text-gray-600">
                    {level}%
                </span>
            </div>

            <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{
                        width: animated ? `${level}%` : 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.1,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
            </div>
        </div>
    )
}

/* =========================================================
   PARTICLE BACKGROUND
========================================================= */

interface Particle {
    x: number
    y: number
    size: number
    speed: number
    opacity: number
    twinkleSpeed: number
}

function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current

        if (!canvas) return

        const ctx = canvas.getContext("2d")

        if (!ctx) return

        const setCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)

            canvas.width = window.innerWidth * dpr
            canvas.height = window.innerHeight * dpr

            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }

        setCanvasSize()

        const particleCount =
            window.innerWidth < 640 ? 55 : 120

        const particles: Particle[] = Array.from(
            { length: particleCount },
            () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 1.5 + 0.3,
                speed: Math.random() * 0.3 + 0.05,
                opacity: Math.random() * 0.6 + 0.1,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
            })
        )

        let time = 0
        let animId: number

        function draw() {
            if (!ctx || !canvas) return

            ctx.clearRect(
                0,
                0,
                window.innerWidth,
                window.innerHeight
            )

            time += 0.016

            particles.forEach((particle) => {
                const twinkle =
                    Math.sin(
                        time *
                        particle.twinkleSpeed *
                        60
                    ) *
                    0.3 +
                    0.7

                ctx.beginPath()

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                )

                ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity * twinkle
                    })`

                ctx.fill()

                particle.y -= particle.speed

                if (particle.y < -2) {
                    particle.y =
                        window.innerHeight + 2

                    particle.x =
                        Math.random() *
                        window.innerWidth
                }
            })

            animId = requestAnimationFrame(draw)
        }

        draw()

        const handleResize = () => {
            setCanvasSize()
        }

        window.addEventListener(
            "resize",
            handleResize
        )

        return () => {
            cancelAnimationFrame(animId)

            window.removeEventListener(
                "resize",
                handleResize
            )
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
            style={{ opacity: 0.55 }}
        />
    )
}

/* =========================================================
   CURSOR GLOW
========================================================= */

function CursorGlow() {
    const x = useMotionValue(-200)
    const y = useMotionValue(-200)

    const springX = useSpring(x, {
        stiffness: 120,
        damping: 18,
    })

    const springY = useSpring(y, {
        stiffness: 120,
        damping: 18,
    })

    useEffect(() => {
        const move = (e: MouseEvent) => {
            x.set(e.clientX)
            y.set(e.clientY)
        }

        window.addEventListener(
            "mousemove",
            move
        )

        return () =>
            window.removeEventListener(
                "mousemove",
                move
            )
    }, [x, y])

    return (
        <motion.div
            className="pointer-events-none fixed z-50 hidden lg:block"
            style={{
                left: springX,
                top: springY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <div className="h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[60px]" />

            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/40 blur-[2px]" />
        </motion.div>
    )
}

/* =========================================================
   3D TILT IMAGE
========================================================= */

function TiltImage() {
    const ref = useRef<HTMLDivElement>(null)

    const rotateX = useMotionValue(0)
    const rotateY = useMotionValue(0)

    const springRX = useSpring(
        rotateX,
        {
            stiffness: 150,
            damping: 20,
        }
    )

    const springRY = useSpring(
        rotateY,
        {
            stiffness: 150,
            damping: 20,
        }
    )

    const handleMouseMove = useCallback(
        (
            e: React.MouseEvent<HTMLDivElement>
        ) => {
            if (!ref.current) return

            const rect =
                ref.current.getBoundingClientRect()

            const cx =
                rect.left +
                rect.width / 2

            const cy =
                rect.top +
                rect.height / 2

            const dx =
                (e.clientX - cx) /
                (rect.width / 2)

            const dy =
                (e.clientY - cy) /
                (rect.height / 2)

            rotateX.set(-dy * 14)
            rotateY.set(dx * 14)
        },
        [rotateX, rotateY]
    )

    const handleMouseLeave = useCallback(() => {
        rotateX.set(0)
        rotateY.set(0)
    }, [rotateX, rotateY])

    const shine = useTransform(
        [springRX, springRY],
        ([rx, ry]) => {
            const rotationX = Number(rx)
            const rotationY = Number(ry)

            return `radial-gradient(
                circle at ${50 + rotationY * 2
                }% ${50 - rotationX * 2
                }%,
                rgba(34,211,238,0.12) 0%,
                transparent 65%
            )`
        }
    )

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: springRX,
                rotateY: springRY,
                transformStyle:
                    "preserve-3d",
                perspective: 800,
            }}
            animate={{
                y: [0, -12, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative z-20 flex h-[230px] w-[230px] cursor-pointer items-center justify-center sm:h-[300px] sm:w-[300px] lg:h-[370px] lg:w-[370px]"
        >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 blur-2xl" />

            {/* Image */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-[#06131b]/80 shadow-[0_0_70px_rgba(34,211,238,0.22)]">
                <img
                    src="/profile.png"
                    alt="Chamuditha Chiran - Frontend Developer"
                    className="h-full w-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#02090f]/40 via-transparent to-cyan-400/5" />
            </div>

            {/* Shine */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                    background: shine,
                }}
            />
        </motion.div>
    )
}

/* =========================================================
   TEXT REVEAL
========================================================= */

function RevealWord({
    children,
    delay = 0,
}: {
    children: string
    delay?: number
}) {
    return (
        <span className="inline-block overflow-hidden align-bottom">
            <motion.span
                initial={{
                    y: "110%",
                    opacity: 0,
                }}
                animate={{
                    y: "0%",
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                    ],
                }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    )
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.22,
                1,
                0.36,
                1,
            ],
        },
    },
}

/* =========================================================
   GLASS CARD
========================================================= */

function GlassCard({
    children,
    className = "",
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div
            className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`}
        >
            {children}
        </div>
    )
}

/* =========================================================
   NOISE TEXTURE
========================================================= */

function NoiseTexture() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
            }}
        />
    )
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
    const role = useTypewriter(
        roles,
        75,
        2000
    )

    return (
        <>
            <CursorGlow />

            <section
                id="home"
                className="relative min-h-screen overflow-hidden bg-[#02090f]"
            >
                <NoiseTexture />

                <ParticleBackground />

                {/* =================================================
                    BACKGROUND GLOWS
                ================================================= */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
                        className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[130px]"
                    />

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="absolute right-0 top-[15%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.05] blur-[150px]"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
                </div>

                {/* =================================================
                    FULL SCREEN LAYOUT
                ================================================= */}

                <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">

                    {/* =================================================
                        LEFT PANEL
                    ================================================= */}

                    <motion.div
                        variants={
                            containerVariants
                        }
                        initial="hidden"
                        animate="visible"
                        className="flex flex-1 flex-col justify-center px-5 pb-12 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:w-[58%] lg:px-16 lg:pb-16 lg:pt-28 xl:px-20"
                    >

                        {/* Professional status */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3.5 py-2 backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                            </span>

                            <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-cyan-300 sm:text-xs sm:tracking-[0.18em]">
                                Frontend Developer • Open to Opportunities
                            </span>
                        </motion.div>

                        {/* Intro */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-5 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-cyan-400/60" />

                            <span className="text-xs font-medium tracking-[0.28em] text-cyan-400/80">
                                Hello, I&apos;m
                            </span>
                        </motion.div>

                        {/* Name */}
                        <h1 className="mb-4 text-[46px] font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[82px]">
                            <RevealWord delay={0.12}>
                                Chamuditha
                            </RevealWord>

                            <br />

                            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                <RevealWord delay={0.26}>
                                    Chiran
                                </RevealWord>
                            </span>
                        </h1>

                        {/* Typewriter */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-6 flex h-7 items-center gap-3"
                        >
                            <div className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                            <p className="text-sm font-medium tracking-wide text-gray-300 sm:text-base">
                                <span>
                                    {role}
                                </span>

                                <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-cyan-400 align-middle" />
                            </p>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={fadeUp}
                            className="mb-8 max-w-xl text-[15px] leading-7 text-gray-400 sm:text-lg sm:leading-8"
                        >
                            I&apos;m a Software Engineering undergraduate and
                            Frontend Developer with{" "}
                            <span className="font-medium text-cyan-400">
                                6+ months of frontend development internship experience
                            </span>
                            , building modern, responsive and interactive web
                            applications using{" "}
                            <span className="font-medium text-cyan-400">
                                React.js
                            </span>
                            ,{" "}
                            <span className="font-medium text-cyan-400">
                                TypeScript
                            </span>
                            ,{" "}
                            <span className="font-medium text-cyan-400">
                                JavaScript
                            </span>{" "}
                            and modern web technologies.
                        </motion.p>

                        {/* =================================================
                            BUTTONS
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            className="mb-9 flex flex-col gap-3 sm:flex-row"
                        >
                            <MagneticButton
                                href="#contact"
                                strength={0.22}
                                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.45)]"
                            >
                                <Mail size={17} />

                                Get In Touch

                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </MagneticButton>

                            <MagneticButton
                                href="#projects"
                                strength={0.22}
                                className="group inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-400/[0.02] px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                            >
                                View Projects

                                <Code2
                                    size={17}
                                    className="text-cyan-400 transition-transform duration-300 group-hover:rotate-6"
                                />
                            </MagneticButton>
                        </motion.div>

                        {/* =================================================
                            SOCIAL LINKS
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            className="mb-10 flex flex-wrap items-center gap-3"
                        >
                            <span className="mr-1 text-[10px] uppercase tracking-[0.22em] text-gray-600">
                                Follow
                            </span>

                            {[
                                {
                                    href: "https://github.com/chamudithachiran",
                                    label: "GitHub",
                                    Icon: () => (
                                        <Github size={18} />
                                    ),
                                },
                                {
                                    href: "https://www.linkedin.com/in/chamuditha-pemarathna/",
                                    label: "LinkedIn",
                                    Icon: () => (
                                        <Linkedin size={18} />
                                    ),
                                },
                                {
                                    href: "https://wa.me/94762264561",
                                    label: "WhatsApp",
                                    Icon: () => (
                                        <WhatsApp size={18} />
                                    ),
                                },
                                {
                                    href: "https://mail.google.com/mail/?view=cm&fs=1&to=jayamuthupemarathna@gmail.com",
                                    label: "Email",
                                    Icon: () => (
                                        <Mail size={18} />
                                    ),
                                },
                            ].map(
                                ({
                                    href,
                                    label,
                                    Icon,
                                }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
                                    >
                                        <Icon />
                                    </a>
                                )
                            )}
                        </motion.div>

                        {/* =================================================
                            STATS
                        ================================================= */}

                        <motion.div
                            variants={fadeUp}
                            className="grid w-full max-w-sm grid-cols-3 gap-2 sm:gap-3"
                        >
                            {stats.map((stat) => (
                                <StatCounter
                                    key={stat.label}
                                    {...stat}
                                />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        RIGHT PANEL
                    ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 60,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1.1,
                            delay: 0.2,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        className="relative flex flex-col items-center justify-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:w-[42%] lg:min-h-screen lg:border-l lg:border-white/[0.05] lg:pb-16 lg:pt-28"
                    >

                        {/* Download CV */}
                        <MagneticButton
                            href="/cv.pdf"
                            download
                            strength={0.18}
                            className="absolute right-6 top-24 z-40 hidden items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/[0.03] px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black lg:flex"
                        >
                            <Download size={14} />
                            Download CV
                        </MagneticButton>

                        {/* =================================================
                            PROFILE IMAGE AREA
                        ================================================= */}

                        <div className="relative flex shrink-0 items-center justify-center">

                            {/* Ambient glow */}
                            <motion.div
                                animate={{
                                    scale: [
                                        1,
                                        1.08,
                                        1,
                                    ],
                                    opacity: [
                                        0.2,
                                        0.35,
                                        0.2,
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute h-[250px] w-[250px] rounded-full bg-cyan-400/15 blur-[90px] sm:h-[330px] sm:w-[330px]"
                            />

                            {/* Outer ring */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 22,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[250px] w-[250px] rounded-full border border-cyan-400/[0.12] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]"
                            >
                                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]" />

                                <span className="absolute bottom-[8%] right-[12%] h-1.5 w-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                            </motion.div>

                            {/* Dashed inner ring */}
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute h-[215px] w-[215px] rounded-full border border-dashed border-cyan-400/[0.18] sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]"
                            />

                            {/* Profile */}
                            <TiltImage />

                            {/* Build badge */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-3 -left-2 z-30 hidden rounded-2xl border border-white/10 bg-[#06131b]/80 px-4 py-3 backdrop-blur-xl sm:block"
                            >
                                <p className="text-[9px] uppercase tracking-[0.25em] text-gray-500">
                                    Build
                                </p>

                                <p className="mt-0.5 text-sm font-semibold text-white">
                                    Something Great
                                </p>
                            </motion.div>

                            {/* Code badge */}
                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                    rotate: [
                                        0,
                                        2,
                                        0,
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -right-2 top-4 z-30 hidden rounded-2xl border border-cyan-400/20 bg-[#06131b]/70 px-4 py-3 backdrop-blur-xl sm:block"
                            >
                                <Code2
                                    size={19}
                                    className="text-cyan-400"
                                />
                            </motion.div>
                        </div>

                        {/* =================================================
                            SKILLS CARD
                        ================================================= */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.9,
                                duration: 0.7,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            className="w-full max-w-[300px]"
                        >
                            <GlassCard>
                                <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-gray-500">
                                    Core Technologies
                                </p>

                                <div className="flex flex-col gap-3">
                                    {technologies.map(
                                        (
                                            tech,
                                            index
                                        ) => (
                                            <motion.div
                                                key={
                                                    tech.name
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    x: 15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        1.1 +
                                                        index *
                                                        0.07,
                                                    duration: 0.5,
                                                }}
                                            >
                                                <SkillBar
                                                    name={
                                                        tech.name
                                                    }
                                                    level={
                                                        tech.level
                                                    }
                                                />
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>

                {/* =================================================
                    SCROLL INDICATOR
                ================================================= */}

                <motion.div
                    animate={{
                        y: [0, 8, 0],
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
                >
                    <span className="text-[9px] uppercase tracking-[0.35em] text-gray-600">
                        Scroll Down
                    </span>

                    <div className="h-7 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
                </motion.div>
            </section>
        </>
    )
}

export default Hero

