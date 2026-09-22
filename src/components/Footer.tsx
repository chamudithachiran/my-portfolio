import {
    Mail,
    ArrowUp,
} from "lucide-react"

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
    return (
        <footer className="border-t border-white/10 bg-[#030303]">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* Logo & Description */}
                    <div className="text-center md:text-left">
                        <a
                            href="#home"
                            className="text-2xl font-bold tracking-wide text-white"
                        >
                            Chamuditha<span className="text-cyan-400">.</span>
                        </a>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                            Frontend Developer & Software Engineering Undergraduate
                            focused on building modern digital experiences.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-gray-500 transition-colors duration-300 hover:text-cyan-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/chamudithachiran"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-full border border-white/10 p-3 text-gray-500 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-full border border-white/10 p-3 text-gray-500 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="jayamuthupemarathna@gmail.com"
                            aria-label="Email"
                            className="rounded-full border border-white/10 p-3 text-gray-500 transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-center text-sm text-gray-600 sm:text-left">
                        © {new Date().getFullYear()} Chamuditha. All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-cyan-400"
                    >
                        Back to top

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                            <ArrowUp size={16} />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer