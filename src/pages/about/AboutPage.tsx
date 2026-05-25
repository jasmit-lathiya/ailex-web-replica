import { motion } from 'framer-motion'

// Components
import AnimatedText from '../../molecules/animatedText'
import { SecondaryButton } from '../../atoms/button'
import ClientLogoSection from '../../organisms/clientLogoSection'
import WhyChooseUs from './organisms/whyChooseUs'

// Images
import aboutBg from '../../assets/images/galaxyBg.jpeg'
import robotHandsImg from '../../assets/images/robotHands.jpeg'

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-8 p-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        />
        <AnimatedText
          sentence="Bringing the future of AI to your business"
          className="font-instrument text-4xl md:text-6xl mt-48 text-center max-w-2xl"
        />
        <AnimatedText
          sentence="We build cutting-edge AI solutions to automate workflows, enhance productivity, and drive business growth. Join us in shaping the future of intelligent automation."
          wordByWordAnimation
          className="text-lg text-primaryDisabled text-center max-w-3xl"
        />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />

        <motion.div
          className="flex flex-col items-center gap-8 mt-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <SecondaryButton className="py-4 px-8">
            Get started now
          </SecondaryButton>
          <img src={robotHandsImg} alt="Robot hands" />{' '}
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 max-w-3xl text-primaryDisabled font-medium text-lg p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-2xl text-start w-full pb-2 pt-12 text-defaultWhite">
            Where it all began
          </span>
          <p>
            At <span className="text-defaultBlue">Ailex</span>, we are on a
            mission to revolutionize the way businesses operate through the
            power of AI-driven automation. In today's fast-paced digital world,
            efficiency is everything. That's why we build intelligent solutions
            that automate repetitive tasks, optimize workflows, and deliver
            unmatched precision—allowing businesses to focus on innovation and
            growth.
          </p>
          <p>
            With cutting-edge machine learning, natural language processing, and
            real-time analytics, our AI technology ensures that every process
            runs smarter, faster, and more accurately. Whether it's data
            processing, text classification, or smart image labeling, our
            automation tools seamlessly integrate into existing systems to
            eliminate bottlenecks and boost efficiency.
          </p>
          <p>
            We take pride in being a trusted partner for businesses
            worldwide—helping startups, enterprises, and organizations
            streamline operations while saving thousands of hours every year.
            With an industry-leading 99.9% accuracy rate, our AI solutions are
            designed to reduce human error, cut costs, and enhance productivity
            across various sectors.
          </p>
        </motion.div>

        <WhyChooseUs />
        <ClientLogoSection />
      </div>
    </div>
  )
}

export default AboutPage
