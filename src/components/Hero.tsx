import { motion, type Variants } from "framer-motion"
import {
    ArrowRight,
    Code2,
    Download,
    Mail,
} from "lucide-react"

import MagneticButton from "./MagneticButton"

/* =========================
   CUSTOM SOCIAL ICONS
========================= */

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

/* =========================
   TECHNOLOGIES
========================= */

const technologies = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
]

/* =========================
   ANIMATION VARIANTS
========================= */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

/* =========================
   TEXT REVEAL
========================= */

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
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    )
}

/* =========================
   HERO
========================= */

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#02090f] px-5 pt-28 sm:px-8 lg:px-12"
        >
            {/* =========================
                BACKGROUND GLOW
            ========================= */}

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
                    className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.08] blur-[120px]"
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
                    className="absolute right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.06] blur-[140px]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

                <div className="absolute right-[-10%] top-[15%] h-[1px] w-[80%] rotate-[-25deg] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

                <div className="absolute left-[-10%] top-[75%] h-[1px] w-[80%] rotate-[25deg] bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
            </div>

            {/* =========================
                MAIN CONTENT
            ========================= */}

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">

                {/* =========================
                    LEFT CONTENT
                ========================= */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative z-20"
                >
                    {/* Small intro */}

                    <motion.div
                        variants={fadeUp}
                        className="mb-5 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-cyan-400" />

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            Hello, I'm
                        </span>
                    </motion.div>

                    {/* =========================
                        NAME REVEAL
                    ========================= */}

                    <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[88px]">
                        <RevealWord delay={0.15}>
                            Chamuditha
                        </RevealWord>

                        <br />

                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            <RevealWord delay={0.3}>
                                Chiran
                            </RevealWord>
                        </span>
                    </h1>

                    {/* =========================
                        ROLE
                    ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="mb-5 flex items-center gap-3"
                    >
                        <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

                        <p className="text-sm font-medium tracking-wide text-gray-300 sm:text-base">
                            Frontend Developer & Software Engineering Undergraduate
                        </p>
                    </motion.div>

                    {/* =========================
                        DESCRIPTION
                    ========================= */}

                    <motion.p
                        variants={fadeUp}
                        className="mb-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
                    >
                        I build modern, responsive and interactive web
                        experiences using{" "}
                        <span className="font-medium text-cyan-400">
                            React.js
                        </span>
                        ,{" "}
                        <span className="font-medium text-cyan-400">
                            TypeScript
                        </span>{" "}
                        and modern web technologies.
                    </motion.p>

                    {/* =========================
                        MAGNETIC BUTTONS
                    ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <MagneticButton
                            href="#contact"
                            strength={0.22}
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]"
                        >
                            <Mail size={18} />

                            Get In Touch

                            <ArrowRight
                                size={18}
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
                                size={18}
                                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-6"
                            />
                        </MagneticButton>
                    </motion.div>

                    {/* =========================
                        SOCIAL ICONS
                    ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="mt-9 flex items-center gap-3"
                    >
                        <span className="mr-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                            Follow
                        </span>

                        <a
                            href="https://github.com/chamudithachiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Github size={19} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Linkedin size={19} />
                        </a>

                        <a
                            href="https://wa.me/94762264561"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <WhatsApp size={19} />
                        </a>

                        <a
                            href="mailto:jayamuthupemarathna@gmail.com"
                            aria-label="Email"
                            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Mail size={19} />
                        </a>
                    </motion.div>

                    {/* =========================
                        TECHNOLOGY LIST
                    ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="mt-10"
                    >
                        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gray-600">
                            Technologies I work with
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 1 + index * 0.08,
                                        duration: 0.5,
                                    }}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.04,
                                    }}
                                    className="cursor-default rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-gray-400 backdrop-blur-md transition-colors duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* =========================
                    RIGHT VISUAL
                ========================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: 60,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.1,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex min-h-[500px] items-center justify-center lg:min-h-[650px]"
                >
                    {/* Main glow */}

                    <motion.div
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.25, 0.4, 0.25],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-[100px] sm:h-[420px] sm:w-[420px]"
                    />

                    {/* Outer rotating ring */}

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[310px] w-[310px] rounded-full border border-cyan-400/10 sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]"
                    >
                        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />

                        <span className="absolute bottom-[8%] right-[12%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                    </motion.div>

                    {/* Second ring */}

                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-cyan-400/20 sm:h-[390px] sm:w-[390px] lg:h-[460px] lg:w-[460px]"
                    />

                    {/* Bright ring */}

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[245px] w-[245px] rounded-full border border-cyan-400/30 sm:h-[355px] sm:w-[355px] lg:h-[420px] lg:w-[420px]"
                    >
                        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]" />
                    </motion.div>

                    {/* Inner ring */}

                    <div className="absolute h-[220px] w-[220px] rounded-full border border-cyan-400/10 bg-cyan-400/[0.015] backdrop-blur-sm sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px]" />

                    {/* Profile image */}

                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative z-20 flex h-[200px] w-[200px] items-center justify-center sm:h-[290px] sm:w-[290px] lg:h-[340px] lg:w-[340px]"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20 blur-2xl" />

                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-cyan-400/40 bg-[#06131b]/80 shadow-[0_0_70px_rgba(34,211,238,0.18)]">
                            <img
                                src="/profile.png"
                                alt="Chamuditha Chiran"
                                className="h-full w-full object-cover object-center"
                            />

                            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#02090f]/40 via-transparent to-cyan-400/5" />
                        </div>
                    </motion.div>

                    {/* Floating text */}

                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-[8%] left-[2%] z-30 hidden rounded-2xl border border-white/10 bg-[#06131b]/70 px-5 py-3 backdrop-blur-xl sm:block"
                    >
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                            Build
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                            Something Great
                        </p>
                    </motion.div>

                    {/* Floating code badge */}

                    <motion.div
                        animate={{
                            y: [0, 8, 0],
                            rotate: [0, 2, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute right-[4%] top-[13%] z-30 hidden rounded-2xl border border-cyan-400/20 bg-[#06131b]/70 px-4 py-3 backdrop-blur-xl sm:block"
                    >
                        <Code2
                            size={20}
                            className="text-cyan-400"
                        />
                    </motion.div>

                    {/* Diagonal light */}

                    <motion.div
                        animate={{
                            x: ["-20%", "120%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute top-[30%] h-[1px] w-[40%] rotate-[-25deg] bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
                    />
                </motion.div>
            </div>

            {/* =========================
                DOWNLOAD CV
            ========================= */}

            <MagneticButton
                href="/cv.pdf"
                download
                strength={0.18}
                className="absolute right-7 top-24 z-40 hidden items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-400/[0.03] px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black lg:flex"
            >
                <Download size={17} />

                Download CV
            </MagneticButton>

            {/* =========================
                PAGE INDICATOR
            ========================= */}

            <div className="absolute bottom-20 right-8 z-20 hidden flex-col items-center gap-3 lg:flex">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 [writing-mode:vertical-rl]">
                    Scroll
                </span>

                <div className="h-20 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
            </div>

            {/* =========================
                SCROLL INDICATOR
            ========================= */}

            <motion.div
                animate={{
                    y: [0, 8, 0],
                }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
            >
                <span className="text-[9px] uppercase tracking-[0.35em] text-gray-600">
                    Scroll Down
                </span>

                <div className="h-8 w-px bg-gradient-to-b from-cyan-400/60 to-transparent" />
            </motion.div>
        </section>
    )
}

export default Hero