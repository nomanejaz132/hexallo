import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedSections from "@/components/featured-sections";
import ExclusivesSection from "@/components/exclusives-section";
import ForYouSection from "@/components/for-you-section";
import BuzzingDestinationsSection from "@/components/buzzing-destinations-section";
import DealsSection from "@/components/deals-section";
import HiddenGemsSection from "@/components/hidden-gems-section";
import ExploreGhanaSection from "@/components/explore-ghana-section";
import GlobalHighlightsSection from "@/components/global-highlights-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedSections />
      <ExclusivesSection />
      <ForYouSection />
      <BuzzingDestinationsSection />
      <DealsSection />
      <HiddenGemsSection />
      <ExploreGhanaSection />
      <GlobalHighlightsSection />
      <Footer />
    </main>
  );
}
