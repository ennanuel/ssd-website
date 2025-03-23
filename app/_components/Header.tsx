import Image from "next/image";
import Link from "next/link";
import { GrGlobe } from "react-icons/gr";

const NAV_LINKS = [
    {
        title: "Industries",
        href: "/industries"
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
        title: "Support",
        href: "/support"
    }
]

export default function Header() {


    return (
        <header className="sticky top-0 z-10 h-[var(--header-large-height)] font-inter border-b border-gray-200/20 bg-dark-blue">
            <div className="mx-auto h-full flex justify-between items-center max-w-[var(--max-width)]">
                <a href="/" className="flex items-center gap-2">
                    <Image src={"/icons/logo.svg"} width={64} height={64} alt="Company logo" className="w-10 aspect-square" />
                    <span className="flex flex-col">
                        <h3 className="font-light text-white uppercase text-sm tracking-tight">Safe Security Dynamics</h3>
                        <p className="font-light text-xs text-white">Safety First</p>
                    </span>
                </a>
                <div className="flex gap-10 items-center">
                    <nav className="">
                        <ul className="flex items-center gap-4">
                            {
                                NAV_LINKS.map(({ title, href }, index) => (
                                    <li key={index}>
                                        <Link href={href} className="px-4 flex items-center justify-center">
                                            <span className="text-white hover:text-blue-400 text-sm">{title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="flex gap-4 items-center">
                        <button className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 px-8 h-12 rounded-md">
                            <span className="text-sm">Contact</span>
                        </button>
                        <button className="h-12 text-white rounded-full hover:text-blue-400 flex items-center justify-center gap-2">
                            <GrGlobe size={20} />
                            <span className="text-sm">EN</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}