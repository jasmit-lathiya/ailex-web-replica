import { useState } from 'react'
import { motion } from 'framer-motion'

// Components
import { SecondaryButton } from '../../../../atoms/button'
import AiShowcaseNameCard from './molecules/aiShowcaseNameCard'
import AiShowcaseCard from './organisms/aiShowcaseCard'

// Icons
import sentimentAnalysisIcon from '../../../../assets/icons/increasingChart.svg'
import dataProcessingIcon from '../../../../assets/icons/dataProcessing.svg'
import smartIimageLabelingIcon from '../../../../assets/icons/smartIimageLabeling.svg'
import aiTextClassificationIcon from '../../../../assets/icons/textClassification.svg'

// Images
import sentimentAnalysisImg from '../../../../assets/aiShowcaseSection/sentimentAnalysisImg.svg'
import dataProcessingImg from '../../../../assets/aiShowcaseSection/dataProcessingImg.svg'
import smartIimageLabelingImg from '../../../../assets/aiShowcaseSection/smartImageLabelingImg.avif'
import aiTextClassificationImg from '../../../../assets/aiShowcaseSection/aiTextClassificationImg.svg'

const aiShowcasefeatures = [
  {
    name: 'Sentiment analysis',
    featureIcon: sentimentAnalysisIcon,
    title: 'Understanding emotions in a text instantly',
    description:
      'Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.',
    imgSrc: sentimentAnalysisImg,
  },
  {
    name: 'Data processing',
    featureIcon: dataProcessingIcon,
    title: 'Process large datasets with AI efficiency',
    description:
      'AI streamlines data extraction, transformation, and analysis, reducing manual effort and improving accuracy in handling big data.',
    imgSrc: dataProcessingImg,
  },
  {
    name: 'Smart Image labelling',
    featureIcon: smartIimageLabelingIcon,
    title: 'AI that recognizes and tags images',
    description:
      'Use AI-driven image recognition to detect objects, classify visuals, and automate labeling for media, security, and content management.',
    imgSrc: smartIimageLabelingImg,
  },
  {
    name: 'AI-text classification',
    featureIcon: aiTextClassificationIcon,
    title: 'Organize and categorize text with AI',
    description:
      'Automatically classify and sort text data using AI-powered models. Perfect for email filtering, document categorization, and content tagging.',
    imgSrc: aiTextClassificationImg,
  },
]

const AiShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <motion.div
      className="w-full max-w-7xl flex flex-col gap-8 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-row flex-wrap justify-between items-center gap-4">
        <span className="font-instrument text-5xl max-w-2xl wrap">
          Advanced AI features for smarter automation
        </span>
        <SecondaryButton className="py-4 px-6">Get started now</SecondaryButton>
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex flex-row lg:flex-col flex-wrap ">
          {aiShowcasefeatures.map((feature, index) => (
            <AiShowcaseNameCard
              key={feature.name}
              name={feature.name}
              featureIcon={feature.featureIcon}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div>
          {aiShowcasefeatures.map((feature, index) => (
            <div
              key={index}
              className={index === activeIndex ? 'block' : 'hidden'}
            >
              <AiShowcaseCard
                index={activeIndex}
                title={feature.title}
                description={feature.description}
                imgSrc={feature.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default AiShowcaseSection
