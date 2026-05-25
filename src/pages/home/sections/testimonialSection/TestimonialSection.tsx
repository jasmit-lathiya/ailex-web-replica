import { useState } from 'react'
import { motion } from 'framer-motion'

// Icons
import fiveStar from '../../../../assets/icons/fiveStar.svg'

// Images
import davidCarterImg from '../../../../assets/images/founderImg.jpeg'
import davidMillerImg from '../../../../assets/images/davidMiller.jpeg'
import emilyCharterImg from '../../../../assets/images/emilyCharter.jpeg'
import jamesRobinsonImg from '../../../../assets/images/jamesRobinson.jpeg'
import michaelThompsonImg from '../../../../assets/images/michaelThompson.jpeg'
import rachelLeeImg from '../../../../assets/images/rachelLee.jpeg'
import testimonialSectionBg from '../../../../assets/testimonialSection/testimonialSectionBg.jpeg'

const testimonialData = [
  {
    name: 'David Carter',
    designation: 'Founder of AI Solutions',
    img: davidCarterImg,
    desciption:
      "This AI automation tool has transformed our workflow! We've saved countless hours and improved efficiency across all departments.",
  },
  {
    name: 'Emily Carter',
    designation: 'CTO at TexNova',
    img: emilyCharterImg,
    desciption:
      'Since implementing this AI-powered platform, our workflow has become more efficient than ever. The automation features have drastically reduced manual tasks, allowing our team to focus on strategic initiatives.',
  },
  {
    name: 'James Robinson',
    designation: 'Head of Analytics at DatexSphere',
    img: jamesRobinsonImg,
    desciption:
      'One of our biggest challenges was integrating AI with our existing infrastructure. This platform made it incredibly easy, with minimal downtime and a smooth transition.',
  },
  {
    name: 'Michael Thompson',
    designation: 'CEO at InetWorks',
    img: michaelThompsonImg,
    desciption:
      'We needed an AI tool that could help us make better data-driven decisions, and this platform exceeded our expectations. The predictive analytics feature allows us to anticipate market trends, improve customer engagement, and optimize our business strategies. ',
  },
  {
    name: 'Rachel Lee',
    designation: 'Product Manager at RinnovateAI',
    img: rachelLeeImg,
    desciption:
      "Before using this AI SaaS platform, our team struggled with inefficiencies and data inconsistencies. Since integrating this tool, we've seen a remarkable 40% improvement in task completion times and a significant reduction in errors.",
  },
  {
    name: 'David Miller',
    designation: 'Founder at SketchTech',
    img: davidMillerImg,
    desciption:
      'As our company expanded, we needed an AI solution that could grow with us. This platform offers exactly that—scalability, reliability, and seamless performance. Whether handling small datasets or large-scale enterprise operations, it delivers consistent results.',
  },
]

const TestimonialSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <section className="relative h-full w-full overflow-hidden font-switzer text-primaryDisabled p-16 flex justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
        style={{
          backgroundImage: `url(${testimonialSectionBg})`,
        }}
      />
      <motion.div
        className="flex flex-col justify-center items-center gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span className="font-instrument text-5xl text-center">
          What our customers love about us
        </span>
        <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
          {testimonialData.map((testinomial, index) => (
            <img
              key={testinomial.name}
              src={testinomial.img}
              alt={testinomial.name}
              className={`w-10 h-10 rounded-full border-2 cursor-pointer transition-transform duration-300 ${selectedIndex === index ? 'border-defaultBlue scale-150' : 'border-defaultGrey grayscale scale-90'}`}
              onClick={() => {
                setSelectedIndex(index)
              }}
            />
          ))}
        </div>

        <div>
          {testimonialData.map((testinomial, index) => (
            <div
              key={testinomial.name}
              className={`w-full flex flex-col justify-center items-center bg-defaultBlack p-8 rounded-xl border border-defaultGrey gap-8  ${index === selectedIndex ? 'block' : 'hidden'}`}
            >
              <img
                src={fiveStar}
                alt="5 star rating"
                className="h-6 object-contain"
              />

              <span className="font-medium text-primaryDisabled text-2xl max-w-2xl text-center">
                {testinomial.desciption}
              </span>

              <div className="flex flex-row items-center justify-center gap-2">
                <span className="text-lg block text-defaultWhite">
                  {testinomial.name},
                </span>
                <span className="text-md block text-primaryDisabled">
                  {testinomial.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialSection
