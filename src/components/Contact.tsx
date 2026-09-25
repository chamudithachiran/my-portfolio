
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import {
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    AlertCircle,
    ArrowUpRight,
} from "lucide-react"

/* =========================
   GITHUB ICON
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5-1 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

/* =========================
   LINKEDIN ICON
========================= */

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

/* =========================
   CONTACT INFO DATA
========================= */

const contactInfo = [
    {
        title: "Email",
        value: "jayamuthupemarathna@gmail.com",
        href: "mailto:jayamuthupemarathna@gmail.com",
        icon: Mail,
    },
    {
        title: "Phone",
        value: "+94 76 226 4561",
        href: "tel:+94762264561",
        icon: Phone,
    },
    {
        title: "Location",
        value: "Sri Lanka",
        href: undefined,
        icon: MapPin,
    },
]

/* =========================
   CONTACT
========================= */

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [status, setStatus] = useState<
        "idle" | "sending" | "success" | "error"
    >("idle")

    /* =========================
       FORM CHANGE
    ========================= */

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

        if (status === "error") {
            setStatus("idle")
        }
    }

    /* =========================
       FORM SUBMIT
    ========================= */

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.message.trim()
        ) {
            return
        }

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
                        opacity: [0.05, 0.11, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[500px]
                        w-[500px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-cyan-500
                        blur-[150px]
                    "
                />

                <motion.div
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -30, 0],
                        opacity: [0.03, 0.08, 0.03],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -right-40
                        top-20
                        h-[350px]
                        w-[350px]
                        rounded-full
                        bg-blue-500
                        blur-[140px]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        opacity-40
                        [background-image:linear-gradient(rgba(34,211,238,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.018)_1px,transparent_1px)]
                        [background-size:70px_70px]
                    "
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* =========================
                    HEADING
                ========================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mx-auto
                        mb-14
                        max-w-3xl
                        text-center
                        sm:mb-16
                    "
                >
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />

                        <p
                            className="
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-cyan-400
                                sm:text-sm
                            "
                        >
                            Get In Touch
                        </p>

                        <span className="h-px w-8 bg-cyan-400/50 sm:w-10" />
                    </div>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Let's{" "}

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
                            Connect
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-gray-400
                            sm:text-base
                            sm:leading-8
                        "
                    >
                        Have a project, opportunity or idea in mind?
                        Feel free to reach out. I'd love to hear from you.
                    </p>
                </motion.div>

                {/* =========================
                    MAIN GRID
                ========================= */}

                <div
                    className="
                        grid
                        items-stretch
                        gap-7
                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:gap-8
                    "
                >

                    {/* =========================
                        LEFT SIDE
                    ========================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            p-7
                            shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                            backdrop-blur-xl
                            sm:p-9
                        "
                    >
                        {/* Card Glow */}

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.05, 0.1, 0.05],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                pointer-events-none
                                absolute
                                -right-24
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-cyan-400
                                blur-[100px]
                            "
                        />

                        <div className="relative z-10">

                            <p
                                className="
                                    text-xs
                                    font-medium
                                    uppercase
                                    tracking-[0.25em]
                                    text-gray-600
                                "
                            >
                                Let's Talk
                            </p>

                            <h3
                                className="
                                    mt-3
                                    text-2xl
                                    font-bold
                                    text-white
                                    sm:text-3xl
                                "
                            >
                                Let's talk about
                                <span className="text-cyan-400">
                                    {" "}everything!
                                </span>
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-sm
                                    leading-7
                                    text-gray-500
                                    sm:text-base
                                    sm:leading-8
                                "
                            >
                                Don't like forms? You can reach me
                                directly through email, phone or social
                                media. I'm always open to discussing
                                new projects and opportunities.
                            </p>

                            {/* =========================
                                CONTACT INFO
                            ========================= */}

                            <div className="mt-8 space-y-4">

                                {contactInfo.map(
                                    (item, index) => {
                                        const Icon = item.icon

                                        return (
                                            <motion.div
                                                key={item.title}
                                                initial={{
                                                    opacity: 0,
                                                    x: -15,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay:
                                                        index *
                                                        0.1,
                                                }}
                                                whileHover={{
                                                    x: 5,
                                                }}
                                                className="
                                                    group
                                                    flex
                                                    items-center
                                                    gap-4
                                                    rounded-2xl
                                                    border
                                                    border-white/[0.06]
                                                    bg-black/20
                                                    p-4
                                                    transition-all
                                                    duration-300
                                                    hover:border-cyan-400/20
                                                    hover:bg-cyan-400/[0.03]
                                                "
                                            >
                                                <div
                                                    className="
                                                        flex
                                                        h-12
                                                        w-12
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-2xl
                                                        border
                                                        border-cyan-400/20
                                                        bg-cyan-400/[0.07]
                                                        text-cyan-400
                                                        transition-all
                                                        duration-300
                                                        group-hover:scale-105
                                                        group-hover:border-cyan-400/40
                                                        group-hover:bg-cyan-400/[0.12]
                                                    "
                                                >
                                                    <Icon
                                                        size={21}
                                                    />
                                                </div>

                                                <div className="min-w-0">
                                                    <p
                                                        className="
                                                            text-[10px]
                                                            font-medium
                                                            uppercase
                                                            tracking-[0.2em]
                                                            text-gray-600
                                                        "
                                                    >
                                                        {item.title}
                                                    </p>

                                                    {item.href ? (
                                                        <a
                                                            href={
                                                                item.href
                                                            }
                                                            className="
                                                                mt-1
                                                                block
                                                                truncate
                                                                text-sm
                                                                font-semibold
                                                                text-white
                                                                transition-colors
                                                                hover:text-cyan-400
                                                                sm:text-base
                                                            "
                                                        >
                                                            {
                                                                item.value
                                                            }
                                                        </a>
                                                    ) : (
                                                        <p
                                                            className="
                                                                mt-1
                                                                text-sm
                                                                font-semibold
                                                                text-white
                                                                sm:text-base
                                                            "
                                                        >
                                                            {
                                                                item.value
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                    }
                                )}

                            </div>

                            {/* =========================
                                SOCIALS
                            ========================= */}

                            <div className="mt-9 border-t border-white/[0.07] pt-7">

                                <p
                                    className="
                                        mb-4
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.25em]
                                        text-gray-600
                                    "
                                >
                                    Follow Me
                                </p>

                                <div className="flex gap-3">

                                    {/* GitHub */}

                                    <motion.a
                                        href="https://github.com/chamudithachiran"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -4,
                                            scale: 1.05,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.03]
                                            text-gray-400
                                            transition-all
                                            duration-300
                                            hover:border-cyan-400/30
                                            hover:bg-cyan-400/[0.06]
                                            hover:text-cyan-400
                                        "
                                        aria-label="GitHub"
                                    >
                                        <Github size={20} />
                                    </motion.a>

                                    {/* LinkedIn */}

                                    <motion.a
                                        href="https://www.linkedin.com/in/chamuditha-pemarathna/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -4,
                                            scale: 1.05,
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                        }}
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/[0.08]
                                            bg-white/[0.03]
                                            text-gray-400
                                            transition-all
                                            duration-300
                                            hover:border-cyan-400/30
                                            hover:bg-cyan-400/[0.06]
                                            hover:text-cyan-400
                                        "
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </motion.a>

                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* =========================
                        RIGHT SIDE FORM
                    ========================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            p-7
                            shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                            backdrop-blur-xl
                            sm:p-9
                        "
                    >
                        {/* Form Glow */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-24
                                -top-24
                                h-64
                                w-64
                                rounded-full
                                bg-cyan-400/[0.07]
                                blur-[100px]
                            "
                        />

                        <form
                            onSubmit={handleSubmit}
                            className="relative z-10 space-y-5"
                        >

                            {/* Form Header */}

                            <div className="mb-7">
                                <p
                                    className="
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-[0.25em]
                                        text-cyan-400
                                    "
                                >
                                    Send a Message
                                </p>

                                <h3
                                    className="
                                        mt-2
                                        text-2xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    Start a conversation
                                </h3>
                            </div>


                            {/* =========================
                                NAME
                            ========================= */}

                            <div>
                                <label
                                    htmlFor="name"
                                    className="
                                        mb-2
                                        block
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
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
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-black/30
                                        px-5
                                        py-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-700
                                        transition-all
                                        duration-300
                                        focus:border-cyan-400/50
                                        focus:bg-cyan-400/[0.02]
                                        focus:ring-4
                                        focus:ring-cyan-400/[0.05]
                                    "
                                />
                            </div>


                            {/* =========================
                                EMAIL
                            ========================= */}

                            <div>
                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
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
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-black/30
                                        px-5
                                        py-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-700
                                        transition-all
                                        duration-300
                                        focus:border-cyan-400/50
                                        focus:bg-cyan-400/[0.02]
                                        focus:ring-4
                                        focus:ring-cyan-400/[0.05]
                                    "
                                />
                            </div>


                            {/* =========================
                                MESSAGE
                            ========================= */}

                            <div>
                                <label
                                    htmlFor="message"
                                    className="
                                        mb-2
                                        block
                                        text-xs
                                        font-medium
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    "
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Hi, I'd like to talk about..."
                                    required
                                    className="
                                        w-full
                                        resize-none
                                        rounded-2xl
                                        border
                                        border-white/[0.08]
                                        bg-black/30
                                        px-5
                                        py-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-gray-700
                                        transition-all
                                        duration-300
                                        focus:border-cyan-400/50
                                        focus:bg-cyan-400/[0.02]
                                        focus:ring-4
                                        focus:ring-cyan-400/[0.05]
                                    "
                                />
                            </div>


                            {/* =========================
                                SUCCESS
                            ========================= */}

                            {status === "success" && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-green-400/20
                                        bg-green-400/[0.07]
                                        px-4
                                        py-3
                                        text-sm
                                        text-green-400
                                    "
                                >
                                    <CheckCircle size={18} />

                                    <span>
                                        Message sent successfully!
                                    </span>
                                </motion.div>
                            )}


                            {/* =========================
                                ERROR
                            ========================= */}

                            {status === "error" && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-red-400/20
                                        bg-red-400/[0.07]
                                        px-4
                                        py-3
                                        text-sm
                                        text-red-400
                                    "
                                >
                                    <AlertCircle size={18} />

                                    <span>
                                        Failed to send message.
                                        Please try again.
                                    </span>
                                </motion.div>
                            )}


                            {/* =========================
                                SEND BUTTON
                            ========================= */}

                            <motion.button
                                type="submit"
                                disabled={status === "sending"}
                                whileHover={
                                    status !== "sending"
                                        ? {
                                            scale: 1.02,
                                        }
                                        : undefined
                                }
                                whileTap={
                                    status !== "sending"
                                        ? {
                                            scale: 0.98,
                                        }
                                        : undefined
                                }
                                className="
                                    group
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-full
                                    bg-cyan-400
                                    py-4
                                    font-semibold
                                    text-black
                                    shadow-[0_0_35px_rgba(34,211,238,0.12)]
                                    transition-all
                                    duration-300
                                    hover:bg-cyan-300
                                    hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >
                                {status === "sending" ? (
                                    <>
                                        <motion.span
                                            animate={{
                                                rotate: 360,
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="
                                                h-4
                                                w-4
                                                rounded-full
                                                border-2
                                                border-black/30
                                                border-t-black
                                            "
                                        />

                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message

                                        <Send
                                            size={18}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </>
                                )}
                            </motion.button>

                        </form>
                    </motion.div>
                </div>

                {/* =========================
                    BOTTOM CTA
                ========================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        text-center
                        sm:flex-row
                    "
                >
                    <p className="text-sm text-gray-600">
                        Available for new opportunities
                    </p>

                    <span className="hidden text-gray-700 sm:block">
                        •
                    </span>

                    <a
                        href="mailto:jayamuthupemarathna@gmail.com"
                        className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            font-medium
                            text-cyan-400
                            transition-colors
                            hover:text-cyan-300
                        "
                    >
                        Let's work together

                        <ArrowUpRight size={15} />
                    </a>
                </motion.div>

                {/* =========================
                    DIVIDER
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
                        mt-14
                        h-px
                        origin-left
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/25
                        to-transparent
                        sm:mt-16
                    "
                />
            </div>
        </section>
    )
}

export default Contact

