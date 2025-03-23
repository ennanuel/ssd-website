
import Hero from "./_components/home-page/Hero";
import Sponsors from "./_components/home-page/Sponsors";
import Definition from "./_components/home-page/Definition";
import WhatWeOffer from "./_components/home-page/WhatWeOffer";
import Industries from "./_components/home-page/HomeIndustries";
import Pricing from "./_components/home-page/HomePricing";
import HowItWorks from "./_components/home-page/HowItWorks";
import Testimonials from "./_components/home-page/Testimonials";
import Faq from "./_components/home-page/HomeFaq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Definition />
      <WhatWeOffer />
      <Industries />
      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Faq />
    </div>
  );
}
