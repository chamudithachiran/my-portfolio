import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"

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

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle")

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setStatus("sending")

        try {
            await emailjs.send(
                "service_l44z8gp",
                "template_zspcosv",
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                },
                {
                    publicKey: "TUWl19DTLYK-__8Q0",
                }
            )

            setStatus("success")

            setFormData({
                name: "",
                email: "",
                message: "",
            })

            setTimeout(() => {
                setStatus("idle")
            }, 5000)
        } catch (error) {
            console.error("EmailJS Error:", error)
            setStatus("error")
        }
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Contact
                        <span className="text-cyan-400"> Me</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        Feel free to reach out for collaborations, job opportunities, or just to say hi!
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                Let's talk about everything!
                            </h3>

                            <p className="mt-4 text-base leading-7 text-gray-400">
                                Don't like forms? Send me an email or find me on social media. I'd love to hear from you.
                            </p>

                            <div className="mt-8 space-y-6">

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <Mail size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Email
                                        </p>

                                        <a
                                            href="mailto:jayamuthupemarathna@gmail.com"
                                            className="text-base font-semibold text-white transition-colors hover:text-cyan-400"
                                        >
                                            jayamuthupemarathna@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <Phone size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Phone
                                        </p>

                                        <a
                                            href="tel:+94762264561"
                                            className="text-base font-semibold text-white transition-colors hover:text-cyan-400"
                                        >
                                            +94 76 226 4561
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                                        <MapPin size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                            Location
                                        </p>

                                        <p className="text-base font-semibold text-white">
                                            Sri Lanka
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Social Networks */}
                        <div className="mt-12">
                            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                                Follow Me
                            </p>

                            <div className="flex items-center gap-4">

                                {/* GitHub */}
                                <a
                                    href="https://github.com/chamudithachiran"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10"
                    >
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Your Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hi, I'd like to talk about..."
                                    required
                                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                                />
                            </div>

                            {/* Status Message */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-400">
                                    <CheckCircle size={18} />
                                    Message sent successfully!
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
                                    <AlertCircle size={18} />
                                    Failed to send message. Please try again.
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Send size={18} />

                                {status === "sending"
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact