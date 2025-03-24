import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { GrSecure } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";


const NAV_LINKS = [
    {
        title: "Company",
        links: [
            {
                title: "About SSD",
                href: "#"
            },
            {
                title: "Careers",
                href: "#"
            },
            {
                title: "Contact us",
                href: "#"
            },
            {
                title: "FAQs",
                href: "#"
            },
        ]
    },
    {
        title: "Product",
        links: [
            {
                title: "License plate recognition",
                href: "#"
            },
            {
                title: "Recogntion systems",
                href: "#"
            },
            {
                title: "YOLOv8 Technology",
                href: "#"
            },
            {
                title: "Data Analysis",
                href: "#"
            },
        ]
    },
    {
        title: "Industries",
        links: [
            {
                title: "Schools",
                href: "#"
            },
            {
                title: "Financial institutions",
                href: "#"
            },
            {
                title: "Real estate",
                href: "#"
            },
            {
                title: "Government agencies",
                href: "#"
            },
            {
                title: "Organizations",
                href: "#"
            },
        ]
    },
]

export default function Footer() {

    return (
        <footer className="bg-dark-blue text-white px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100vh_-_var(--header-large-height))] pt-20 flex flex-col gap-40 justify-end">
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <Image src="/icons/logo-alt.png" width={64} height={64} className="w-10 h-auto" alt="Company logo" />
                            <div className="flex flex-col">
                                <h3 className="uppercase font-light tracking-tight text-sm">Safe Security Dynamics</h3>
                                <p className="font-light capitalize text-xs">Safety first</p>
                            </div>
                        </div>
                        <p className="mt-6 font-light text-sm leading-[1.5rem] max-w-[40ch]">OpenALPR is a solution suite built by Rekor Systems, Inc. that specializes in license plate and vehicle recognition technology.</p>
                        <div className="mt-10 flex items-center gap-4">
                            <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                                <span className="flex items-center justify-center w-8 aspect-square bg-blue-500 text-white">
                                    <GrSecure size={22} />
                                </span>
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">ALPR</span>
                                    <br />
                                    <span>Tested</span>
                                </p>
                            </span>
                            <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                                <Image width={40} height={40} src="/icons/ng-flag.png" alt="Nigeria flag" className="block w-8 aspect-square" />
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">Made in</span>
                                    <br />
                                    <span>Nigeria</span>
                                </p>
                            </span>
                            <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                                <span className="flex items-center justify-center w-8 aspect-square bg-blue-500 text-white">
                                    <IoShieldCheckmark size={22} />
                                </span>
                                <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                    <span className="font-bold tracking-tight">IT</span>
                                    <br />
                                    <span>Security</span>
                                </p>
                            </span>
                        </div>
                        <ul className="mt-10 flex flex-wrap gap-6">
                            {
                                [SiX, SiLinkedin, SiInstagram, SiFacebook].map((Icon, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex items-center justify-center">
                                            <Icon size={20} />
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <ul className="grid grid-cols-4 gap-6">
                        {
                            NAV_LINKS.map(({ title, links }) => (
                                <li key={title} className="flex flex-col gap-6">
                                    <h4 className="uppercase text-base font-light">{title}</h4>
                                    <ul className="flex flex-col gap-4">
                                        {
                                            links.map(({ title, href }) => (
                                                <li key={title}>
                                                    <a href={href} className="text-sm">{title}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                        <li className="flex flex-col gap-6">
                            <h4 className="uppercase text-base font-light">Contact</h4>
                            <ul className="flex flex-col gap-4">
                                {
                                    [
                                        { Icon: MdMailOutline, text: "hello@ssd-live.com", href: "#" },
                                        { Icon: MdLocalPhone, text: "+(234)-812 345 678 901", href: "#" },
                                    ].map(({ text, href, Icon }) => (
                                        <li key={text}>
                                            <a href={href} className="flex items-center gap-3">
                                                <Icon size={18} />
                                                <span className="text-sm">{text}</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="border-t border-white/20 flex justify-between items-center gap-6 py-6">
                    <p className="text-sm font-light">© Safe Security Dynamics, {(new Date()).getFullYear()}. All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        <a href="#" className="text-sm">Terms of use</a>
                        <BsDot size={24} />
                        <a href="#" className="text-sm">Privacy policy</a>
                        <BsDot size={24} />
                        <a href="#" className="text-sm">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}