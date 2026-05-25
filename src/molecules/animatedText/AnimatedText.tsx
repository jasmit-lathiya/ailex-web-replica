import { motion, Variants } from 'framer-motion'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.04, // speed between characters
    },
  },
}

const char: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 1,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

interface AnimatedTextProps {
  sentence: string
  className?: string
  canStartAnimation?: boolean
  wordByWordAnimation?: boolean
}

const AnimatedText = ({
  canStartAnimation = true,
  className,
  sentence,
  wordByWordAnimation = false,
}: AnimatedTextProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={canStartAnimation ? 'show' : 'hidden'}
      className={className || ''}
    >
      {wordByWordAnimation
        ? sentence.split(' ').map((wordItem, i) => (
            <motion.span key={i} variants={char} className="inline-block">
              {wordItem}&nbsp;
            </motion.span>
          ))
        : sentence.split(' ').map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block whitespace-nowrap mr-1"
            >
              {word.split('').map((charItem, i) => (
                <motion.span
                  key={i}
                  variants={char}
                  className="inline-block font-normal"
                >
                  {charItem}
                </motion.span>
              ))}
              {'\u00A0'}
            </span>
          ))}
    </motion.div>
  )
}

export default AnimatedText
