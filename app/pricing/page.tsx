import Demo from "../_components/contact-page/Demo";
import Faq from "../_components/home-page/HomeFaq";
import Features from "../_components/pricing-page/Features";
import Hero from "../_components/pricing-page/Hero";
import Sponsors from "../_components/pricing-page/Sponsors";

export default function Pricing() {

    return (
        <div>
            <Hero />
            <Sponsors />
            <Features />
            <Demo />
            <Faq />
        </div>
    )
}