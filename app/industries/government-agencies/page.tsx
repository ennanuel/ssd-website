import Demo from "@/app/_components/contact-page/Demo";
import Testimonials from "@/app/_components/home-page/Testimonials";
import Advantages from "@/app/_components/industries/gov/Advantages";
import Hero from "@/app/_components/industries/gov/Hero";
import ProblemsAndSolutions from "@/app/_components/industries/gov/ProblemsAndSolutions";


export default function GovernmentAgenciesIndustry() {

    return (
        <div>
            <Hero />
            <Advantages/>
            <ProblemsAndSolutions />
            <Testimonials />
            <Demo />
        </div>
    )
}