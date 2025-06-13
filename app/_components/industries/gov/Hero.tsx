
import Image from "next/image";
import { AiFillAlert } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa6";

import { GrSecure } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiSpeedometerFill } from "react-icons/pi";
import HeroAppDemo from "../../HeroDemo";
import HeroBadges from "../../HeroBadges";

const POINTS = [
    {
        title: "Planning",
        desc: "Accurate planning and forecasting requires information about passenger flows, people density and potential congestion points.",
        Icon: FaChartBar
    },
    {
        title: "Operation",
        desc: "Operational efficiency and customer satisfaction can be enhanced through insights into platform occupancy, queue length, and integrated workflows.",
        Icon: PiSpeedometerFill
    },
    {
        title: "Security",
        desc: "Security is a top concern for many passengers. Video Analytics can provide alerts to detect suspicious behavior, unattended items, or security-critical events.",
        Icon: AiFillAlert
    },
]

export default function Hero() {

    return (
        <section className="bg-dark-blue text-white overflow-hidden min-h-dvh px-4 xs:px-6 lg:px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col gap-4 lg:gap-20">
                <div className="flex flex-col-reverse lg:flex-row gap-10 py-10">
                    <div className="flex-2 flex flex-col justify-end gap-10 pt-12">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl leading-[3.24rem] md:text-5xl md:leading-[4rem] max-w-[40ch]">Government & Law enforcement agencies</h2>
                            <p className="text-base md:text-lg leading-[1.6rem] md:leading-[2rem] max-w-[64ch]">Use the full potential of the camera systems in your train stations. Isarsoft Perception video analysis adds value for planning, operation and security.</p>
                        </div>
                        <ul className="flex flex-col gap-4 sm:gap-6">
                            {
                                [
                                    "Accurate data for strategic planning",
                                    "Operational process optimization",
                                    "Data-based security management"
                                ].map((text) => (
                                    <li key={text} className="flex items-center gap-4">
                                        <BsFillCheckCircleFill className="text-blue-500" size={20} />
                                        <span className="text-sm md:text-base">{text}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="mt-4 flex items-center gap-4">
                            <button className="flex items-center justify-center h-12 sm:h-14 rounded-md bg-blue-500 text-white hover:bg-blue-600 px-8">
                                <span className="text-sm">Get a demo</span>
                            </button>
                        </div>
                        <HeroBadges />
                    </div>
                    <div className="flex-3 flex items-center pb-6">
                        <HeroAppDemo />
                    </div>
                </div>
                <div className="pb-12 md:pb-20">
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {
                            POINTS.map(({ title, desc, Icon }) => (
                                <li key={title} className="flex flex-col p-6 sm:p-8 border border-white/10 bg-white/5 rounded-xl gap-4">
                                    <div className="flex items-center justify-between gap-6">
                                        <h3 className="text-base md:text-xl text-blue-500 font-semibold">{title}</h3>
                                        <Icon size={24} />
                                    </div>
                                    <p className="text-xs md:text-sm font-light">{desc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}