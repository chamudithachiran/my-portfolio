
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function CursorSpotlight() {
    const [position, setPosition] = useState({
        x: -500,
        y: -500,
    })

    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)")

        const handleScreenChange = () => {
            setIsDesktop(mediaQuery.matches)
        }

        handleScreenChange()
        mediaQuery.addEventListener("change", handleScreenChange)

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleScreenChange
            )
        }
    }, [])

    useEffect(() => {
        if (!isDesktop) return

        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [isDesktop])

    if (!isDesktop) return null

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-[280px] w-[280px] rounded-full"
            animate={{
                x: position.x - 140,
                y: position.y - 140,
            }}
            transition={{
                type: "spring",
                stiffness: 80,
                damping: 25,
                mass: 0.4,
            }}
            style={{
                background:
                    "radial-gradient(circle, rgba(34,211,238,0.10) 0%, rgba(34,211,238,0.04) 30%, transparent 70%)",
                filter: "blur(8px)",
            }}
        />
    )
}

export default CursorSpotlight

