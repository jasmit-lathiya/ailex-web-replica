import { motion } from 'framer-motion'

interface StateCardProps {
  title: string
  description: string
  delay?: number
}

const StateCard = ({ title, description, delay = 0 }: StateCardProps) => {
  return (
    <motion.div
      className="w-full md:w-auto flex flex-col backdrop-blur-lg border-transparent rounded-lg p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      {/* Content */}
      <span className="text-defaultWhite text-4xl font-instrument text-left">
        {title}
      </span>

      <span className="text-primaryDisabled mt-6 leading-relaxed font-medium text-left max-w-md">
        {description}
      </span>
    </motion.div>
  )
}

export default StateCard
