import BulletPoints from "../_components/about-page/BulletPoints";
import Hero from "../_components/about-page/Hero";
import WhoWeAre from "../_components/about-page/WhoWeAre";
import Values from "../_components/about-page/Values";
import Vision from "../_components/about-page/Vision";
import Staff from "../_components/about-page/Staff";
import Contact from "../_components/about-page/Contact";



export default function About() {

    return (
        <div>
            <Hero />
            <BulletPoints />
            <WhoWeAre />
            <Values />
            <Vision />
            <Staff />
            <Contact />
        </div>
    )
}