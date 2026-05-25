import { motion, useInView } from 'framer-motion'
import heroSectionBg from '../../../../assets/images/heroSectionBg.jpeg'
import starIcon from '../../../../assets/icons/star.svg'
import aiIcon from '../../../../assets/icons/ai.svg'
import heroSectionChatbotImg from '../../../../assets/heroSection/heroSectionChatbot.png'
import heroSectionChartImg from '../../../../assets/heroSection/heroSectionChart.png'
import heroSectionPhotoImg from '../../../../assets/heroSection/heroSectionPhoto.png'
import { useRef, useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../../../../atoms/button'
import AnimatedText from '../../../../molecules/animatedText'
import { useNavigate } from 'react-router-dom'

const heroSectionImages = [
  heroSectionChatbotImg,
  heroSectionPhotoImg,
  heroSectionChartImg,
]

const HeroSection = () => {
  const navigate = useNavigate()
  const [isAiLogoAnimationComplete, setisAiLogoAnimationComplete] =
    useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3, //30% of element visible
  })

  const shouldAnimate = isAiLogoAnimationComplete && isInView
  return (
    <section className="relative h-full w-full overflow-hidden font-switzer font-medium text-primaryDisabled pt-48 flex justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroSectionBg})`,
        }}
      />

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl flex flex-col h-full items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-row items-center gap-2"
        >
          <img
            src={starIcon}
            alt="Star Icon"
            className="h-6 w-auto object-contain"
          />
          4.7/5.0 on google.com
        </motion.div>
        <div className="flex flex-col items-center font-instrument text-4xl md:text-6xl lg:text-8xl text-center text-white mt-4 gap-4">
          <AnimatedText
            sentence="Say goodbye to manual"
            canStartAnimation={isAiLogoAnimationComplete}
          />

          <div className="flex flex-col md:flex-row items-center gap-4">
            <AnimatedText
              sentence="tasks, hello to"
              canStartAnimation={isAiLogoAnimationComplete}
            />
            <motion.img
              src={aiIcon}
              alt="AI Icon"
              className="relative z-10 w-18 h-18"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeIn' }}
              onAnimationComplete={() => setisAiLogoAnimationComplete(true)}
            />
          </div>
        </div>

        <AnimatedText
          sentence="Automate repetitive tasks, analyze data instantly, and integrate with your favorite apps—so you can focus on what truly matters."
          canStartAnimation={isAiLogoAnimationComplete}
          wordByWordAnimation
          className="mt-4 max-w-2xl text-center text-md md:text-lg px-4"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-row items-center gap-4 flex-wrap justify-center"
        >
          <SecondaryButton
            className="text-base py-4 px-6"
            onClick={() => navigate('/feature')}
          >
            Explore features
          </SecondaryButton>
          <PrimaryButton
            className="text-base py-4 px-6"
            onClick={() => navigate('/pricing')}
          >
            View pricing
          </PrimaryButton>
        </motion.div>

        {/* <div className="flex items-start justify-center mt-24"> */}
        <div
          ref={ref}
          className="w-full flex items-center gap-6 justify-between mt-12 md:mt-24 p-4"
        >
          {heroSectionImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              initial={{ opacity: 0, y: 80, skewY: '12deg' }}
              animate={
                shouldAnimate
                  ? { opacity: 1, y: 0, skewY: '12deg' }
                  : { opacity: 0, y: 80, skewY: '12deg' }
              }
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="
        flex-1 min-w-0
        w-auto
        h-auto
        rounded-2xl
        shrink-0
        shadow-2xl
      "
            />
          ))}
        </div>
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  )
}

export default HeroSection
