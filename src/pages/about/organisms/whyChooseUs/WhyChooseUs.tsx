import { motion } from 'framer-motion'

const chooseUsData = [
  {
    title: 'Cutting-edge AI technology',
    description:
      'We leverage advanced AI and automation to deliver smart, efficient, and accurate solutions.',
  },
  {
    title: 'Seamless integration',
    description:
      'From small startups to large enterprises, our automation tools integrate smoothly with your existing workflows.',
  },
  {
    title: 'Innovation-driven',
    description:
      'Our team continuously innovates to keep you ahead in a rapidly evolving digital world.',
  },
  {
    title: 'Proven results & real impact',
    description:
      'Our AI-powered automation delivers measurable success and helps businesses.',
  },
]

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-8 p-4">
      <span className="text-4xl md:text-6xl lg:text-6xl font-instrument max-w-4xl">
        Why choose us?
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-wrap">
        {chooseUsData.map((data, index) => (
          <motion.div
            key={data.title}
            className="flex flex-col border border-defaultGrey rounded-xl p-8 font-medium gap-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.7 }}
          >
            <span className="text-2xl">{data.title}</span>
            <span className="text-lg text-primaryDisabled  whitespace-normal">
              {data.description}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
