import Link from "next/link"
import { BiTrafficCone } from "react-icons/bi"
import { LuGavel } from "react-icons/lu"
import { MdOutlineHotel } from "react-icons/md"
import { PiVaultBold } from "react-icons/pi"
import { RiPoliceBadgeLine } from "react-icons/ri"
import { TbBuildingEstate, TbRoadSign, TbSchool } from "react-icons/tb"
import { VscOrganization } from "react-icons/vsc"
import Demo from "../_components/contact-page/Demo"


const INDUSTRIES = [
    {
        title: "Real estate sector",
        desc: "Provides secure, automated access for residents",
        href: "/real-estate",
        Icon: TbBuildingEstate
    },
    {
        title: "School system",
        desc: "Ensures safety with controlled vehile access",
        href: "/schools",
        Icon: TbSchool
    },
    {
        title: "Security sector",
        desc: "Enhance surveillance with real-time vehicle data",
        href: "/security-sector",
        Icon: RiPoliceBadgeLine
    },
    {
        title: "Government agencies",
        desc: "Strengthens security with precise vehicle identification",
        href: "/government-agencies",
        Icon: LuGavel
    },
    {
        title: "Banking system",
        desc: "Strengthens security with precise vehicle identification",
        href: "/banking",
        Icon: PiVaultBold
    },
    {
        title: "Hotels",
        desc: "Secure guest parking with real-time vehicle monitoring",
        href: "/hotels",
        Icon: MdOutlineHotel
    },
    {
        title: "Organizations",
        desc: "Streamline access and ensures secure parking",
        href: "/organizations",
        Icon: VscOrganization
    },
    {
        title: "Transport companies",
        desc: "Streamline fleet management real-time vehicle tracking",
        href: "/transportation",
        Icon: TbRoadSign
    },
    {
        title: "Parking management",
        desc: "Automated vehicle tracking for efficient operations",
        href: "/parking",
        Icon: BiTrafficCone
    },
]

export default function Industries() {

    return (
        <div className="bg-blue-300/10">
            <section className="bg-dark-blue text-white relative px-4 xs:px-6 lg:px-10">
                <div className="relative mx-auto max-w-[var(--max-width)] pt-30 pb-40">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-5xl leading-[2.8rem] md:leading-[3.8rem] max-w-[32ch] text-center">Industries we serve</h2>
                        <p className="mt-4 text-base md:text-lg leading-[1.8rem] max-w-[64ch] text-center">Safe Security Dynamics provides advanced, AI-driven license plate recognition solutions to a variety of industries, including law enforcement.</p>
                    </div>
                </div>
            </section>
            <section className="relative px-4 xs:px-6 lg:px-10">
                <div className="mx-auto max-w-[var(--max-width)] min-h-screen -mt-20 pb-20">
                    <ul className="mx-auto max-w-[var(--max-width)] min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            INDUSTRIES.map(({ title, desc, href, Icon }) => (
                                <li key={title}>
                                    <Link href={`/industries${href}`} className="h-full p-8 flex flex-col items-center justify-center rounded-2xl bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-100 hover:-translate-y-4">
                                        <span className="w-16 aspect-square flex items-center justify-center rounded-full bg-blue-400/20">
                                            <Icon size={32} className="text-blue-main" />
                                        </span>
                                        <h3 className="mt-10 text-xl font-semibold text-blue-main text-center">{title}</h3>
                                        <p className="mt-4 max-w-[32ch] text-sm text-gray-500 text-center">{desc}</p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <Demo isLight />
        </div>
    )
}