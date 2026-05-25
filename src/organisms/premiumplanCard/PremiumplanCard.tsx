import { useState } from 'react'

// Components
import { SecondaryButton } from '../../atoms/button'

// Icons
import premiumPlanIcon from '../../assets/pricingSection/premiumplan.svg'
import checkedIcon from '../../assets/icons/checked.svg'

// Images
import premiumplanBgImg from '../../assets/images/galaxyBg.jpeg'

const premiumPlanFeatures = [
  'Everything from Free Plan +',
  'Advanced AI automation features',
  'Real-time AI insights & analytics',
  'Enterprise-level security & compliance',
  'Up to 100,000 tasks/month',
  'Priority customer support',
  'API access for custom workflows',
]

const PremiumPlanCard = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex-2 relative overflow-hidden flex flex-col border border-defaultGrey rounded-xl font-switzer p-8 gap-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-40"
        style={{
          backgroundImage: `url(${premiumplanBgImg})`,
        }}
      />
      <div className="flex flex-row justify-between">
        <div className="flex items-center justify-center w-16 h-16 bg-defaultBlack border border-defaultGrey rounded-full">
          <img
            src={premiumPlanIcon}
            alt="Premium plan"
            className="w-8 h-auto"
          />
        </div>
        <div className="flex flex-col h-full items-end gap-8">
          <div className="w-fit flex items-center bg-gradient-to-b from-defaultBlue to-darkerBlue border-transparent rounded-lg px-4">
            Premium plan
          </div>
          <div className="flex justify-end text-primaryDisabled items-center gap-2 bottom-[-40px]">
            <span>Monthly</span>
            <button
              onClick={() => setEnabled(!enabled)}
              className={`w-12 h-6 flex items-center border-transparent rounded-full transition-all duration-300 bg-defaultBlack`}
            >
              <div
                className={`w-5 h-5 bg-primaryDisabled rounded-full shadow-md transform transition-all duration-300 ${
                  enabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <span>Yearly 10% off</span>
          </div>
        </div>
      </div>

      <div>
        <span className="font-instrument text-5xl md:text-7xl ">
          {enabled ? '$40' : '$49'}
        </span>
        <span className="text-md md:text-lg text-primaryDisabled font-medium">
          /per month
        </span>
      </div>

      <SecondaryButton className="w-full py-4">
        Subscribe to pro
      </SecondaryButton>

      <ul className="flex flex-col lg:max-h-[180px] flex-wrap gap-4">
        {premiumPlanFeatures.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <img src={checkedIcon} alt="Checked" className="w-4 h-4 mt-1" />

            <span className="break-words">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PremiumPlanCard
