import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import PricingPage from './pages/pricing'
import BlogPage from './pages/blog'
import Navbar from './organisms/navbar/Navbar'
import FooterSection from './pages/home/sections/footerSection'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  )
}

export default AppRouter
