import { motion } from 'framer-motion'
import FeatureCard from './organisms/featureCard'
import uploadIcon from '../../../../assets/featureSection/upload.svg'
import aiProcessIcon from '../../../../assets/featureSection/aiProcess.svg'
import resultIcon from '../../../../assets/featureSection/result.svg'
import dragAndDropOnClickImg from '../../../../assets/featureSection/dragAndDropOnClick.png'
import generate3DShapeImg from '../../../../assets/featureSection/generate3DShape.png'
import searchImageCollectionImg from '../../../../assets/featureSection/searchImageCollection.png'
import founderImg from '../../../../assets/featureSection/founderImg.jpeg'

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
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto py-16 px-4 font-medium gap-8">
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
            delay={index * 0.7}
          />
        ))}
      </div>
      <motion.div
        className="flex-flex-col items-center justify-center text-center max-w-xl gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: features.length * 0.7 }}
      >
        <div className="text-center text-xl p-4 text-defaulWhite">
          “AI unlocks efficiency—let automation do the work while you focus on
          what matters.”
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <img
            src={founderImg}
            alt="Founder"
            className="w-8 h-8 rounded-full "
          />
          <span className="text-md block text-primaryDisabled">
            Carlos Jonson, Founder & CEO
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default FeatureSection
