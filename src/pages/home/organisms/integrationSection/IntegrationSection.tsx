import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import IntegrationDetail from './organisms/integrationDetail'
import integrationImg1 from '../../../../assets/integrationSection/intImg1.png'
import integrationImg2 from '../../../../assets/integrationSection/intImg2.svg'
import integrationImg3 from '../../../../assets/integrationSection/intImg3.svg'
import { PrimaryButton } from '../../../../atoms/button'

const integrationData = [
  {
    title: 'E-Commerce automation',
    description:
      'Automate product recommendations, sentiment analysis, and customer support to boost sales and engagement.',
  },
  {
    title: 'Financial data processing',
    description:
      'Our platform automates and secures financial transactions, ensuring accuracy and efficiency.',
  },
  {
    title: 'Healthcare data management',
    description:
      'We streamline the storage, security, and accessibility of medical records for better healthcare operations.',
  },
]

const IntegrationSection = () => {
  const navigate = useNavigate()
  return (
    <div className="md:h-[720px] flex flex-col md:flex-row gap-2 py-16 w-full max-w-6xl">
      <div className="md:flex-1 relative flex justify-center h-[600px] md:h-auto">
        <motion.img
          src={integrationImg1}
          alt=""
          // className="absolute w-60 -translate-x-32 rotate-[10deg] md:rotate-[18deg]"
          className="absolute w-60"
          initial={{ opacity: 0, y: 50, x: -150, rotate: '18deg' }}
          whileInView={{ opacity: 1, y: 0, x: -150, rotate: '18deg' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <motion.img
          src={integrationImg2}
          alt=""
          // className="absolute w-60 translate-x-28 md:translate-x-10 -rotate-[18deg]"
          className="absolute w-60 "
          initial={{ opacity: 0, y: 50, x: 60, rotate: '-18deg' }}
          whileInView={{ opacity: 1, y: 0, x: 60, rotate: '-18deg' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.img
          src={integrationImg3}
          alt=""
          // className="absolute w-60 translate-y-72 md:-translate-x-24 md:translate-y-40 md:rotate-[-24deg]"
          className="absolute w-60"
          initial={{ opacity: 0, y: 250, x: -30, rotate: '-24deg' }}
          whileInView={{ opacity: 1, y: 200, x: -30, rotate: '-24deg' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col gap-6 p-4"
      >
        <span className="text-5xl font-instrument">
          AI-Powered solutions for every industry
        </span>
        <div className="flex flex-col gap-4">
          {integrationData.map((item, index) => (
            <IntegrationDetail
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <PrimaryButton
          className="w-fit py-4"
          onClick={() => navigate('/contact-us')}
        >
          Get started now
        </PrimaryButton>
      </motion.div>
    </div>
  )
}

export default IntegrationSection
