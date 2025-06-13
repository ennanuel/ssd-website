import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { MdLocalPhone, MdMailOutline } from "react-icons/md";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import HeroBadges from "./HeroBadges";


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
        <footer className="bg-dark-blue text-white min-h-[calc(100vh_-_var(--header-large-height))] flex flex-col justify-end">
            <div className="px-4 xs:px-6 md:px-10">
                <div className="mx-auto max-w-[var(--max-width)] pt-20 flex flex-col justify-end">
                    <div className="flex flex-col lg:flex-row justify-between gap-20">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2">
                                    <Image src="/icons/logo-alt.png" width={64} height={64} className="w-10 h-auto" alt="Company logo" />
                                    <div className="flex flex-col">
                                        <h3 className="uppercase font-light tracking-tight text-sm">Safe Security Dynamics</h3>
                                        <p className="font-light capitalize text-xs">Safety first</p>
                                    </div>
                                </div>
                                <p className="mt-6 font-light text-sm leading-[1.5rem] max-w-[40ch]">OpenALPR is a solution suite built by Rekor Systems, Inc. that specializes in license plate and vehicle recognition technology.</p>
                            </div>
                            <HeroBadges iconSize={32} />
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
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6">
                            {
                                NAV_LINKS.map(({ title, links }) => (
                                    <li key={title} className="flex flex-col gap-4 sm:gap-6">
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
                </div>
            </div>
            <div className="mt-20 md:mt-40 px-4 xs:px-6 md:px-10 border-t border-white/20">
                <div className="mx-auto max-w-[var(--max-width)] flex flex-col md:flex-row justify-between md:items-center gap-6 py-6">
                    <p className="text-sm font-light">© Safe Security Dynamics, {(new Date()).getFullYear()}. All rights reserved.</p>
                    <div className="flex flex-wrap xs:items-center gap-6 xs:gap-1">
                        <a href="#" className="text-sm">Terms of use</a>
                        <BsDot size={24} className="hidden xs:block" />
                        <a href="#" className="text-sm">Privacy policy</a>
                        <BsDot size={24} className="hidden xs:block" />
                        <a href="#" className="text-sm">Cookie policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}