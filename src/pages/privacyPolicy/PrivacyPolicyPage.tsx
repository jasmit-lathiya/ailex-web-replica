import { motion } from 'framer-motion'

// Components
import AnimatedText from '../../molecules/animatedText'

// Images
import heroSectionBg from '../../assets/images/heroSectionBg.jpeg'

// Constants
import privacyPolicyData from '../../constants/privacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
        style={{
          backgroundImage: `url(${heroSectionBg})`,
        }}
      />
      <AnimatedText
        sentence="Privacy Policy"
        className="font-instrument text-4xl md:text-6xl md:mt-32"
      />
      <div className="flex flex-col justify-center gap-8 max-w-3xl">
        <motion.div
          className="flex flex-col gap-4  p-8 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="py-8 text-primaryDisabled font-medium">
            Effective Date: 03 March 2026
          </span>
          <ol className="flex flex-col gap-12 list-decimal pl-6 marker:font-instrument marker:text-defaultWhite marker:text-2xl">
            {privacyPolicyData.map((data) => (
              <li className="text-primaryDisabled" key={data.title}>
                <p className="text-3xl font-instrument text-defaultWhite pb-4">
                  {data.title}
                </p>
                {data.description.map((desc) => (
                  <span key={desc} className="text-md block">
                    {desc}
                  </span>
                ))}
                {data?.list && (
                  <ul className="list-disc pl-6 marker:text-primaryDisabled marker:text-sm font-medium">
                    {data.list.map((listData, index) => (
                      <li key={index}>
                        {'boldText' in listData && (
                          <span className="font-bold">
                            {listData.boldText}{' '}
                          </span>
                        )}

                        <span>{listData?.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
    </div>
  )
}

export default PrivacyPolicyPage
