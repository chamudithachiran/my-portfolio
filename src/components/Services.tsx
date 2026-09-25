
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import {
    Code2,
    Layout,
    Smartphone,
    Palette,
    Globe,
    Plug,
    ArrowUpRight,
    Sparkles,
} from "lucide-react"
import { useRef } from "react"

const services = [
    {
        number: "01",
        title: "Frontend Development",
        description:
            "Building modern, responsive and high-performance frontend applications using React, TypeScript and modern web technologies.",
        icon: Code2,
    },
    {
        number: "02",
        title: "React Development",
        description:
            "Creating scalable React applications with reusable components, clean architecture and smooth user experiences.",
        icon: Layout,
    },
    {
        number: "03",
        title: "Responsive Web Design",
        description:
            "Designing websites that work beautifully across desktops, tablets and mobile devices.",
        icon: Smartphone,
    },
    {
        number: "04",
        title: "UI Development",
        description:
            "Turning design ideas into clean, interactive and visually engaging user interfaces.",
        icon: Palette,
    },
    {
        number: "05",
        title: "Website Development",
        description:
            "Developing modern business, portfolio and custom websites with a strong focus on performance and usability.",
        icon: Globe,
    },
    {
        number: "06",
        title: "API Integration",
        description:
            "Connecting frontend applications with APIs and backend services to create dynamic web experiences.",
        icon: Plug,
    },
]

function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[number]
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [6, -6]),
        {
            stiffness: 180,
            damping: 20,
        }
    )

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
        {
            stiffness: 180,
            damping: 20,
        }
    )

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const x =
            (event.clientX - rect.left) / rect.width - 0.5

        const y =
            (event.clientY - rect.top) / rect.height - 0.5

        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    const Icon = service.icon

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 45,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.65,
                delay: index * 0.08,
            }}
            className="h-full"
        >
            <motion.div
                ref={ref}
                style={{
                    rotateX,
                    rotateY,
                    transformPerspective: 1200,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/25 sm:p-8"
            >
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/[0.16]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/[0.05] blur-[80px] transition-all duration-700 group-hover:bg-blue-500/[0.12]" />

                {/* Top Shine */}
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-70" />

                {/* Number */}
                <div className="absolute right-7 top-7 text-xs font-bold tracking-[0.2em] text-gray-700 transition-colors duration-300 group-hover:text-cyan-400/50">
                    {service.number}
                </div>

                {/* Icon */}
                <motion.div
                    whileHover={{
                        scale: 1.08,
                        rotate: 3,
                    }}
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.04)] transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.13] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                >
                    <Icon
                        size={26}
                        className="text-cyan-400 transition-transform duration-500 group-hover:scale-110"
                    />
                </motion.div>

                {/* Content */}
                <div className="relative flex-1">
                    <h3 className="mt-7 pr-8 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
                        {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                        {service.description}
                    </p>
                </div>

                {/* Bottom */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-600 transition-colors duration-300 group-hover:text-cyan-400/70">
                        Expertise
                    </span>

                    <motion.div
                        whileHover={{
                            x: 3,
                            y: -3,
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.08]"
                    >
                        <ArrowUpRight
                            size={15}
                            className="text-gray-500 transition-colors duration-300 group-hover:text-cyan-400"
                        />
                    </motion.div>
                </div>

                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-3/4" />
            </motion.div>
        </motion.div>
    )
}

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            {/* Background Glows */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]" />

            <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[120px]" />

            <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
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
                    }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="mb-3 flex items-center justify-center gap-2"
                    >
                        <Sparkles
                            size={15}
                            className="text-cyan-400"
                        />

                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                            What I Do
                        </p>

                        <Sparkles
                            size={15}
                            className="text-cyan-400"
                        />
                    </motion.div>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Services I
                        <span className="text-cyan-400">
                            {" "}
                            Provide
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        I help transform ideas into modern,
                        responsive and user-friendly digital
                        experiences using modern web technologies.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
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
                    className="mx-auto mt-16 max-w-3xl text-center"
                >
                    <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                    <p className="mt-6 text-sm leading-7 text-gray-500">
                        Turning ideas into clean, modern and
                        engaging digital experiences.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Services

