import { useNavigate } from 'react-router-dom'

// Icons
import {
  CirclePlay,
  LifeBuoy,
  Sparkles,
  Info,
  PenLine,
  CircleDollarSign,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

// Hooks
import useBreakpoint from '../../utils/useBreakPoint'

const resourceData = [
  {
    icon: CirclePlay,
    heading: 'Watch Demo',
    subHeading: 'See Ailex in action.',
    link: 'https://www.youtube.com/watch?v=acFuYzW7h1Q',
    isExternalLink: true,
  },
  {
    icon: LifeBuoy,
    heading: 'Support',
    subHeading: 'Get in touch with our team.',
    link: '/contact-us',
  },
  {
    icon: Sparkles,
    heading: 'Explore Features',
    subHeading: "Discover Ailex's capabilities.",
    link: '/feature',
  },
  {
    icon: Info,
    heading: 'About Us',
    subHeading: 'Who we are, what we do.',
    link: '/contact-us',
  },
  {
    icon: PenLine,
    heading: 'Blog',
    link: '/blog',
  },
  {
    icon: CircleDollarSign,
    heading: 'Pricing',
    link: '/pricing',
  },
  {
    icon: ShieldCheck,
    heading: 'Privacy Policy',
    link: '/privacy-policy',
  },
  {
    icon: ArrowUpRight,
    heading: 'Get Template',
    link: 'https://www.framer.com/marketplace/templates/ailex/',
    isExternalLink: true,
  },
]

const Resource = () => {
  const navigate = useNavigate()
  const { isSmallScreen } = useBreakpoint()
  const rowResourceData = isSmallScreen
    ? resourceData
    : resourceData.slice(0, 4)
  const gridResourceData = isSmallScreen ? [] : resourceData.slice(4)
  return (
    <div className="flex flex-row bg-defaultBlack/75 backdrop-blur-md border border-defaultGrey rounded-xl p-4 gap-32 min-w-max">
      <div className="flex flex-col min-w-max h-full gap-4 md:gap-8">
        {rowResourceData.map((resource) => {
          const Icon = resource.icon
          return (
            <div
              className="flex flex-row w-full items-center gap-4 cursor-pointer"
              onClick={() => {
                resource?.isExternalLink
                  ? window.open(resource.link, '_blank')
                  : navigate(resource.link)
              }}
            >
              <div className="flex items-center justify-center bg-primaryBg w-12 h-12 border border-defaultGrey rounded-md">
                <Icon className="w-8 h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm md:text-base">
                  {resource.heading}
                </span>
                {resource.subHeading && (
                  <span className="text-xs text-primaryDisabled">
                    {resource.subHeading}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-2 gap-6 p-2">
        {gridResourceData.map((resource) => {
          const Icon = resource.icon

          return (
            <div
              className="w-full h-full bg-primaryBg border border-defaultGrey rounded-xl flex flex-col justify-between p-4 cursor-pointer text-primaryDisabled"
              onClick={() => {
                resource?.isExternalLink
                  ? window.open(resource.link, '_blank')
                  : navigate(resource.link)
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{resource.heading}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Resource
