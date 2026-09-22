import { motion } from "framer-motion"
import {
    ArrowRight,
    Code2,
    Download,
    Mail,
} from "lucide-react"

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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
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
            <path d="M21 11.5a8.38 8.38 0 0 1-9 9 8.5 8.5 0 0 1-3.6-.8L3 21l1.3-5.1a8.5 8.5 0 1 1 16.7-4.4Z" />
            <path d="M8.5 8.5c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.1.1-.2.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5-.1l.6-.7c.1-.2.3-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-.4.2-1.3.4-2.8-.3-1.5-.7-2.8-2-3.5-3.5-.7-1.5-.5-2.4-.3-2.9Z" />
        </svg>
    )
}

const technologies = [
    { name: "React", icon: "⚛" },
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "N" },
    { name: "Tailwind CSS", icon: "≋" },
    { name: "Node.js", icon: "JS" },
    { name: "Git", icon: "◆" },
]

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#02090f] px-5 pt-28 sm:px-8 lg:px-12"
        >
            {/* =========================================================
                BACKGROUND
            ========================================================= */}

            {/* Main cyan radial glow */}
            <div className="pointer-events-none absolute left-[52%] top-[42%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[130px]" />

            {/* Secondary glow */}
            <div className="pointer-events-none absolute right-[8%] top-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.08] blur-[100px]" />

            {/* Dark vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,9,15,0.35)_65%,rgba(2,9,15,0.9)_100%)]" />

            {/* Diagonal futuristic lines */}
            <div className="pointer-events-none absolute right-[12%] top-[2%] h-[850px] w-[120px] rotate-[43deg] border-l border-cyan-400/[0.08]" />

            <div className="pointer-events-none absolute right-[25%] top-[10%] h-[800px] w-[70px] rotate-[43deg] border-l border-cyan-400/[0.06]" />

            <div className="pointer-events-none absolute bottom-[-20%] left-[45%] h-[600px] w-[80px] rotate-[43deg] border-l border-cyan-400/[0.05]" />

            {/* =========================================================
                CONTENT
            ========================================================= */}

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1450px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">

                {/* =====================================================
                    LEFT CONTENT
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-30"
                >
                    {/* Hello */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-3 text-xl font-light text-gray-200 sm:text-2xl"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[48px] font-bold leading-[0.95] tracking-tight text-white sm:text-[68px] lg:text-[78px]"
                    >
                        Chamuditha
                        <br />
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                            Chiran
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-7 text-sm font-medium uppercase tracking-[0.35em] text-gray-100 sm:text-base"
                    >
                        Frontend Developer & Software Engineering Undergraduate
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-6 max-w-[570px] text-base leading-8 text-gray-400 sm:text-lg"
                    >
                        A passionate Front-End Developer with a focus on
                        building modern, responsive and user-friendly web
                        experiences.
                        <br />
                        Currently an undergraduate in Software Engineering.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-8 flex flex-col gap-4 sm:flex-row"
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
                        >
                            <Mail size={18} />

                            Get In Touch

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-400/[0.02] px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            View Projects

                            <Code2
                                size={18}
                                className="text-cyan-400 transition-transform duration-300 group-hover:rotate-6"
                            />
                        </a>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <a
                            href="https://github.com/chamudithachiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Github size={19} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Linkedin size={19} />
                        </a>

                        <a
                            href="https://wa.me/94762264561"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <WhatsApp size={19} />
                        </a>

                        <a
                            href="mailto:jayamuthupemarathna@gmail.com"
                            aria-label="Email"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
                        >
                            <Mail size={19} />
                        </a>
                    </motion.div>

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mt-9 flex flex-wrap gap-4 sm:gap-5"
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 1 + index * 0.08,
                                }}
                                className="group flex flex-col items-center"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/30 bg-[#06121a]/80 text-lg font-bold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.04)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]">
                                    {tech.icon}
                                </div>

                                <span className="mt-2 text-[10px] text-gray-400 sm:text-[11px]">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* =====================================================
                    RIGHT PHOTO AREA
                ===================================================== */}

                <motion.div
                    initial={{ opacity: 0, x: 60, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex min-h-[520px] items-center justify-center lg:min-h-[700px]"
                >
                    {/* Large atmospheric glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.35, 0.55, 0.35],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[120px] sm:h-[600px] sm:w-[600px]"
                    />

                    {/* Smoke-like background */}
                    <div className="absolute h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse,rgba(34,211,238,0.12),transparent_65%)] blur-2xl" />

                    {/* =================================================
                        OUTER ROTATING RING
                    ================================================= */}

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[390px] w-[390px] rounded-full border border-cyan-400/20 sm:h-[570px] sm:w-[570px]"
                    >
                        {/* Ring dots */}
                        <span className="absolute left-1/2 top-[-3px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />

                        <span className="absolute bottom-[8%] left-[4%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />

                        <span className="absolute right-[5%] top-[23%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                    </motion.div>

                    {/* Main bright ring */}
                    <div className="absolute h-[315px] w-[315px] rounded-full border-2 border-cyan-400/90 shadow-[0_0_45px_rgba(34,211,238,0.22),inset_0_0_50px_rgba(34,211,238,0.08)] sm:h-[500px] sm:w-[500px]" />

                    {/* Inner ring */}
                    <div className="absolute h-[285px] w-[285px] rounded-full border border-cyan-300/15 sm:h-[465px] sm:w-[465px]" />

                    {/* =================================================
    PROFILE PHOTO
================================================= */}

                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="relative z-20 flex h-[500px] w-[350px] items-end justify-center sm:h-[670px] sm:w-[510px]"
                    >
                        <img
                            src="/profile.png"
                            alt="Chamuditha Jayamuthu - Frontend Developer"
                            className="h-full w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(34,211,238,0.04)_70%,transparent_100%)]" />
                    </motion.div>

                    {/* =================================================
                        BUILD SOMETHING GREAT
                    ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 20, rotate: -8 }}
                        animate={{ opacity: 1, x: 0, rotate: -8 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                        }}
                        className="absolute right-[1%] top-[13%] z-30 hidden sm:block"
                    >
                        <p className="font-serif text-3xl italic leading-[1.05] text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]">
                            Build
                            <br />
                            Something
                            <br />
                            Great
                        </p>

                        <div className="ml-8 mt-2 h-1 w-16 rotate-[-10deg] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                    </motion.div>

                    {/* Small cyan diagonal light */}
                    <motion.div
                        animate={{
                            opacity: [0.25, 0.8, 0.25],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                        className="absolute right-[4%] top-[43%] hidden h-px w-24 rotate-[-43deg] bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] sm:block"
                    />
                </motion.div>
            </div>

            {/* =========================================================
                DOWNLOAD CV
            ========================================================= */}

            <a
                href="/cv.pdf"
                download
                className="absolute right-7 top-24 z-40 hidden items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-400/[0.03] px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-400 hover:text-black lg:flex"
            >
                <Download size={17} />
                Download CV
            </a>

            {/* =========================================================
                RIGHT PAGE INDICATOR
            ========================================================= */}

            <div className="absolute right-7 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
                <div className="h-8 w-px bg-cyan-400/50" />

                <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />

                <div className="h-8 w-px bg-cyan-400/50" />
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
                className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 text-cyan-400/60 sm:block"
            >
                <ArrowRight
                    size={20}
                    className="rotate-90"
                />
            </motion.div>
        </section>
    )
}

export default Hero