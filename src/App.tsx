import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import PricingPage from './pages/pricing'
import BlogPage, { BlogDetailPage } from './pages/blog'
import Navbar from './organisms/navbar/Navbar'
import FooterSection from './pages/home/sections/footerSection'
import Page404 from './pages/page404'
import LicencePage from './pages/licence'
import PrivacyPolicyPage from './pages/privacyPolicy'
import FeaturePage from './pages/feature'
import ContactUsPage from './pages/contactUs'
import AboutPage from './pages/about'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/licenses" element={<LicencePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  )
}

export default AppRouter
