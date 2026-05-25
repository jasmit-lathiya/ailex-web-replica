import { motion } from 'framer-motion'

// Components
import AnimatedText from '../../molecules/animatedText'
import FeatureCard from './organisms/featureCard'
import ClientLogoSection from '../../organisms/clientLogoSection'
import PowerfulFeatures from './organisms/powerfulFeatures'

// Images
import featurePageBg from '../../assets/images/galaxyBg.jpeg'
import dataProcessingImg from '../../assets/aiShowcaseSection/dataProcessingImg.svg'
import smartIimageLabelingImg from '../../assets/aiShowcaseSection/smartImageLabelingImg.avif'
import analysisImg from '../../assets/aiShowcaseSection/sentimentAnalysisImg.svg'

const featureCardData = [
  {
    title: 'Process large datasets with AI efficiency',
    description:
      'AI streamlines data extraction, transformation, and analysis, reducing manual effort and improving accuracy in handling big data.',
    imgSrc: dataProcessingImg,
  },
  {
    title: 'AI that recognizes and tags images',
    description:
      'Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.',
    imgSrc: smartIimageLabelingImg,
  },
]

const FeaturePage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden font-switzer font-medium text-primaryDisabled pt-48 flex justify-center p-8">
      <div className="w-full flex flex-row flex-wrap gap-8 p-8 justify-center items-center max-w-7xl">
        <div className="w-full flex flex-row flex-wrap gap-8 p-8 mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
            style={{
              backgroundImage: `url(${featurePageBg})`,
            }}
          />
          <div className="flex-1 flex flex-col items-center">
            <AnimatedText
              sentence="Understanding emotions in a text instantly"
              className="font-instrument text-4xl md:text-7xl text-defaultWhite whitespace-pre-line break-words"
            />
            <AnimatedText
              sentence="Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real-time."
              className="mt-4 max-w-2xl text-md md:text-lg "
              wordByWordAnimation
            />
          </div>
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img src={analysisImg} alt="Analysis" />
          </motion.div>
        </div>
        <ClientLogoSection />
        <PowerfulFeatures />
        <motion.div
          className="flex flex-col md:flex-row gap-8 my-12 md:my-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {featureCardData.map((data) => (
            <FeatureCard
              title={data.title}
              description={data.description}
              imgSrc={data.imgSrc}
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-[-1]" />
    </div>
  )
}

export default FeaturePage
