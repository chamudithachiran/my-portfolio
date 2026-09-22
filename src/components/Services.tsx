import { motion } from "framer-motion"
import {
    Code2,
    Layout,
    Smartphone,
    Palette,
    Globe,
    Plug,
} from "lucide-react"

const services = [
    {
        title: "Frontend Development",
        description:
            "Building modern, responsive and high-performance frontend applications using React, TypeScript and modern web technologies.",
        icon: Code2,
    },
    {
        title: "React Development",
        description:
            "Creating scalable React applications with reusable components, clean architecture and smooth user experiences.",
        icon: Layout,
    },
    {
        title: "Responsive Web Design",
        description:
            "Designing websites that work beautifully across desktops, tablets and mobile devices.",
        icon: Smartphone,
    },
    {
        title: "UI Development",
        description:
            "Turning design ideas into clean, interactive and visually engaging user interfaces.",
        icon: Palette,
    },
    {
        title: "Website Development",
        description:
            "Developing modern business, portfolio and custom websites with a strong focus on performance and usability.",
        icon: Globe,
    },
    {
        title: "API Integration",
        description:
            "Connecting frontend applications with APIs and backend services to create dynamic web experiences.",
        icon: Plug,
    },
]

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        What I Do
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Services I
                        <span className="text-cyan-400"> Provide</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        I help transform ideas into modern, responsive and
                        user-friendly digital experiences using modern web
                        technologies.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

                                {/* Icon */}
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                                    <Icon
                                        size={27}
                                        className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-500">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Bottom Line */}
                                <div className="mt-7 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services