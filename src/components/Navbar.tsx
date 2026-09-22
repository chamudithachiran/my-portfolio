import { useState } from "react"
import { Menu, X } from "lucide-react"

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

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-wide text-white"
                >
                    Chamuditha<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="group relative text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
                        >
                            {item.name}

                            <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="hidden rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black md:block"
                >
                    Let's Talk
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={handleLinkClick}
                                className="text-base font-medium text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                            >
                                {item.name}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar