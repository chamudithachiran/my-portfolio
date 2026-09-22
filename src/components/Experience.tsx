import { motion } from "framer-motion"
import {
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    GitBranch,
} from "lucide-react"

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Experience
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        My Professional
                        <span className="text-cyan-400"> Journey</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
                        Practical experience gained through real-world frontend
                        development and software projects.
                    </p>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent md:block" />

                    <div className="relative md:pl-16">

                        {/* Timeline Icon */}
                        <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 md:flex">
                            <BriefcaseBusiness
                                size={22}
                                className="text-cyan-400"
                            />
                        </div>

                        {/* Main Card */}
                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">

                            {/* Header */}
                            <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-start">

                                <div>
                                    <p className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                                        Professional Experience
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                        Frontend Developer
                                    </h3>

                                    <p className="mt-2 text-gray-400">
                                        Frontend Development Role
                                    </p>
                                </div>

                                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                    Industry Experience
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-8">
                                <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                                    <Code2
                                        size={20}
                                        className="text-cyan-400"
                                    />
                                    What I Worked On
                                </h4>

                                <p className="mt-4 leading-8 text-gray-400">
                                    Worked on frontend development tasks, creating
                                    responsive and user-friendly web interfaces using
                                    modern JavaScript and TypeScript technologies.
                                    Collaborated with development workflows and
                                    contributed to real-world web projects.
                                </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">

                                <div className="flex gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-cyan-400"
                                    />

                                    <p className="text-sm leading-6 text-gray-400">
                                        Developed responsive frontend interfaces using
                                        React.js and TypeScript.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-cyan-400"
                                    />

                                    <p className="text-sm leading-6 text-gray-400">
                                        Built reusable UI components with Tailwind CSS.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-cyan-400"
                                    />

                                    <p className="text-sm leading-6 text-gray-400">
                                        Worked with JavaScript and TypeScript during
                                        frontend development.
                                    </p>
                                </div>

                                <div className="flex gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="mt-1 shrink-0 text-cyan-400"
                                    />

                                    <p className="text-sm leading-6 text-gray-400">
                                        Used Git for source control and project
                                        collaboration.
                                    </p>
                                </div>

                            </div>

                            {/* Technologies */}
                            <div className="mt-10">
                                <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                                    <GitBranch
                                        size={20}
                                        className="text-cyan-400"
                                    />
                                    Technologies
                                </h4>

                                <div className="mt-5 flex flex-wrap gap-3">

                                    {[
                                        "JavaScript",
                                        "TypeScript",
                                        "React.js",
                                        "Tailwind CSS",
                                        "Node.js",
                                        "Git",
                                    ].map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}

                                </div>
                            </div>

                            {/* Projects */}
                            <div className="mt-10 border-t border-white/10 pt-8">
                                <h4 className="text-lg font-semibold text-white">
                                    Projects Contributed To
                                </h4>

                                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                                    <a
                                        href="https://md-gunasena.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                                    >
                                        <h5 className="font-semibold text-white transition group-hover:text-cyan-400">
                                            MD Gunasena
                                        </h5>

                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            A modern web platform built with a focus on
                                            responsive frontend development.
                                        </p>

                                        <span className="mt-4 inline-block text-sm text-cyan-400">
                                            View Project →
                                        </span>
                                    </a>

                                    <a
                                        href="https://safaritalesbypodi.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                                    >
                                        <h5 className="font-semibold text-white transition group-hover:text-cyan-400">
                                            Safari Tales by Podi
                                        </h5>

                                        <p className="mt-2 text-sm leading-6 text-gray-500">
                                            A responsive tourism website focused on safari
                                            services and vehicle rentals.
                                        </p>

                                        <span className="mt-4 inline-block text-sm text-cyan-400">
                                            View Project →
                                        </span>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience