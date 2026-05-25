import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Components
import { PrimaryButton } from '../../atoms/button'
import Resource from './Resource'

// Icons
import { ChevronDown } from 'lucide-react'

// Images
import ailexLogo from '../../assets/icons/ailexLogoWithName.svg'

// Style Constants
import { defaultWhite, primaryDisabled } from '../../constants/palette'

const navLinks = [
  { name: 'Home', href: '/', mobileOrder: 1 },
  { name: 'Pricing', href: '/pricing', mobileOrder: 2 },
  { name: 'Resource', href: '/resource', mobileOrder: 4, isDropDown: true },
  { name: 'Blog', href: '/blog', mobileOrder: 3 },
]

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isResourceVisible, setIsResourceVisible] = useState(false)

  return (
    <nav className="w-full fixed md:absolute md:top-6 left-0 z-50">
      <div className="absolute md:hidden top-0 right-0 w-full h-full backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] z-[-10]" />
      <div className="max-w-7xl mx-auto px-7 lg:px-10">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={ailexLogo}
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* CENTER - DESKTOP NAV */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-6">
            {navLinks.map((link) =>
              link.isDropDown ? (
                <div
                  key={link.name}
                  className="relative w-fit"
                  onMouseEnter={() => setIsResourceVisible(true)}
                  onMouseLeave={() => setIsResourceVisible(false)}
                >
                  {/* TRIGGER */}
                  <motion.div className="flex items-center gap-1 cursor-pointer">
                    <motion.span
                      className={`${isResourceVisible ? 'text-defaultWhite' : 'text-primaryDisabled'}`}
                    >
                      {link.name}
                    </motion.span>

                    <motion.div
                      animate={{
                        rotate: isResourceVisible ? -180 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.44, 0, 0.56, 1],
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                  {/* DROPDOWN */}
                  {isResourceVisible && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <Resource />
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.href} key={link.name}>
                  <motion.span
                    initial={false}
                    animate={{
                      color:
                        location.pathname === link.href
                          ? defaultWhite
                          : primaryDisabled,
                    }}
                    whileHover={{
                      color: defaultWhite,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.44, 0, 0.56, 1],
                    }}
                    className="relative font-switzer font-medium"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ),
            )}
          </div>

          {/* RIGHT - DESKTOP BUTTON */}
          <div className="hidden md:flex items-center">
            <PrimaryButton
              className="text-sm"
              onClick={() => navigate('/contact-us')}
            >
              Try free
            </PrimaryButton>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 p-4 flex flex-col items-center justify-center md:hidden border border-primaryDisabled/10 rounded-lg"
          >
            {/* TOP LINE */}
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -4,
              }}
              transition={{
                duration: 0.3,
                ease: [0.44, 0, 0.56, 1],
              }}
              className="absolute w-6 h-[2px] bg-primaryDisabled rounded-full"
            />

            {/* BOTTOM LINE */}
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 4,
              }}
              transition={{
                duration: 0.3,
                ease: [0.44, 0, 0.56, 1],
              }}
              className="absolute w-6 h-[2px] bg-primaryDisabled rounded-full"
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`flex flex-col justify-center md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-3 mx-2 bg-black/95 backdrop-blur-xl border border-primaryDisabled/10 rounded-xl flex flex-col gap-2">
          {[...navLinks]
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((link) =>
              link.isDropDown ? (
                <div key={link.name} className="flex flex-col gap-4">
                  <div
                    className="flex flex-row justify-between cursor-pointer"
                    onClick={() => setIsResourceVisible(!isResourceVisible)}
                  >
                    <span
                      className={`text-sm font-switzer font-medium ${isResourceVisible ? 'text-defaultWhite' : 'text-primaryDisabled'}`}
                    >
                      {link.name}
                    </span>
                    <motion.div
                      animate={{
                        rotate: isResourceVisible ? -180 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.44, 0, 0.56, 1],
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>{' '}
                  {isResourceVisible && <Resource />}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      color:
                        location.pathname === link.href
                          ? defaultWhite
                          : primaryDisabled,
                    }}
                    whileHover={{
                      color: defaultWhite,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.44, 0, 0.56, 1],
                    }}
                    className="relative text-sm font-switzer font-medium"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ),
            )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
