import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

interface featureCardProps {
  iconSrc: string
  title: string
  description: string
  linkLabel: string
  link: string
  delay?: number
}

const featureCard = ({
  iconSrc,
  title,
  description,
  linkLabel,
  link,
  delay = 0,
}: featureCardProps) => {
  return (
    <motion.div
      className=" flex flex-col border border-defaultGrey rounded-2xl px-8 py-16 bg-[#070B15] gap-8 max-w-sm"
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

      <div
        className="flex flex-row cursor-pointer text-defaultWhite hover:text-primaryDisabled font-medium"
        onClick={() => window.open(link, '_blank')}
      >
        <span>{linkLabel}</span>
        <ChevronRight />
      </div>
    </motion.div>
  )
}

export default featureCard
