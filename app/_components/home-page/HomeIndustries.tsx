import { FaArrowRight } from "react-icons/fa6";
import { LuGavel } from "react-icons/lu";
import { PiVaultBold } from "react-icons/pi";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { TbBuildingEstate, TbSchool } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";


const INDUSTRIES = [
    {
        title: "Real estate sector",
        desc: "Detail on securing real estate sector",
        Icon: TbBuildingEstate
    },
    {
        title: "School system",
        desc: "Detail on securing school system",
        Icon: TbSchool
    },
    {
        title: "Security sector",
        desc: "Detail on securing security sector",
        Icon: RiPoliceBadgeLine
    },
    {
        title: "Government agencies",
        desc: "Detail on securing government agencies",
        Icon: LuGavel
    },
    {
        title: "Banking system",
        desc: "Detail on securing banking system",
        Icon: PiVaultBold
    },
    {
        title: "Organization",
        desc: "Detail on securing organization",
        Icon: VscOrganization
    },
]


export default function Industries() {


    return (
        <section className="min-h-[calc(100vh_-_var(--header-large-height))] px-10">
            <div className="mx-auto max-w-[var(--max-width)] flex gap-20 pt-40 pb-20">
                <div className="flex flex-col">
                    <h3 className="text-blue-800 text-sm uppercase font-semibold">Engineered for all</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 max-w-[28ch]">Industries / Use cases</h2>
                    <p className="text-gray-800 mt-6 max-w-[48ch] leading-[2rem] text-lg">Our AI-driven technology offers real-time vehicle detection, capturing plate numbers, make, model, and direction of travel with exceptional accuracy.</p>
                    <a href="#" className="text-blue-600 flex items-center gap-4 mt-12">
                        <span className="font-semibold">Learn more about our use cases</span>
                        <FaArrowRight size={14} />
                    </a>
                </div>
                <div className="flex-1">
                    <ul className="grid grid-cols-3 grid-rows-2 gap-4">
                        {
                            INDUSTRIES.map(({ title, Icon }) => (
                                <li key={title} className="flex flex-col justify-center gap-2 border border-gray-100 bg-white p-6 pb-4 rounded-3xl">
                                    <Icon size={32} className="text-blue-800" />
                                    <h3 className="font-semibold text-base text-gray-600 mt-4">{title}</h3>
                                    <p className="text-xs text-gray-400">Learn more</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}