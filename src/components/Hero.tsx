import { motion } from "framer-motion"
import { ArrowDown, Mail } from "lucide-react"

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

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pt-32 sm:px-6 sm:pt-28 lg:pt-24"
        >
            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
            />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Small Intro */}
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Welcome to my portfolio
                    </p>

                    {/* Heading */}
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                        Hi, I'm{" "}
                        <span className="text-cyan-400">
                            Chamuditha
                        </span>
                    </h1>

                    {/* Role */}
                    <h2 className="mt-5 text-lg font-semibold leading-relaxed text-gray-300 sm:text-3xl">
                        Frontend Developer
                        <span className="text-cyan-400"> & </span>
                        Software Engineering Undergraduate
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        I build modern, responsive and user-friendly web
                        applications using React, TypeScript and modern
                        frontend technologies.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">

                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
                        >
                            View My Work
                            <ArrowDown size={18} />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                        >
                            Contact Me
                        </a>

                    </div>

                    {/* Social Links */}
                    <div className="mt-10 flex items-center gap-4">

                        <a
                            href="https://github.com/chamudithachiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 p-3 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 p-3 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>

                        <a
                            href="jayamuthupemarathyna@gmail.com"
                            className="rounded-full border border-white/10 p-3 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>

                    </div>
                </motion.div>

                {/* Right Side - Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden justify-center lg:flex"
                >
                    {/* Rotating Outer Circle */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/20"
                    >
                        {/* Outer Glow */}
                        <div className="absolute inset-6 rounded-full border border-cyan-400/10" />
                    </motion.div>

                    {/* Profile Photo */}
                    <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-2 border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_100px_rgba(34,211,238,0.18)]">
                        <img
                            src="/profile.jpg"
                            alt="Chamuditha - Frontend Developer"
                            className="h-full w-full object-cover object-top"
                        />

                        {/* Photo Overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#050505]/30 via-transparent to-cyan-400/5" />
                    </div>

                    {/* Small Cyan Glow */}
                    <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl -z-10" />
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-500 sm:block"
            >
                <ArrowDown size={20} />
            </motion.div>
        </section>
    )
}

export default Hero