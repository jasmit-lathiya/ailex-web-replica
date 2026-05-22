import { motion } from 'framer-motion'
import artistryLogo from '../../../../assets/clienLogoSection/artistryLogo.svg'
import dexignLogo from '../../../../assets/clienLogoSection/dexignLogo.svg'
import emblemLogo from '../../../../assets/clienLogoSection/emblemLogo.svg'
import graphoLogo from '../../../../assets/clienLogoSection/graphoLogo.svg'
import iconicLogo from '../../../../assets/clienLogoSection/iconicLogo.svg'
import optimalLogo from '../../../../assets/clienLogoSection/optimalLogo.svg'
import visualyLogo from '../../../../assets/clienLogoSection/visualyLogo.svg'
import waylineLogo from '../../../../assets/clienLogoSection/waylineLogo.svg'

const logos = [
  artistryLogo,
  dexignLogo,
  emblemLogo,
  graphoLogo,
  iconicLogo,
  optimalLogo,
  visualyLogo,
  waylineLogo,
]

function ClientLogoSection() {
  return (
    <section className="w-full overflow-hidden py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center font-medium mb-10">
          Helping businesses succeed worldwide
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient Blur Left */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-defaultBlack to-transparent" />

          {/* Gradient Blur Right */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-defaultBlack to-transparent" />

          <motion.div
            className="flex gap-16 w-max"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 100,
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 w-auto object-contain opacity-80"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogoSection
