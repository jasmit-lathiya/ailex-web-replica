import { motion } from 'framer-motion'
import FeatureCard from './organisms/featureCard'
import uploadIcon from '../../../../assets/featureSection/upload.svg'
import aiProcessIcon from '../../../../assets/icons/aiProcess.svg'
import resultIcon from '../../../../assets/featureSection/result.svg'
import dragAndDropOnClickImg from '../../../../assets/featureSection/dragAndDropOnClick.png'
import generate3DShapeImg from '../../../../assets/featureSection/generate3DShape.png'
import searchImageCollectionImg from '../../../../assets/featureSection/searchImageCollection.png'
import FounderMessage from '../../../../organisms/founderMessage'

const features = [
  {
    iconSrc: uploadIcon,
    title: 'Upload your data',
    description:
      'Our AI automatically processes and prepares your information for analysis.',
    imgSrc: dragAndDropOnClickImg,
  },
  {
    iconSrc: aiProcessIcon,
    title: 'AI processes & learns',
    description:
      'AI analyzes patterns, classifies data, and learns from inputs to automate tasks.',
    imgSrc: generate3DShapeImg,
  },
  {
    iconSrc: resultIcon,
    title: 'Get results instantly',
    description:
      'Receive structured outputs, actionable insights, or automated actions workflow needs.',
    imgSrc: searchImageCollectionImg,
  },
]

const FeatureSection = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto py-16 px-4 font-medium gap-8">
      <motion.div
        className="text-center font-instrument text-[38px] md:text-[44px] lg:text-[52px] p-4 max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        The smartest way to automate your tasks
      </motion.div>
      <div className="flex flex-col md:flex-row gap-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconSrc={feature.iconSrc}
            title={feature.title}
            description={feature.description}
            imgSrc={feature.imgSrc}
            delay={index * 0.3}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: features.length * 0.3 }}
      >
        <FounderMessage />
      </motion.div>
    </div>
  )
}

export default FeatureSection
