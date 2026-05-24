import { useLocation, useNavigate } from 'react-router-dom'

interface FooterLink {
  label: string
  link: string
}

interface FooterLinksProps {
  heading: string
  linkArray: FooterLink[]
}

const FooterLinks = ({ heading, linkArray }: FooterLinksProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="flex flex-col gap-4 min-w-max">
      <span className="text-defaultWhite text-2xl whitespace-nowrap">
        {heading}
      </span>
      {linkArray.map((linkData) => (
        <span
          key={linkData.label}
          className={`cursor-pointer whitespace-nowrap text-xl ${location.pathname === linkData.link ? 'text-defaultWhite' : 'text-primaryDisabled'}`}
          onClick={() => navigate(linkData.link)}
        >
          {linkData.label}
        </span>
      ))}
    </div>
  )
}

export default FooterLinks
