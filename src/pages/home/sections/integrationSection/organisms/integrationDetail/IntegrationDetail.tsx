import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface IntegrationDetailProps {
  title: string
  description: string
}

const IntegrationDetail = ({ title, description }: IntegrationDetailProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
  return (
    <div className="w-full flex flex-col items-start border-b-2 border-defaultGrey gap-4">
      <div
        className="w-full flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
      >
        <span className="font-medium font-switzer text-xl p-2">{title}</span>
        {/* <img
          src={downArrowIcon}
          alt="Down Arrow Icon"
          className="w-4 h-2"
          style={{ rotate: isDescriptionOpen ? '180deg' : '0deg' }}
        /> */}
        <motion.div
          animate={{
            rotate: isDescriptionOpen ? -180 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.44, 0, 0.56, 1],
          }}
        >
          <ChevronDown className="w-4 h-4 text-primaryDisabled" />
        </motion.div>
      </div>
      <div
        style={{ display: isDescriptionOpen ? 'block' : 'none' }}
        className="text-lg text-primaryDisabled pb-2"
      >
        <span>{description}</span>
      </div>
    </div>
  )
}

export default IntegrationDetail
