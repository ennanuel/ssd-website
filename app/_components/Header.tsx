"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";

const NAV_LINKS = [
    {
        title: "Industries",
        href: "/industries",
        subLinks: [
            { title: "Transportation", href: "/transportation" },
            { title: "Security sector", href: "/security-sector" },
            { title: "Government agencies", href: "/government-agencies" },
            { title: "Schools", href: "/schools" },
            { title: "Real estate", href: "/real-estate" },
            { title: "Hotel", href: "/hotels" },
            { title: "Organizations", href: "/organizations" },
            { title: "Banking", href: "/banking" },
            { title: "Parking", href: "/parking" }
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
                                                <Link href={href} className="group px-4 flex items-center justify-center gap-4 text-white hover:text-blue-400">
                                                    <span className=" text-sm">{title}</span>
                                                    { subLinks?.length ? <FaAngleDown size={12} /> : null }
                                                </Link>
                                                {
                                                    subLinks?.length ?
                                                        <div></div> :
                                                        null
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
            <nav className={`${showMobileHeader ? 'block lg:hidden' : 'hidden'} -mt-0.25 w-full bg-dark-blue text-white shadow-xl shadow-black/5`}>
                <ul className="flex flex-col">
                    {
                        NAV_LINKS.map(({ title, href, subLinks }) => (
                            <li key={title}>
                                <Link href={href} className="px-4 xs:px-6 sm:px-10 block border-t border-gray-200/20">
                                    <span className="h-14 mx-auto max-w-[var(--max-width)] flex items-center justify-between gap-6">
                                        <span className="text-sm">{title}</span>
                                        { subLinks?.length ? <FaAngleDown size={12} /> : null }
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <hr className="border-none outline-none min-h-0.25 h-0.25 w-full bg-gray-200/20" />
        </header>
    )
}