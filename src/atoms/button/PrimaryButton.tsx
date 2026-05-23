import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'

interface PrimaryButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
  className?: string
}

const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  //   return (
  //     <button
  //       className={`px-5 py-2.5 rounded-lg bg-defaultWhite font-switzer text-defaultBlack font-semibold ${className}`}
  //       {...props}
  //     >
  //       {children}
  //     </button>
  //   )

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className={clsx(
        'relative overflow-hidden rounded-lg text-defaultBlack font-semibold py-2 px-6',
        className,
      )}
      {...props}
    >
      {/* DEFAULT GRADIENT */}
      <div className="absolute inset-0 bg-defaultWhite" />

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
        className="absolute inset-0 bg-gradient-to-b from-lighterBlue to-defaultWhite"
      />

      {/* CONTENT */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default PrimaryButton
