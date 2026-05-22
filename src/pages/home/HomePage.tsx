import HeroSection from './organisms/heroSection'
import FeatureSection from './organisms/featureSection'
import ClientLogoSection from './organisms/clientLogoSection'
import AiShowcaseSection from './organisms/aiShowcaseSection'
import WorkflowSection from './organisms/workflowSection'
import IntegrationSection from './organisms/integrationSection'
import PricingPreviewSection from './organisms/pricingPreviewSection'
import TestimonialSection from './organisms/testimonialSection'
import CTASection from './organisms/ctaSection'
import FooterSection from './organisms/footerSection'
import LatestInsightSection from './organisms/latestInsightSection'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <HeroSection />
      <ClientLogoSection />
      <FeatureSection />
      <AiShowcaseSection />
      <WorkflowSection />
      <IntegrationSection />
      <PricingPreviewSection />
      <TestimonialSection />
      <LatestInsightSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}

export default HomePage
