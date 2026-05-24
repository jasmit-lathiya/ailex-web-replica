// Components
import HeroSection from './sections/heroSection'
import FeatureSection from './sections/featureSection'
import ClientLogoSection from './sections/clientLogoSection'
import AiShowcaseSection from './sections/aiShowcaseSection'
import WorkflowSection from './sections/workflowSection'
import IntegrationSection from './sections/integrationSection'
import PricingPreviewSection from './sections/pricingPreviewSection'
import TestimonialSection from './sections/testimonialSection'
import LatestInsightSection from './sections/latestInsightSection'
import AdvantageSection from './sections/advantageSection'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <HeroSection />
      <ClientLogoSection />
      <FeatureSection />
      <AiShowcaseSection />
      <WorkflowSection />
      <IntegrationSection />
      <AdvantageSection />
      <PricingPreviewSection />
      <TestimonialSection />
      <LatestInsightSection />
    </div>
  )
}

export default HomePage
