
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            const sections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean)

            let currentSection = "home"

            sections.forEach((section) => {
                if (!section) return

                const rect = section.getBoundingClientRect()

                if (rect.top <= 140 && rect.bottom >= 140) {
                    currentSection = section.id
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener("scroll", handleScroll)

        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav
            className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${scrolled
                    ? "border-cyan-400/10 bg-black/85 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                    : "border-white/10 bg-black/55 backdrop-blur-xl"
                }`}
        >
            {/* Top cyan glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* ==================== LOGO ==================== */}

                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="group relative shrink-0 text-xl font-bold tracking-wide text-white sm:text-2xl"
                >
                    <span className="relative z-10">
                        Chamuditha
                        <span className="text-cyan-400 transition-all duration-300 group-hover:text-cyan-300">
                            .
                        </span>
                    </span>

                    {/* Logo glow */}
                    <span className="absolute -inset-2 -z-10 rounded-full bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                </a>

                {/* ==================== DESKTOP NAV ==================== */}

                <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1)

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${isActive
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {item.name}

                                {/* Active / hover line */}
                                <motion.span
                                    className="absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-cyan-400"
                                    initial={false}
                                    animate={{
                                        width: isActive ? "100%" : "0%",
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                />

                                {/* Hover glow */}
                                <span className="absolute -inset-x-2 -inset-y-1 -z-10 rounded-lg bg-cyan-400/5 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                            </a>
                        )
                    })}
                </div>

                {/* ==================== DESKTOP CTA ==================== */}

                <a
                    href="#contact"
                    className="group relative hidden overflow-hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] lg:block"
                >
                    <span className="relative z-10">Let's Talk</span>

                    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                </a>

                {/* ==================== MOBILE MENU BUTTON ==================== */}

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 active:scale-95 lg:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={23} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={23} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* ==================== MOBILE MENU ==================== */}

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 top-20 -z-10 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{
                                duration: 0.25,
                                ease: "easeOut",
                            }}
                            className="border-t border-cyan-400/10 bg-[#050505]/95 shadow-2xl backdrop-blur-2xl lg:hidden"
                        >
                            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

                                {/* Mobile nav links */}
                                <div className="flex flex-col gap-1">
                                    {navItems.map((item, index) => {
                                        const isActive =
                                            activeSection ===
                                            item.href.substring(1)

                                        return (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay: index * 0.035,
                                                    duration: 0.25,
                                                }}
                                                className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 ${isActive
                                                        ? "bg-cyan-400/10 text-cyan-300"
                                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                                    }`}
                                            >
                                                <span>{item.name}</span>

                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${isActive
                                                            ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                                            : "bg-transparent"
                                                        }`}
                                                />
                                            </motion.a>
                                        )
                                    })}
                                </div>

                                {/* Mobile CTA */}
                                <motion.a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 0.3,
                                    }}
                                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-300 hover:bg-cyan-300 active:scale-[0.98]"
                                >
                                    Let's Talk
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar

