"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiPlay } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { MdAdd } from "react-icons/md";

const RESEARCH_LINK = [
    {
        title: "General",
        link: "/",
        subLinks: [
            { title: "How to get started", href: '/getting-started' },
            { title: "Articles and guides", href: '/articles-and-guides' }
        ]
    },
    {
        title: "Onboarding",
        link: "/onboarding",
        subLinks: []
    },
    {
        title: "Software features",
        link: "/software-feature",
        subLinks: []
    },
    {
        title: "Hardware Compability",
        link: "/hardware-compatibility",
        subLinks: []
    },
    {
        title: "Industries",
        link: "/industries",
        subLinks: []
    },
    {
        title: "Packages",
        link: "/packages",
        subLinks: []
    },
    {
        title: "FAQs",
        link: "/faqs",
        subLinks: []
    },
];

export default function Research() {
    const [expandIndex, setExpandIndex] = useState<number|null>(null);

    return (
        <div>
            <section className="bg-dark-blue text-white px-4 xs:px-6 md:px-10">
                <div className="mx-auto max-w-[var(--max-width)] pt-30 pb-20">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="mt-4 text-4xl leading-[3.6rem] max-w-[32ch] text-center">Resources center</h2>
                        <p className="mt-8 text-base leading-[1.8rem] max-w-[56ch] text-center">Explore our Resource Center for the latest insights, guides, and tools to help you maximize the benefits of Safe Security Dynamics&apos; advanced vehicle recognition solutions.</p>
                    </div>
                </div>
            </section>
            <section className="px-4 xs:px-6 md:px-10">
                <div className="p-1 mx-auto -mt-7 w-full flex max-w-[800px] border border-gray-200 bg-white rounded-lg has-[input:focus]:border-blue-400">
                    <input type="text" placeholder="Search..." className="px-4 flex-1 focus:outline-none" />
                    <button className="px-0 xs:px-4 sm:px-6 rounded-md bg-blue-main text-white min-w-12 h-12 flex items-center justify-center gap-2">
                        <BiSearch size={18} />
                        <span className="hidden xs:inline-block text-sm">Search</span>
                    </button>
                </div>
            </section>
            <section className="min-h-screen text-gray-900 px-4 xs:px-6 md:px-10 pt-30 pb-30">
                <div className="mx-auto max-w-[var(--max-width)] flex flex-col md:flex-row gap-16">
                    <div className="hidden md:block w-full max-w-60">
                        <ul className="sticky top-[var(--header-height)] w-full flex flex-col gap-2">
                            {
                                RESEARCH_LINK.map(({ title, link, subLinks }, index) => (
                                    <li key={title} className="border border-gray-200 rounded-lg">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 pr-1">
                                                <Link href={`/resources${link}`} className="peer h-12 flex-1 flex items-center pl-4">
                                                    <span className="text-sm">{title}</span>
                                                </Link>
                                                <span className="pointer-events-none w-0 transition-opacity peer-hover:opacity-100 opacity-0">
                                                    <span className="w-10 aspect-square flex items-center justify-center">
                                                        <GoArrowRight size={14} />
                                                    </span>
                                                </span>
                                                <button onClick={() => setExpandIndex(index !== expandIndex ? index : null)} className={`${index === expandIndex ? '' : ''} relative peer-hover:opacity-0 w-10 aspect-square rounded-md hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center transition-opacity`}>
                                                    <MdAdd size={14} className={`${index === expandIndex ? 'rotate-135' : ''} transition-transform`} />
                                                </button>
                                            </div>
                                        </div>
                                        {
                                            index === expandIndex ?
                                                <ul className="flex flex-col">
                                                    {
                                                        subLinks.map((subLink) => (
                                                            <li key={subLink.title} className="border-t border-gray-100">
                                                                <Link href={subLink.href} className="h-10 flex items-center pl-8 pr-4">
                                                                    <span className="text-sm text-gray-800">{subLink.title}</span>
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul> :
                                                null
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="md:flex-1">
                        <div className="flex flex-col-reverse lg:flex-row flex-wrap gap-12">
                            <div className="flex-1 flex md:min-w-[280px] w-full aspect-video lg:min-w-[320px]">
                                <span className="w-full flex items-center justify-center bg-blue-100 rounded-[32px]">
                                    <span className="border-2 border-blue-400 border-dashed p-2 rounded-full">
                                        <span className="flex items-center justify-center w-16 aspect-square rounded-full bg-blue-300 text-white">
                                            <FiPlay size={20} />
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-4xl">How to get started</h2>
                                <p className="lg:max-w-[48ch] leading-[1.8rem] mt-6">ALPR stands for Automatic License Plate Recognition, a technology used to automatically read and identify vehicle license plates using optical character recognition (OCR).
                                Safe Security Dynamics&apos; LPR solutions leverage cutting-edge artificial intelligence and machine learning to far exceed traditional systems.</p>
                                <button className="mt-10 w-fit h-14 px-10 rounded-md bg-blue-500 text-white flex items-center justify-center">
                                    <span>Book a demo</span>
                                </button>
                            </div>
                        </div>

                        <div className="mt-20 flex flex-col">
                            <h2 className="text-4xl">Articles and guides</h2>
                            <ul className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {
                                    [
                                        {
                                            image: "/images/office1.jpg",
                                            title: "A Quick Guide on the Benchmark to have to install the App",
                                            description: "Installing an ALPR app requires careful consideration of hardware and software specifications, integration capabilities, and legal compliance. By following...",
                                            href: ""
                                        },
                                        {
                                            image: "/images/office2.jpg",
                                            title: "Understanding ALPR Technology and it’s Key Challenges and Solutions",
                                            description: "Installing an ALPR app requires careful consideration of hardware and software specifications, integration capabilities, and legal compliance. By following...",
                                            href: ""
                                        },
                                    ].map(({ title, description, image, href }) => (
                                        <li key={title}>
                                            <Link href={href} className="group flex flex-col gap-4 justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <div className="relative aspect-[1.5]">
                                                        <Image fill src={image} alt="Article image" className="object cover rounded-4xl" />
                                                    </div>
                                                    <h3 className="text-2xl text-gray-800 group-hover:underline">{title}</h3>
                                                    <p className="text-sm text-gray-500">{description}</p>
                                                </div>
                                                <span className="flex items-center justify-start gap-6 w-fit text-blue-600">
                                                    <span className="text-sm">Learn more</span>
                                                    <GoArrowRight className="group-hover:translate-x-4 transition-transform" size={16} />
                                                </span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mt-16 flex gap-6">
                            <Link href="/resources" className="w-full group flex justify-between items-center gap-6 border hover:border-blue-200 border-gray-200 rounded-md px-4 py-4">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400">Next</span>
                                    <span className="text-gray-600 group-hover:text-blue-600 text-lg">Onboarding</span>
                                </div>
                                <GoArrowRight size={20} className="text-gray-600 group-hover:text-blue-600" />
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-gray-600">Last updated 1 month ago</p>
                    </div>
                </div>
            </section>
        </div>
    )
}