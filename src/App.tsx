import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import PricingPage from './pages/pricing'
import BlogPage from './pages/blog'
import Navbar from './organisms/navbar/Navbar'
import FooterSection from './pages/home/sections/footerSection'
import Page404 from './pages/page404'
import LicencePage from './pages/licence'
import PrivacyPolicyPage from './pages/privacyPolicy'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/licenses" element={<LicencePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  )
}

export default AppRouter
