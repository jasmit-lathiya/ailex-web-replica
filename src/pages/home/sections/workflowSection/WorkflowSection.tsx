import { motion } from 'framer-motion'
import workflowSectionBgImg from '../../../../assets/images/galaxyBg.jpeg'
import logo1 from '../../../../assets/workflowSection/logo1.svg'
import logo2 from '../../../../assets/workflowSection/logo2.svg'
import logo3 from '../../../../assets/workflowSection/logo3.svg'
import logo4 from '../../../../assets/workflowSection/logo4.svg'
import logo5 from '../../../../assets/workflowSection/logo5.svg'
import logo6 from '../../../../assets/workflowSection/logo6.svg'
import logo7 from '../../../../assets/workflowSection/logo7.svg'
import logo8 from '../../../../assets/workflowSection/logo8.svg'
import logo9 from '../../../../assets/workflowSection/logo9.svg'
import { SecondaryButton } from '../../../../atoms/button'
import StateCard from './organisms/stateCard'
import useBreakpoint from '../../../../utils/useBreakPoint'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]

const stateData = [
  {
    title: '1 Million',
    description: 'Automating repetitive tasks for businesses worldwide.',
  },
  {
    title: '99% accuracy',
    description:
      'Ensures the highest level of data reliability and consistency.',
  },
  {
    title: '50+ apps',
    description: 'Effortlessly connecting with your favorite tools.',
  },
]

const WorkFlowSection = () => {
  const { isSmallScreen } = useBreakpoint()
  const radius = isSmallScreen ? 180 : 525

  return (
    <section className="relative w-full h-full overflow-hidden flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${workflowSectionBgImg})`,
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <motion.div
        className="flex flex-col justify-center items-center z-10 text-center px-6 mt-72 gap-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-4xl md:text-6xl lg:text-7xl font-instrument max-w-3xl">
          Supercharge your apps with AI-powered automation
        </span>

        <span className="font-switzer text-primaryDisabled text-lg  max-w-2xl">
          Our AI-powered automation integrates with leading apps, ensuring
          smooth workflows and enhanced productivity.
        </span>
        <SecondaryButton className="py-4 px-6">
          View all integrations
        </SecondaryButton>

        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mt-8 max-w-7xl">
          {stateData.map((state, index) => (
            <StateCard
              key={index}
              title={state.title}
              description={state.description}
              delay={index * 0.3}
            />
          ))}
        </div>
      </motion.div>

      {/* Logos Visible Area */}
      <div className="absolute inset-0 overflow-hidden z-10 translate-y-[10%] md:translate-y-0">
        <div className="absolute inset-0 bottom-1/2 overflow-hidden h-[200px] md:h-auto">
          <motion.div
            className="relative w-[400px] md:w-[1200px] h-[400px] md:h-[1200px] mx-auto"
            animate={{ rotate: 360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...logos, ...logos].map((logo, index) => {
              const angle = (360 / (logos.length - 1)) * index
              const radian = (angle * Math.PI) / 360

              const x = radius * Math.cos(radian)
              const y = radius * Math.sin(radian)

              return (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{ x, y }}
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-5 md:w-20 h-5 md:h-20 object-contain"
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkFlowSection
