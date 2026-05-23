import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { clsx } from 'clsx'

interface SecondaryButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  className?: string
}

const SecondaryButton = ({
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={clsx(
        'relative overflow-hidden rounded-lg border border-lighterBlue text-defaultWhite font-semibold',
        className,
      )}
      {...props}
    >
      {/* DEFAULT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-defaultBlue to-darkerBlue" />

      {/* HOVER GRADIENT */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{
          duration: 0.4,
          ease: [0.44, 0, 0.56, 1],
        }}
        className="absolute inset-0 bg-gradient-to-b from-lighterBlue to-darkerBlue"
      />

      {/* CONTENT */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default SecondaryButton
