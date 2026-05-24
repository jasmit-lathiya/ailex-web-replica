// src/pages/home/sections/HeroSection.tsx

import { motion, useInView, Variants } from 'framer-motion'
import heroSectionBg from '../../../../assets/heroSection/heroSectionBg.jpeg'
import starIcon from '../../../../assets/icons/star.svg'
import aiIcon from '../../../../assets/icons/ai.svg'
import heroSectionChatbotImg from '../../../../assets/heroSection/heroSectionChatbot.png'
import heroSectionChartImg from '../../../../assets/heroSection/heroSectionChart.png'
import heroSectionPhotoImg from '../../../../assets/heroSection/heroSectionPhoto.png'
import { useRef, useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../../../../atoms/button'

const heroSectionImages = [
  heroSectionChatbotImg,
  heroSectionPhotoImg,
  heroSectionChartImg,
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      delay: 1,
      staggerChildren: 0.04, // speed between characters
    },
  },
}

const char: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 1,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const HeroSection = () => {
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
        <motion.div className="flex flex-col items-center font-instrument text-4xl md:text-6xl lg:text-8xl text-center text-white mt-4 gap-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isAiLogoAnimationComplete ? 'show' : 'hidden'}
          >
            {'Say goodbye to manual'.split('').map((charItem, i) => (
              <motion.span
                key={i}
                variants={char}
                className="inline-block font-normal"
              >
                {charItem === ' ' ? '\u00A0' : charItem}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isAiLogoAnimationComplete ? 'show' : 'hidden'}
            >
              {'tasks, hello to'.split('').map((charItem, i) => (
                <motion.span
                  key={i}
                  variants={char}
                  className="inline-block font-normal"
                >
                  {charItem === ' ' ? '\u00A0' : charItem}
                </motion.span>
              ))}
            </motion.div>
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
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isAiLogoAnimationComplete ? 'show' : 'hidden'}
          className="mt-4 max-w-2xl text-center text-md md:text-lg px-4"
        >
          {'Automate repetitive tasks, analyze data instantly, and integrate with your favorite apps—so you can focus on what truly matters.'
            .split(' ')
            .map((wordItem, i) => (
              <motion.span key={i} variants={char} className="inline-block">
                {wordItem}&nbsp;
              </motion.span>
            ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-row items-center gap-4 flex-wrap justify-center"
        >
          <SecondaryButton className="text-base py-4 px-6">
            Explore features
          </SecondaryButton>
          <PrimaryButton className="text-base py-4 px-6">
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
        {/* <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" /> */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default HeroSection
