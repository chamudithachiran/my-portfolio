import { motion, useScroll, useSpring } from "framer-motion"

function ScrollProgressBar() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 origin-left z-[100] shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            style={{ scaleX }}
        />
    )
}

export default ScrollProgressBar
