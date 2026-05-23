import freeplanIcon from '../../../../../../assets/pricingSection/freeplan.svg'
import checkedIcon from '../../../../../../assets/icons/checked.svg'
import { PrimaryButton } from '../../../../../../atoms/button'

const freeplanFeatures = [
  'AI-powered automation tools',
  'Up to 5,000 tasks/month',
  'Basic integrations',
  'Standard AI processing speed',
]

const FreeplanCard = () => {
  return (
    <div className="flex flex-col bg-primaryBg border border-defaultGrey rounded-xl font-switzer p-8 gap-8">
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center w-16 h-16 bg-defaultBlack border border-defaultGrey rounded-full">
          <img src={freeplanIcon} alt="Free plan" className="w-8 h-auto" />
        </div>
        <div className="bg-defaultBlack border-transparent rounded-lg">
          Free plan
        </div>
      </div>

      <div>
        <span className="font-instrument text-5xl md:text-7xl ">$0</span>
        <span className="text-md md:text-lg text-primaryDisabled font-medium">
          /1-month trial
        </span>
      </div>

      <PrimaryButton className="w-full py-4">Get started</PrimaryButton>

      <ul className="flex flex-col gap-4">
        {freeplanFeatures.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={checkedIcon} alt="Checked" className="w-4 h-4" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FreeplanCard
