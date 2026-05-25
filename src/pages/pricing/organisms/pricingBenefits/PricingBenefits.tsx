import { motion } from 'framer-motion'

const pricingBenefits = [
  {
    title: 'Affordable plans',
    description: 'Flexible pricing options to fit every budget.',
  },
  {
    title: 'Transparent costs accuracy',
    description: 'No hidden fees—clear and upfront pricing.',
  },
  {
    title: 'Seamless flexibility',
    description: 'Easily switch or adjust plans as needed.',
  },
]

const PricingBenefits = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col justify-center items-center gap-8 mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-4xl md:text-6xl lg:text-7xl font-instrument max-w-3xl">
          Pricing benefits
        </span>

        <span className="font-switzer text-primaryDisabled text-lg max-w-2xl">
          Enjoy affordable plans, transparent pricing, flexible subscriptions,
          and ongoing value for your investment.
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 md:flex-row justify-evenly gap-8">
          {pricingBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="flex flex-col border border-primaryDisabled rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.7 }}
            >
              <span className="font-instrument text-2xl">{benefit.title}</span>
              <span className="text-lg text-primaryDisabled">
                {benefit.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default PricingBenefits
