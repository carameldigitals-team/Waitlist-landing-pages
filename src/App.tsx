import { TopNavbar } from './components/TopNavbar';
import { Hero } from './components/Hero';
import { CostOfWaiting } from './components/CostOfWaiting';
import { FoundingPricing } from './components/FoundingPricing';
import { ProfileScale } from './components/ProfileScale';
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5EEE1] text-[#2A1810] pb-20 md:pb-0 font-['Montserrat',sans-serif] selection:bg-[#D4A828] selection:text-[#2A1810]">
      {/* 0. Top Brand Navigation Bar with Logo & Live Cohort Badge */}
      <TopNavbar />

      {/* 1. Hero Section with Animated 3D Gold Logo Centerpiece, Headline & WhatsApp Join */}
      <Hero statusBadge="Cohort 01 Open • First 50 Entries Lock Founding Rates" />

      {/* 2. Cost of Waiting Section */}
      <CostOfWaiting />

      {/* 3. Founding Member Pricing Section with 50 Spots Cap */}
      <FoundingPricing totalSpots={50} />

      {/* 4. Profile Scale Section with Interactive 4-Stops Progression */}
      <ProfileScale />

      {/* 5. Countdown Strip to Launch */}
      <CountdownTimer />

      {/* 6. Footer with Pacifico Brand Tagline */}
      <Footer />

      {/* 7. Mobile Sticky Bottom CTA */}
      <StickyCTA />
    </div>
  );
}
