import { motion } from 'framer-motion'

// Icons
import increasedEfficiencyIcon from '../../../../assets/icons/increasedEfficiency.svg'
import aiDrivenAccuracyIcon from '../../../../assets/icons/aiDrivenAccuracy.svg'
import scalableAndFlexibleIcon from '../../../../assets/icons/scalableAndFlexible.svg'
import seamlessIntegrationIcon from '../../../../assets/icons/seamlessIntegration.svg'
import aiTextClassificationIcon from '../../../../assets/icons/textClassification.svg'
import dataProcessingIcon from '../../../../assets/icons/dataProcessing.svg'
import smartIimageLabelingIcon from '../../../../assets/icons/smartIimageLabeling.svg'
import dataSecuriyIcon from '../../../../assets/icons/increasingChart.svg'

const powerfulFeaturesData = [
  {
    title: 'Data processing',
    description:
      'AI automates data extraction, transformation, and analysis for accuracy and efficiency.',
    icon: dataProcessingIcon,
  },
  {
    title: 'Smart image labeling',
    description:
      'AI detects objects, classifies visuals, and automates labeling.',
    icon: smartIimageLabelingIcon,
  },
  {
    title: 'AI-text classification',
    description:
      'Sort and categorize text automatically for emails, documents, and content.',
    icon: aiTextClassificationIcon,
  },
  {
    title: 'Automated backup',
    description: 'Secure, automatic backups keep your data safe.',
    icon: increasedEfficiencyIcon,
  },
  {
    title: 'Maximum data security',
    description:
      'Advanced encryption and secure access controls protect your data.',
    icon: dataSecuriyIcon,
  },
  {
    title: 'Flexible scalability',
    description: 'Storage that adapts to your growing needs.',
    icon: scalableAndFlexibleIcon,
  },
  {
    title: 'Enhanced productivity',
    description: 'Intuitive tools for effortless file management.',
    icon: seamlessIntegrationIcon,
  },
  {
    title: 'Advanced file sharing',
    description: 'Secure sharing with customizable permissions and expiration.',
    icon: aiDrivenAccuracyIcon,
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
