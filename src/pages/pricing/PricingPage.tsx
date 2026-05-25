import { motion } from 'framer-motion'

// Components
import AnimatedText from '../../molecules/animatedText'
import ClientLogoSection from '../../organisms/clientLogoSection'
import FreeplanCard from '../../organisms/freeplanCard'
import PremiumplanCard from '../../organisms/premiumplanCard'
import FounderMessage from '../../organisms/founderMessage'
import PricingBenefits from './organisms/pricingBenefits'

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-7xl flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center justify-center gap-8">
          <AnimatedText
            sentence="Choose your plan"
            className="font-instrument text-4xl md:text-6xl pt-8 md:mt-24"
          />
          <AnimatedText
            sentence="Free 14-day trial for all plans   ·   No credit card required   ·   Cancel anytime"
            className="text-lg text-primaryDisabled text-center"
            wordByWordAnimation
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full ">
          <FreeplanCard />
          <PremiumplanCard />
        </div>
        <PricingBenefits />
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FounderMessage />
        </motion.div>
        <ClientLogoSection />
      </div>
    </div>
  )
}

export default PricingPage
