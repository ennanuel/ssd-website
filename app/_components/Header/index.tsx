"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { type IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa6";
import { GoOrganization } from "react-icons/go";
import { GrGlobe } from "react-icons/gr";
import { LuTrafficCone } from "react-icons/lu";
import { RiBankLine, RiGovernmentLine, RiHotelBedLine, RiPoliceBadgeLine } from "react-icons/ri";
import { TbBuildingWarehouse, TbParking, TbSchool } from "react-icons/tb";

const NAV_LINKS = [
    {
        title: "Industries",
        href: "/industries",
        subLinks: [
            { title: "Transportation", description: "Monitor and manage traffic flow", href: "/transportation", Icon: LuTrafficCone },
            { title: "Security sector", description: "Enhance surveillance with smart tracking", href: "/security-sector", Icon: RiPoliceBadgeLine },
            { title: "Government agencies", description: "Enforce regulations and track vehicles", href: "/government-agencies", Icon: RiGovernmentLine },
            { title: "Schools", description: "Secure campus vehicle access", href: "/schools", Icon: TbSchool },
            { title: "Real estate", description: "Control access in gated communities", href: "/real-estate", Icon: TbBuildingWarehouse },
            { title: "Hotel", description: "Manage guest and staff vehicles", href: "/hotels", Icon: RiHotelBedLine },
            { title: "Organizations", description: "Track internal and visitor vehicles", href: "/organizations", Icon: GoOrganization },
            { title: "Banking", description: "Strengthen perimeter and asset security", href: "/banking", Icon: RiBankLine },
            { title: "Parking", description: "Automate entry, exit, and billing", href: "/parking", Icon: TbParking }
        ]
    },
    {
        title: "Products",
        href: "/products"
    },
    {
        title: "Resources",
        href: "/resources"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Contact us",
        href: "/contact"
    }
]

export default function Header() {
    const [showMobileHeader, setShowMobileHeader] = useState(false);

    const toggleShowMobileHeader = () => setShowMobileHeader(!showMobileHeader);


    return (
        <header className="sticky top-0 z-10 max-h-[var(--header-large-height)] font-inter">
            <div className="bg-dark-blue text-white peer px-4 xs:px-6 sm:px-10 h-[var(--header-large-height)]">
                <div className="mx-auto h-full flex justify-between items-center max-w-[var(--max-width)]">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={"/icons/logo.svg"} width={64} height={64} alt="Company logo" className="w-10 aspect-square" />
                        <span className="flex flex-col">
                            <h3 className="hidden sm:block font-light text-white uppercase text-sm tracking-tight">Safe Security Dynamics</h3>
                            <h3 className="sm:hidden font-light text-white uppercase text-sm tracking-tight">SSD</h3>
                            <p className="font-light text-xs text-white">Safety First</p>
                        </span>
                    </Link>
                    <nav className="hidden lg:flex gap-10 items-center">
                        <div className="">
                            <ul className="flex items-center gap-4">
                                {
                                    NAV_LINKS.map(({ title, href, subLinks }, index) => (
                                        href !== "/contact" ?
                                            <li key={index}>
                                                {
                                                    Boolean(subLinks?.length) ?
                                                        <>
                                                        <button className="peer group px-4 flex items-center justify-center gap-4 text-white hover:text-white/80">
                                                            <span className=" text-sm">{title}</span>
                                                            <FaAngleDown size={12} />
                                                        </button>
                                                        <SubHeader links={subLinks} />
                                                        </> :
                                                        <Link href={href} className="group px-4 flex items-center justify-center gap-4 text-white hover:text-blue-400">
                                                            <span className=" text-sm">{title}</span>
                                                        </Link>
                                                }
                                            </li> :
                                            null
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link href='/contact' className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 px-8 h-12 rounded-md">
                                <span className="text-sm">Contact</span>
                            </Link>
                            <button className="h-12 text-white rounded-full hover:text-blue-400 flex items-center justify-center gap-2">
                                <GrGlobe size={20} />
                                <span className="text-sm">EN</span>
                            </button>
                        </div>
                    </nav>
                    <div className="flex lg:hidden gap-6 sm:gap-8">
                        <button className="h-12 text-white rounded-full hover:text-blue-400 flex items-center justify-center gap-2">
                            <GrGlobe size={20} />
                            <span className="text-sm">EN</span>
                        </button>
                        <button onClick={toggleShowMobileHeader} className={`${showMobileHeader ? 'rotate-45 delay-300' : ''} duration-30 menu-btn group w-fit sm:w-12 sm:aspect-square rounded-full hover:text-blue-400 flex items-center justify-center transition-transform`}>
                            <span className="flex flex-col w-8 gap-2">
                                <span className={`${showMobileHeader ? 'translate-y-2.5 delay-0' : 'delay-200'} block w-full h-0.5 bg-white transition-transform duration-300`} />
                                <span className={`${showMobileHeader ? 'rotate-90 delay-200' : ''} block w-full h-0.5 bg-white transition-transform duration-300`} />
                                <span className={`${showMobileHeader ? '-translate-y-2.5 delay-0' : 'delay-200'} block w-full h-0.5 bg-white transition-transform duration-300`} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className={`${showMobileHeader ? 'block lg:hidden' : 'hidden'} -mt-0.25 w-full max-h-[calc(100dvh_-_var(--header-large-height))] overflow-y-auto bg-dark-blue text-white shadow-xl shadow-black/5`}>
                <ul className="flex flex-col">
                    {
                        NAV_LINKS.map(({ title, href, subLinks }) => (
                            <li key={title} className="peer">
                                {
                                    Boolean(subLinks?.length) ?
                                        <>
                                        <button className="peer px-4 xs:px-6 sm:px-10 w-full block border-t border-gray-200/20">
                                            <span className="h-14 mx-auto max-w-[var(--max-width)] flex items-center justify-between gap-6">
                                                <span className="text-sm">{title}</span>
                                                <FaAngleDown size={12} />
                                            </span>
                                        </button>
                                        <SubHeader links={subLinks} />
                                        </> :
                                        <Link href={href} className="px-4 xs:px-6 sm:px-10 block border-t border-gray-200/20">
                                            <span className="h-14 mx-auto max-w-[var(--max-width)] flex items-center justify-between gap-6">
                                                <span className="text-sm">{title}</span>
                                            </span>
                                        </Link>
                                }
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <hr className="border-none outline-none min-h-0.25 h-0.25 w-full bg-gray-200/20" />
        </header>
    )
};

type SubLink = { title: string; description: string; href: string; Icon: IconType };

function SubHeader({ links }:  { links: SubLink[] | undefined }) {

    if(!links?.length) return;
    
    return (
        <div className="pt-0 lg:pt-12 lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 w-full max-w-[var(--max-width)] hidden peer-hover:block peer-focus:block hover:block">
            <div className="lg:animate-into-view origin-top w-full flex overflow-hidden lg:bg-gradient-to-br from-blue-main to-blue-600 rounded-lg lg:shadow-xl shadow-black/10">
                <ul className="p-4 sm:p-6 md:px-10 lg:p-6 flex-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {
                        links.map(({ title, description, href, Icon}) => (
                            <li key={title}>
                                <Link href={href} className="group flex items-center gap-4 lg:p-3 rounded-lg hover:bg-white/10">
                                    <span className="flex items-center justify-center w-12 aspect-square rounded-2xl bg-white/20">
                                        <Icon size={20} />
                                    </span>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-semibold">{title}</span>
                                        <span className="text-xs text-white/70">{description}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};