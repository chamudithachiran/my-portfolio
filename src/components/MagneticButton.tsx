import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
    type MouseEvent,
} from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
    onClick?: () => void
    href?: string
    target?: string
    rel?: string
    download?: boolean | string
}

function MagneticButton({
    children,
    className = "",
    strength = 0.25,
    onClick,
    href,
    target,
    rel,
    download,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLElement | null>(null)
    const [isDesktop, setIsDesktop] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, {
        stiffness: 250,
        damping: 18,
        mass: 0.25,
    })

    const springY = useSpring(y, {
        stiffness: 250,
        damping: 18,
        mass: 0.25,
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)")

        const handleChange = () => {
            setIsDesktop(mediaQuery.matches)
        }

        handleChange()

        mediaQuery.addEventListener("change", handleChange)

        return () => {
            mediaQuery.removeEventListener("change", handleChange)
        }
    }, [])

    const handleMouseMove = (
        event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
        if (!isDesktop || !buttonRef.current) return

        const rect = buttonRef.current.getBoundingClientRect()

        const mouseX =
            event.clientX - (rect.left + rect.width / 2)

        const mouseY =
            event.clientY - (rect.top + rect.height / 2)

        x.set(mouseX * strength)
        y.set(mouseY * strength)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const content = (
        <motion.span
            style={{
                x: springX,
                y: springY,
            }}
            className="inline-flex items-center justify-center"
        >
            {children}
        </motion.span>
    )

    if (href) {
        return (
            <motion.a
                ref={(element) => {
                    buttonRef.current = element
                }}
                href={href}
                target={target}
                rel={rel}
                download={download}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={className}
                whileTap={{ scale: 0.96 }}
            >
                {content}
            </motion.a>
        )
    }

    return (
        <motion.button
            ref={(element) => {
                buttonRef.current = element
            }}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            whileTap={{ scale: 0.96 }}
        >
            {content}
        </motion.button>
    )
}

export default MagneticButton