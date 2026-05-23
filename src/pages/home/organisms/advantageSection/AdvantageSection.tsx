import { motion } from 'framer-motion'
import increasedEfficiencyIcon from '../../../../assets/advantageSection/increasedEfficiency.svg'
import aiDrivenAccuracyIcon from '../../../../assets/advantageSection/aiDrivenAccuracy.svg'
import scalableAndFlexibleIcon from '../../../../assets/advantageSection/scalableAndFlexible.svg'
import seamlessIntegrationIcon from '../../../../assets/advantageSection/seamlessIntegration.svg'

const advantageData = [
  {
    title: 'Increased efficiency',
    description:
      'Automate repetitive tasks and streamline workflows to save time and resources.',
    icon: increasedEfficiencyIcon,
  },
  {
    title: 'AI-driven accuracy',
    description:
      'Reduce human errors with intelligent automation that ensures precision and reliability.',
    icon: aiDrivenAccuracyIcon,
  },
  {
    title: 'Scalable & Flexible',
    description:
      "Adapt AI automation to fit your business needs, whether you're a startup or an enterprise.",
    icon: scalableAndFlexibleIcon,
  },
  {
    title: 'Seamless integration',
    description:
      'Easily connect with 50+ tools and platforms to enhance your existing systems.',
    icon: seamlessIntegrationIcon,
  },
]

const AdvantageSection = () => {
  return (
    <section className="max-w-6xl w-full py-16 font-medium font-switzer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {advantageData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            className="p-2"
          >
            <div className="flex flex-col gap-4">
              <img src={item.icon} alt={item.title} className="w-8 h-8" />
              <span className="text-2xl">{item.title}</span>
              <span className="text-primaryDisabled text-lg">
                {item.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AdvantageSection
