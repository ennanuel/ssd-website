
import Image from "next/image";

import { GrSecure } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import HeroAppDemo from "../HeroAppDemo";



const SLIDES = [
    {
      title: "Automatic license plate recognition made easy",
      description: "Deploy license plate and vehicle recognition with Rekor’s OpenALPR suite of solutions designed.",
    },
    {
      title: "Enhance Safety with Real-time Data",
      description: "Safe Security Dynamics delivers AI-powered license plate recognition, providing real-time data to enhance safety.",
    },
    {
      title: "AI-Powered Solutions for Modern Security",
      description: "Leverage cutting-edge technology to detect and monitor vehicles efficiently with our innovative systems.",
    }
];

export default function Hero() {


    return (
        <section className="bg-dark-blue text-white overflow-hidden min-h-dvh px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col-reverse lg:flex-row gap-10 pt-20 pb-10 lg:pt-10">
                <div className="flex-2 flex flex-col justify-end pb-10 gap-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl leading-[3.24rem] md:text-5xl md:leading-[4rem] max-w-[40ch]">{SLIDES[0].title}</h2>
                        <p className="text-lg leading-[2rem] max-w-[64ch]">{SLIDES[0].description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center h-14 rounded-md bg-blue-500 text-white hover:bg-blue-600 px-8">
                            <span className="text-sm whitespace-nowrap">Get a demo</span>
                        </button>
                        <button className="flex items-center justify-center h-14 rounded-md bg-white text-blue-900 hover:bg-blue-100 px-8">
                            <span className="text-sm whitespace-nowrap">Book free 30 mins. call</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                            <span className="flex items-center justify-center w-[36px] aspect-square bg-blue-500 text-white">
                                <GrSecure size={22} />
                            </span>
                            <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                <span className="font-bold tracking-tight">ALPR</span>
                                <br />
                                <span>Tested</span>
                            </p>
                        </span>
                        <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                            <Image width={40} height={40} src="/icons/ng-flag.png" alt="Nigeria flag" className="block w-[36px] aspect-square" />
                            <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                <span className="font-bold tracking-tight">Made in</span>
                                <br />
                                <span>Nigeria</span>
                            </p>
                        </span>
                        <span className="flex items-center bg-white text-gray-900 rounded-lg overflow-hidden">
                            <span className="flex items-center justify-center w-[36px] aspect-square bg-blue-500 text-white">
                                <IoShieldCheckmark size={22} />
                            </span>
                            <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                                <span className="font-bold tracking-tight">IT</span>
                                <br />
                                <span>Security</span>
                            </p>
                        </span>
                    </div>
                </div>
                <div className="flex items-end flex-3 pb-6">
                    <HeroAppDemo />
                </div>
            </div>
        </section>
    )
}