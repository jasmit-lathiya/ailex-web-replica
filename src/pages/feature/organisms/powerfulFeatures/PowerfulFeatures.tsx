import { motion } from 'framer-motion'

import increasedEfficiencyIcon from '../../../../assets/advantageSection/increasedEfficiency.svg'
import aiDrivenAccuracyIcon from '../../../../assets/advantageSection/aiDrivenAccuracy.svg'
import scalableAndFlexibleIcon from '../../../../assets/advantageSection/scalableAndFlexible.svg'
import seamlessIntegrationIcon from '../../../../assets/advantageSection/seamlessIntegration.svg'

const powerfulFeaturesData = [
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

const PowerfulFeatures = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        className="flex flex-col justify-center z-10 text-center px-2 md:px-6 mt-16 md:mt-32 gap-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl md:text-6xl lg:text-6xl font-instrument max-w-4xl">
            Powerful features, unmatched benefits
          </span>

          <span className="font-switzer text-primaryDisabled text-lg  max-w-2xl">
            Secure, automated, and fast data protection.
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
          {powerfulFeaturesData.map((feature, index) => (
            <motion.div
              className="w-full flex flex-col gap-4 text-left"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
            >
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
              <span className="text-2xl">{feature.title}</span>
              <span className="text-primaryDisabled text-lg">
                {feature.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default PowerfulFeatures
