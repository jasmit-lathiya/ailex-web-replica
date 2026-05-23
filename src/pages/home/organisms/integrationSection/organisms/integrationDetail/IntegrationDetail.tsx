import { useState } from 'react'
import downArrowIcon from '../../../../../../assets/icons/downArrow.svg'

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
        <img
          src={downArrowIcon}
          alt="Down Arrow Icon"
          className="w-4 h-2"
          style={{ rotate: isDescriptionOpen ? '180deg' : '0deg' }}
        />
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
