import { SecondaryButton } from '../../../../../../atoms/button'
import { motion } from 'framer-motion'
import creditCardIcon from '../../../../../../assets/icons/creditCard.svg'
import specialOfferIcon from '../../../../../../assets/icons/specilOffer.svg'

const CTASection = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 items-center justify-center max-w-xl text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <span className="text-6xl text-defaultWhite font-instrument ">
        Join our AI-powered community
      </span>
      <span className="text-primaryDisabled text-lg">
        Subscribe to our newsletter and get the latest AI trends, automation
        tips, and exclusive updates delivered straight to your inbox.
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // handle submit here
        }}
        className="flex flex-col md:flex-row items-center justify-center gap-2 w-full px-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-2 rounded-md border border-defaultGrey bg-defaultBlack text-primaryDisabled font-switzer focus:outline-none text-lg"
        />

        <SecondaryButton type="submit" className="mx-auto py-2 px-6">
          Submit
        </SecondaryButton>
      </form>
      <div className="flex flex-row flex-wrap gap-8">
        <div className="flex flex-row items-center gap-2">
          <img src={creditCardIcon} alt="Credit Card" className="h-4" />
          <span>No credit card is required</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img src={specialOfferIcon} alt="Special Offer" className="h-4" />
          <span>Early access & Special offers</span>
        </div>
      </div>
    </motion.div>
  )
}

export default CTASection
