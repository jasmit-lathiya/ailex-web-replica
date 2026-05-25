import { motion } from 'framer-motion'

// Components
import AnimatedText from '../../molecules/animatedText'

// Images
import heroSectionBg from '../../assets/images/heroSectionBg.jpeg'

const LicenceData = [
  {
    title: 'Photography',
    description:
      'All images in this template are sourced from Pexels and Freepik and, are free for commercial use. Check out the license for Pexels here and Freepik here.',
  },
  {
    title: 'Icons',
    description:
      'All Icons in this template are sourced from Flaticon and Iconstica icon. Check out the license for Flaticon here and Iconstica here.',
  },
  {
    title: 'Fonts',
    description:
      'All fonts used in this template are available to use freely under the Google fonts license and Fontshare fonts license, Check out the license for Instrument Serif font license and  Switzer font license.',
  },
]

const LicencePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
        style={{
          backgroundImage: `url(${heroSectionBg})`,
        }}
      />
      <AnimatedText
        sentence="Licence"
        className="font-instrument text-4xl md:text-6xl md:mt-24"
      />
      <div className="flex flex-col justify-center gap-8 max-w-3xl">
        {LicenceData.map((data, index) => (
          <motion.div
            key={data.title}
            className="flex flex-col bg-defaultBlack gap-4 border border-defaultGrey p-8 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <span className="text-2xl font-instrument">{data.title}</span>
            <span className="text-md text-primaryDisabled">
              {data.description}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
    </div>
  )
}

export default LicencePage
