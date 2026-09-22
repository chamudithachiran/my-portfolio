import { motion } from "framer-motion"
import { ArrowDown, Code2, Monitor, Rocket } from "lucide-react"

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        About Me
                    </p>

                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                        Turning Ideas Into
                        <span className="text-cyan-400"> Digital Experiences</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        A passionate software engineering undergraduate focused on
                        creating modern and user-friendly web applications.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-cyan-400/10 blur-3xl" />

                            {/* Card */}
                            <div className="relative flex h-[360px] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:h-[420px]">

                                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

                                <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                                <div className="relative text-center">

                                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
                                        <Code2
                                            size={48}
                                            className="text-cyan-400"
                                        />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-white">
                                        Software Engineering
                                    </h3>

                                    <p className="mt-2 text-gray-400">
                                        Frontend • Full-Stack • Web Development
                                    </p>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-white">
                            Hello! I'm{" "}
                            <span className="text-cyan-400">
                                Chamuditha
                            </span>
                        </h3>

                        <div className="mt-6 space-y-5 text-base leading-8 text-gray-400">
                            <p>
                                I'm a Software Engineering undergraduate with a strong
                                interest in frontend and full-stack web development.
                                I enjoy turning ideas into clean, responsive and
                                interactive digital experiences.
                            </p>

                            <p>
                                I have hands-on experience working with modern
                                frontend technologies including React.js, TypeScript
                                and Tailwind CSS. I also have experience working with
                                Node.js and Git in real-world development workflows.
                            </p>

                            <p>
                                My goal is to continuously improve my technical skills,
                                build meaningful products and grow as a professional
                                software developer.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/30">
                                <Monitor
                                    size={24}
                                    className="text-cyan-400"
                                />

                                <h4 className="mt-3 font-semibold text-white">
                                    Frontend
                                </h4>

                                <p className="mt-1 text-sm text-gray-500">
                                    Modern UI development
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/30">
                                <Code2
                                    size={24}
                                    className="text-cyan-400"
                                />

                                <h4 className="mt-3 font-semibold text-white">
                                    Development
                                </h4>

                                <p className="mt-1 text-sm text-gray-500">
                                    Clean & scalable code
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/30">
                                <Rocket
                                    size={24}
                                    className="text-cyan-400"
                                />

                                <h4 className="mt-3 font-semibold text-white">
                                    Growth
                                </h4>

                                <p className="mt-1 text-sm text-gray-500">
                                    Always learning
                                </p>
                            </div>

                        </div>

                        {/* CV Button */}
                        <div className="mt-8">
                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
                            >
                                Download CV
                                <ArrowDown size={18} />
                            </a>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default About