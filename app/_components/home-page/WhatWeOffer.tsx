
import Image from "next/image";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";

type OfferComponentProps = {
    title: string;
    description: string;
    features: string[];
    index: number;
}

const OFFERS = [
    {
        title: "Make infrastructure tangible and measurable.",
        description: "Isarsoft Perception makes traffic and people flows quantifiable to support planners with data and analyses for infrastructure measures.",
        features: [
            "Optimize and analyze infrastructure",
             "Survey traffic and people flows in real time", 
             "Easy integration into existing video camera systems"
        ]
    },
    {
        title: "Real-time KPIs.",
        description: "Isarsoft Perception makes traffic and people flows quantifiable to support planners with data and analyses for infrastructure measures.",
        features: [
            "Optimize and analyze infrastructure",
             "Survey traffic and people flows in real time", 
             "Easy integration into existing video camera systems"
        ]
    },
    {
        title: "Support safety-critical decisions.",
        description: "Isarsoft Perception provides alarms to allow for adequate reactions to safety-critical events.",
        features: [
            "Optimize and analyze infrastructure",
             "Survey traffic and people flows in real time", 
             "Easy integration into existing video camera systems"
        ]
    }
]

function OfferComponent({ title, description, features, index }: OfferComponentProps) {
    const isEven = index % 2 === 0;

    return (
        <article className={`${isEven ? '' : 'bg-blue-300/10'} px-4 xs:px-6 sm:px-10 overflow-x-clip`}>
            <div className={`${isEven ? 'lg:flex-row flex-col-reverse' : 'flex-col-reverse lg:flex-row-reverse'} flex gap-20 mx-auto min-h-[calc(100vh_-_var(--header-large-height))] py-20 max-w-[var(--max-width)]`}>
                <div className="flex flex-col gap-4">
                    <h3 className="text-gray-800 text-3xl leading-[2.8rem] max-w-[28ch]">{title}</h3>
                    <p className="text-gray-700 leading-[1.8rem] max-w-[60ch]">{description}</p>
                    <ul className="flex flex-col gap-6 mt-6">
                        {
                            features.map((item) => (
                                <li key={item} className="flex items-center gap-4">
                                    <BsFillCheckCircleFill size={24} className="text-blue-600" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="md:flex-1 md:min-h-[480px] relative">
                    <div className={`flex relative min-w-[480px] lg:absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-full lg:min-w-[640px] h-fit rounded-2xl overflow-hidden border border-gray-200`}>
                        <div className="flex flex-col items-center w-12 py-2 bg-white border-r border-gray-200">
                            <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-8 aspect-square" />
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black, black, rgba(0, 0, 0, 0.3))' }} className="py-4 md:py-8 flex-1 flex flex-col justify-center gap-2 md:gap-3">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <span key={item} className="block w-5 sm:w-[28px] aspect-square rounded-md bg-blue-main/20"></span>
                                    ))
                                }
                            </div>
                            <span className="w-8 aspect-square rounded-full border border-gray-200 flex items-end justify-center overflow-hidden">
                                <IoPerson size={24} className="-mb-[2px] text-gray-300" />
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.2), black 10%, black 90%, rgba(0, 0, 0, 0.2))' }} className={`${isEven ? 'flex-row' : 'flex-row-reverse'} flex-1 bg-gray-100 p-4 sm:p-6 flex gap-4`}>
                                <div className="hidden sm:flex flex-1 items-end">
                                    <div className="bg-white w-full rounded-xl aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-screen before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-screen after:rounded-xl after:bg-gray-300/50"></div>
                                </div>
                                <div className="flex-2">
                                    <span className="block w-full bg-white rounded-xl h-full lg:h-auto lg:aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-screen before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-screen after:rounded-xl after:bg-gray-300/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default function WhatWeOffer() {

    return (
        <section className="min-h-screen">
            <div className="px-4 xs:px-6 sm:px-10">
                <div className="mx-auto max-w-[var(--max-width)] py-20">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">What we offer</h3>
                        <h2 className="text-4xl text-gray-900 mt-6 text-center">Why choose Safe Security Dynamics?</h2>
                        <p className="text-gray-800 mt-6 max-w-[72ch] leading-[2rem] text-lg text-center">Our AI-driven technology offers real-time vehicle detection, capturing plate numbers, make, model, and direction of travel with exceptional accuracy.</p>
                    </div>
                </div>
            </div>
            {
                OFFERS.map((offer, index) => (
                    <OfferComponent key={index} index={index} {...offer} />
                ))
            }
        </section>
    )
}