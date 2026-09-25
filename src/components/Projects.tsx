
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useRef } from "react"

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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}

/* =========================
   PROJECT DATA
========================= */

const projects = [
    {
        number: "01",
        title: "MD Gunasena",
        description:
            "A modern web platform developed with a strong focus on responsive design, user experience and modern frontend development.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://md-gunasena.vercel.app/",
        githubUrl: "#",
        video: "/videos/md-gunasena.mp4",
    },
    {
        number: "02",
        title: "Safari Tales by Podi",
        description:
            "A responsive tourism website for safari services and vehicle rentals, designed with a modern interface and mobile-friendly experience.",
        technologies: ["React.js", "JavaScript", "Tailwind CSS"],
        liveUrl: "https://safaritalesbypodi.com/",
        githubUrl: "#",
        video: "/videos/safari-tales.mp4",
    },
    {
        number: "03",
        title: "Personal Portfolio",
        description:
            "A modern developer portfolio showcasing my skills, experience, education, projects and frontend development journey.",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://chamuditha-portfolio.vercel.app/",
        githubUrl: "https://github.com/chamudithachiran/my-portfolio",
        video: "/videos/portfolio.mp4",
    },
]

/* =========================
   3D PROJECT CARD
========================= */

function ProjectCard({
    project,
    index,
}: {
    project: (typeof projects)[number]
    index: number
}) {
    const cardRef = useRef<HTMLElement | null>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6])

    const springRotateX = useSpring(rotateX, {
        stiffness: 180,
        damping: 22,
    })

    const springRotateY = useSpring(rotateY, {
        stiffness: 180,
        damping: 22,
    })

    const handleMouseMove = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (!cardRef.current) return

        const rect = cardRef.current.getBoundingClientRect()

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

    const isValidUrl = (url: string) => url !== "#"

    return (
        <motion.article
            ref={cardRef}
            initial={{
                opacity: 0,
                y: 50,
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
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{
                rotateX: springRotateX,
                rotateY: springRotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1200,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                group
                relative
                flex
                h-full
                min-h-[570px]
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.08]
                bg-[#0a0a0a]
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                transition-shadow
                duration-500
                hover:border-cyan-400/25
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
            "
        >
            {/* =========================
                CARD GLOW
            ========================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -inset-px
                    z-30
                    rounded-[28px]
                    bg-gradient-to-br
                    from-cyan-400/[0.10]
                    via-transparent
                    to-blue-500/[0.08]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* =========================
                VIDEO PREVIEW
            ========================= */}

            <div
                className="
                    relative
                    h-56
                    overflow-hidden
                    sm:h-60
                "
            >
                <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        scale-105
                        transition-transform
                        duration-[1200ms]
                        ease-out
                        group-hover:scale-115
                    "
                />

                {/* Dark Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/55
                        transition-colors
                        duration-500
                        group-hover:bg-black/35
                    "
                />

                {/* Cyan / Blue Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-cyan-400/[0.10]
                        via-transparent
                        to-blue-600/[0.15]
                    "
                />

                {/* Bottom Fade */}

                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-32
                        bg-gradient-to-t
                        from-[#0a0a0a]
                        to-transparent
                    "
                />

                {/* =========================
                    PROJECT NUMBER
                ========================= */}

                <div className="absolute left-5 top-5 z-20">
                    <span
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-black/45
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            tracking-[0.25em]
                            text-gray-300
                            backdrop-blur-xl
                        "
                    >
                        PROJECT {project.number}
                    </span>
                </div>

                {/* =========================
                    CODE ICON
                ========================= */}

                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <motion.div
                        animate={{
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-[22px]
                            border
                            border-cyan-400/20
                            bg-black/40
                            shadow-[0_0_70px_rgba(34,211,238,0.15)]
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            group-hover:scale-110
                            group-hover:border-cyan-400/40
                            group-hover:shadow-[0_0_90px_rgba(34,211,238,0.25)]
                            sm:h-24
                            sm:w-24
                        "
                    >
                        <span
                            className="
                                text-2xl
                                font-bold
                                text-cyan-400
                                drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]
                                sm:text-3xl
                            "
                        >
                            {"</>"}
                        </span>
                    </motion.div>
                </div>

                {/* =========================
                    HOVER VIEW BUTTON
                ========================= */}

                <div
                    className="
                        absolute
                        inset-0
                        z-20
                        hidden
                        items-center
                        justify-center
                        bg-black/35
                        opacity-0
                        backdrop-blur-[2px]
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                        sm:flex
                    "
                >
                    {isValidUrl(project.liveUrl) ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-cyan-400
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-black
                                shadow-[0_0_35px_rgba(34,211,238,0.3)]
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-cyan-300
                            "
                        >
                            View Project
                            <ExternalLink size={16} />
                        </a>
                    ) : (
                        <span
                            className="
                                rounded-full
                                border
                                border-white/10
                                bg-black/60
                                px-5
                                py-2.5
                                text-sm
                                text-gray-400
                                backdrop-blur-xl
                            "
                        >
                            Coming Soon
                        </span>
                    )}
                </div>
            </div>

            {/* =========================
                CONTENT
            ========================= */}

            <div
                className="
                    relative
                    z-10
                    flex
                    flex-1
                    flex-col
                    p-6
                    sm:p-7
                "
            >
                {/* Title */}

                <h3
                    className="
                        text-xl
                        font-bold
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-cyan-400
                    "
                >
                    {project.title}
                </h3>

                {/* Description */}

                <p
                    className="
                        mt-3
                        flex-1
                        text-sm
                        leading-7
                        text-gray-500
                    "
                >
                    {project.description}
                </p>

                {/* =========================
                    TECHNOLOGIES
                ========================= */}

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map(
                        (technology) => (
                            <span
                                key={technology}
                                className="
                                    rounded-full
                                    border
                                    border-white/[0.08]
                                    bg-white/[0.03]
                                    px-3
                                    py-1.5
                                    text-[11px]
                                    font-medium
                                    text-gray-400
                                    transition-all
                                    duration-300
                                    group-hover:border-cyan-400/15
                                    group-hover:text-gray-300
                                "
                            >
                                {technology}
                            </span>
                        )
                    )}
                </div>

                {/* =========================
                    LINKS
                ========================= */}

                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        items-center
                        gap-x-4
                        gap-y-3
                        border-t
                        border-white/[0.08]
                        pt-5
                    "
                >
                    {isValidUrl(project.liveUrl) ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-medium
                                text-cyan-400
                                transition
                                hover:text-cyan-300
                            "
                        >
                            Live Demo
                            <ExternalLink size={15} />
                        </a>
                    ) : (
                        <span
                            className="
                                text-sm
                                font-medium
                                text-gray-600
                            "
                        >
                            Live Demo — Coming Soon
                        </span>
                    )}

                    {isValidUrl(project.githubUrl) && (
                        <>
                            <span className="hidden text-gray-700 sm:block">
                                /
                            </span>

                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    text-sm
                                    font-medium
                                    text-gray-500
                                    transition
                                    hover:text-white
                                "
                            >
                                GitHub
                                <Github size={16} />
                            </a>
                        </>
                    )}
                </div>
            </div>

            {/* =========================
                CARD BORDER
            ========================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-40
                    rounded-[28px]
                    border
                    border-white/[0.04]
                    transition-colors
                    duration-500
                    group-hover:border-cyan-400/10
                "
            />
        </motion.article>
    )
}

/* =========================
   PROJECTS SECTION
========================= */

function Projects() {
    return (
        <section
            id="projects"
            className="
                relative
                overflow-hidden
                bg-[#080808]
                px-5
                py-24
                sm:px-6
                sm:py-32
            "
        >
            {/* =========================
                BACKGROUND EFFECTS
            ========================= */}

            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -left-40
                        top-1/4
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-cyan-500
                        blur-[150px]
                    "
                />

                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.04, 0.09, 0.04],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        absolute
                        -right-40
                        bottom-0
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-blue-500
                        blur-[160px]
                    "
                />

                {/* Grid */}

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
                            My Work
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
                        Featured{" "}

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
                            Projects
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
                        A selection of projects I have worked on using
                        modern frontend technologies and development
                        practices.
                    </p>
                </motion.div>

                {/* =========================
                    PROJECT GRID
                ========================= */}

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-7
                    "
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* =========================
                    BOTTOM DIVIDER
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
                        mt-16
                        h-px
                        origin-left
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400/25
                        to-transparent
                        sm:mt-20
                    "
                />
            </div>
        </section>
    )
}

export default Projects

