import { motion } from 'framer-motion'
import FreeplanCard from './organisms/freeplanCard'
import PremiumplanCard from './organisms/premiumplanCard'

const PricingPreviewSection = () => {
  return (
    <motion.div
      className="w-full flex flex-col md:items-center gap-8 mt-12 max-w-6xl p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="font-instrument text-5xl">
        Simple & flexible pricing
      </span>
      <div className="flex flex-col md:flex-row gap-8">
        <FreeplanCard />
        <PremiumplanCard />
      </div>
    </motion.div>
  )
}

export default PricingPreviewSection
