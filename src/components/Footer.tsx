
import { useState } from "react"
import {
    Mail,
    ArrowUp,
    Sparkles,
    Heart,
} from "lucide-react"
import { motion } from "framer-motion"

function Github({ size = 18 }: { size?: number }) {
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

function Linkedin({ size = 18 }: { size?: number }) {
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

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303]">

            {/* ==================== BACKGROUND ==================== */}

            <div className="pointer-events-none absolute inset-0">

                {/* Main glow */}
                <div className="absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

                {/* Side glows */}
                <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />

                <div className="absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Top line */}
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">

                {/* ==================== MAIN FOOTER ==================== */}

                <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:gap-12">

                    {/* ==================== BRAND ==================== */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <a
                            href="#home"
                            className="group inline-block text-2xl font-bold tracking-wide text-white sm:text-3xl"
                        >
                            Chamuditha
                            <span className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                                .
                            </span>
                        </a>

                        <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
                            <Sparkles
                                size={14}
                                className="text-cyan-400"
                            />

                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
                                Frontend Developer
                            </span>
                        </div>

                        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 md:mx-0">
                            Building modern, responsive and engaging digital
                            experiences with clean code and thoughtful design.
                        </p>

                        {/* Status */}
                        <div className="mt-5 flex items-center justify-center gap-2 md:justify-start">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                            </span>

                            <span className="text-xs text-gray-500">
                                Available for opportunities
                            </span>
                        </div>
                    </motion.div>

                    {/* ==================== NAVIGATION ==================== */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-gray-300 md:text-left">
                            Navigation
                        </h3>

                        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4 md:grid-cols-2">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="group text-center text-sm text-gray-500 transition-all duration-300 hover:text-cyan-400 md:text-left"
                                >
                                    <span className="transition-all duration-300 group-hover:pl-1">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    {/* ==================== SOCIAL ==================== */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-300">
                            Connect
                        </h3>

                        <div className="flex items-center gap-3">

                            {/* GitHub */}
                            <motion.a
                                href="https://github.com/chamudithachiran"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                onMouseEnter={() =>
                                    setHoveredSocial("github")
                                }
                                onMouseLeave={() =>
                                    setHoveredSocial(null)
                                }
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                            >
                                <Github size={18} />

                                {hoveredSocial === "github" && (
                                    <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-400/10 blur-xl" />
                                )}
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                onMouseEnter={() =>
                                    setHoveredSocial("linkedin")
                                }
                                onMouseLeave={() =>
                                    setHoveredSocial(null)
                                }
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                            >
                                <Linkedin size={18} />

                                {hoveredSocial === "linkedin" && (
                                    <span className="absolute inset-0 -z-10 rounded-xl bg-cyan-400/10 blur-xl" />
                                )}
                            </motion.a>

                            {/* Email */}
                            <motion.a href="https://mail.google.com/mail/?view=cm&fs=1&to=jayamuthupemarathna@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" onMouseEnter={() => setHoveredSocial("email")} onMouseLeave={() => setHoveredSocial(null)} whileHover={{ y: -4 }} whileTap={{ scale: 0.95 }} className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400" > <Mail size={18} /> {hoveredSocial === "email" && (<span className="absolute inset-0 -z-10 rounded-xl bg-cyan-400/10 blur-xl" />)} </motion.a>
                        </div>

                        <p className="mt-4 max-w-[220px] text-center text-xs leading-5 text-gray-600 md:text-left">
                            Feel free to connect with me for opportunities,
                            projects or collaborations.
                        </p>
                    </motion.div>
                </div>

                {/* ==================== DIVIDER ==================== */}

                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* ==================== BOTTOM ==================== */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-between gap-5 sm:flex-row"
                >
                    <p className="text-center text-xs leading-5 text-gray-600 sm:text-left">
                        © {new Date().getFullYear()} Chamuditha. All rights reserved.
                    </p>

                    <p className="flex items-center gap-1 text-xs text-gray-600">
                        Built with
                        <Heart
                            size={12}
                            className="fill-current text-cyan-400"
                        />
                        using React & TypeScript
                    </p>

                    {/* Back to top */}
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-xs font-medium text-gray-500 transition-colors duration-300 hover:text-cyan-400"
                    >
                        Back to top

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                            <ArrowUp
                                size={15}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </button>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer

