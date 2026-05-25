// Components
import AnimatedText from '../../molecules/animatedText'
import ContactCard from './organisms/contactCard'
import ContactForm from './organisms/contactForm'

// Icons
import accessOurKnowledgeBaseIcon from '../../assets/icons/aiProcess.svg'
import discoverAilexTutorialsIcon from '../../assets/icons/smartIimageLabeling.svg'
import joinOurCommunityIcon from '../../assets/icons/aiDrivenAccuracy.svg'

// Images
import contactUsBg from '../../assets/images/galaxyBg.jpeg'

const contactCardData = [
  {
    iconSrc: accessOurKnowledgeBaseIcon,
    title: 'Access our knowledge base',
    description:
      'Access a vast reservoir of knowledge and expertise, conveniently.',
    linkLabel: 'Explore help center',
    link: 'https://www.framer.com/help/',
  },
  {
    iconSrc: discoverAilexTutorialsIcon,
    title: 'Discover Ailex tutorials',
    description:
      'Watch and learn from market experts how to utilize our product effectively.',
    linkLabel: 'Watch tutorials',
    link: 'https://www.framer.com/academy/',
  },
  {
    iconSrc: joinOurCommunityIcon,
    title: 'Join our community',
    description:
      'Collaborate, share insights, and cultivate relationships within our community network.',
    linkLabel: 'Visit Facebook group',
    link: 'https://www.facebook.com/framerjs/',
  },
]

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center justify-center gap-16">
        <div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
            style={{
              backgroundImage: `url(${contactUsBg})`,
            }}
          />
          <AnimatedText
            sentence="Contact us"
            className="font-instrument text-4xl md:text-6xl mt-48"
          />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-defaultBlack to-transparent z-[-1]" />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-16 h-full">
          {contactCardData.map((data, index) => (
            <ContactCard
              title={data.title}
              description={data.description}
              iconSrc={data.iconSrc}
              linkLabel={data.linkLabel}
              link={data.link}
              delay={index * 0.3}
            />
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactUsPage
