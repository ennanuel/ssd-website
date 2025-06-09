import Link from "next/link";
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
        href: "/real-estate",
        Icon: TbBuildingEstate
    },
    {
        title: "School system",
        desc: "Detail on securing school system",
        href: "/schools",
        Icon: TbSchool
    },
    {
        title: "Security sector",
        desc: "Detail on securing security sector",
        href: "/security-sector",
        Icon: RiPoliceBadgeLine
    },
    {
        title: "Government agencies",
        desc: "Detail on securing government agencies",
        href: "/government-agencies",
        Icon: LuGavel
    },
    {
        title: "Banking system",
        desc: "Detail on securing banking system",
        href: "/banking",
        Icon: PiVaultBold
    },
    {
        title: "Organization",
        desc: "Detail on securing organization",
        href: "/organizations",
        Icon: VscOrganization
    },
]


export default function Industries() {


    return (
        <section className="min-h-[calc(100vh_-_var(--header-large-height))] px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] flex flex-col md:flex-row gap-20 pt-40 pb-20">
                <div className="flex flex-col">
                    <h3 className="text-blue-800 text-sm uppercase font-semibold">Engineered for all</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 max-w-[28ch]">Industries / Use cases</h2>
                    <p className="text-gray-800 mt-6 max-w-[48ch] leading-[2rem] text-lg">Discover how Safe Security Dynamics adapts to diverse environments—from law enforcement to gated communities—enhancing vehicle tracking, access control, and threat detection across multiple industries.</p>
                    <a href="#" className="text-blue-600 flex items-center gap-4 mt-12">
                        <span className="font-semibold">Learn more about our use cases</span>
                        <FaArrowRight size={14} />
                    </a>
                </div>
                <div className="flex-1 gap-4">
                    <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(3,_auto)] gap-4">
                        {
                            INDUSTRIES.map(({ title, href, Icon }) => (
                                <li key={title} className="flex-1 min-w-32">
                                    <Link href={`/industries${href}`} className="h-full flex flex-col justify-between gap-6 border border-gray-100 hover:border-blue-100/5 bg-white hover:bg-blue-100 p-6 pb-4 sm:p-4 lg:p-6 sm:pb-2 lg:pb-4 rounded-xl lg:rounded-3xl">
                                        <Icon size={32} className="text-blue-800" />
                                        <div className="flex flex-col gap-2">
                                            <h3 className="font-semibold text-base text-gray-600">{title}</h3>
                                            <p className="text-xs text-gray-900/50">Learn more</p>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}