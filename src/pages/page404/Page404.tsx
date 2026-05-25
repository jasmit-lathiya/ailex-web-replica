import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Components
import { SecondaryButton } from '../../atoms/button'

// Images
import heroSectionBg from '../../assets/images/heroSectionBg.jpeg'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
        style={{
          backgroundImage: `url(${heroSectionBg})`,
        }}
      />
      <span className="text-9xl font-instrument pt-32">404</span>
      <motion.div
        className="flex flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="text-4xl md:text-6xl font-instrument">
          Page not found
        </span>
        <span className="text-xl text-primaryDisabled">
          The page you are looking for doesn't exist or has been moved.
        </span>
        <SecondaryButton className="py-2 px-8" onClick={() => navigate('/')}>
          Go home
        </SecondaryButton>
      </motion.div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
    </div>
  )
}

export default Page404
