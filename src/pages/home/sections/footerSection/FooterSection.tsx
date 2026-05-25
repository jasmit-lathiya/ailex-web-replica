import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// Components
import footerSectionBg from '../../../../assets/images/footerBg.jpeg'
import CTASection from './organisms/ctaSection'
import FooterLinks from './organisms/footerLinks'

// Icons
import ailexLogoWithName from '../../../../assets/icons/ailexLogoWithName.svg'
import facebookIcon from '../../../../assets/icons/facebook.svg'
import xIcon from '../../../../assets/icons/twitter.svg'
import linkedInIcon from '../../../../assets/icons/linkedIn.svg'
import instagramIcon from '../../../../assets/icons/instagram.svg'

const socialMediaLink = [
  { icon: facebookIcon, name: 'Facebook', link: 'https://www.facebook.com/' },
  { icon: linkedInIcon, name: 'LinkedIn', link: 'https://www.linkedin.com/' },
  { icon: xIcon, name: 'X', link: 'https://x.com/' },
  {
    icon: instagramIcon,
    name: 'Instagram',
    link: 'https://www.instagram.com/',
  },
]

const mainPagesLink = [
  { label: 'Home', link: '/' },
  { label: 'Features', link: '/feature' },
  { label: 'Pricing', link: '/pricing' },
  { label: 'Contact Us', link: '/contact-us' },
]

const companyLink = [
  { label: 'About', link: '/about' },
  { label: 'Blog', link: '/blog' },
  { label: 'Privacy Policy', link: '/privacy-policy' },
]

const utilityPagesLink = [
  { label: '404', link: '/404' },
  { label: 'Licenses', link: '/licenses' },
]

const FooterSection = () => {
  const navigate = useNavigate()
  return (
    <section className="relative h-full w-full overflow-hidden flex flex-col justify-center items-center font-switzer font-medium text-primaryDisabled pt-48 gap-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-30"
        style={{
          backgroundImage: `url(${footerSectionBg})`,
        }}
      />
      <CTASection />
      <div className="w-full flex flex-col md:flex-row justify-between p-4 md:p-16 gap-8">
        {/* footer left section */}
        <motion.div
          className="flex justify-start md:justify-center gap-8 w-full "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col flex-wrap h-full min-h-[150px] max-h-[250px]">
            <div className="flex-1">
              <img
                src={ailexLogoWithName}
                alt="Ailex Logo"
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                  if (window.location.pathname !== '/') {
                    navigate('/')
                  }
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              {/* Social Media Links */}
              <div className="flex flex-row gap-4">
                {socialMediaLink.map((socialMedia) => (
                  <div
                    key={socialMedia.name}
                    className="bg-defaultWhite w-8 h-8 rounded-md flex items-center justify-center hover:bg-lighterBlue cursor-pointer"
                    onClick={() => {
                      window.open(socialMedia.link, '_blank')
                    }}
                  >
                    <img src={socialMedia.icon} alt={socialMedia.name} />
                  </div>
                ))}
              </div>

              <div className="text-sm mt-2">
                <span>
                  Designed by{' '}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() =>
                      window.open('https://www.webestica.com/', '_blank')
                    }
                  >
                    Webestica
                  </span>
                  , Powered by{' '}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() =>
                      window.open('https://www.framer.com/', '_blank')
                    }
                  >
                    Framer
                  </span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* footer right link section */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-24 justify-start md:justify-center w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FooterLinks heading="Main Pages" linkArray={mainPagesLink} />
          <FooterLinks heading="Company" linkArray={companyLink} />
          <FooterLinks heading="Utility Pages" linkArray={utilityPagesLink} />
        </motion.div>
      </div>
    </section>
  )
}

export default FooterSection
