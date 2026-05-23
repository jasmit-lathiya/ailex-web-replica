import { motion } from 'framer-motion'

interface featureCardProps {
  iconSrc: string
  title: string
  description: string
  imgSrc: string
  delay?: number
}

const featureCard = ({
  iconSrc,
  title,
  description,
  imgSrc,
  delay = 0,
}: featureCardProps) => {
  return (
    <motion.div
      className=" flex flex-col border border-defaultGrey rounded-2xl p-12 pb-0 bg-[#070B15] gap-8 max-w-sm w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="flex justify-center items-center w-16 h-16 border border-defaultGrey rounded-full bg-defaultBlack">
        <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12  p-2" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-switzer font-medium">{title}</span>
        <p className="font-switzer font-medium text-lg text-primaryDisabled">
          {description}
        </p>
      </div>

      <div className="relative overflow-hidden pb-2">
        <img
          src={imgSrc}
          alt={`${title} illustration`}
          className="w-full rounded-lg object-cover translate-y-4"
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent" />
      </div>
    </motion.div>
  )
}

export default featureCard
