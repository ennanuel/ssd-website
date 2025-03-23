
import Image from "next/image";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";



export default function WhatWeOffer() {

    return (
        <section className="min-h-screen">
            <div className="mx-auto max-w-[var(--max-width)] py-20">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">What we offer</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 text-center">Why choose Safe Security Dynamics?</h2>
                    <p className="text-gray-800 mt-6 max-w-[72ch] leading-[2rem] text-lg text-center">Our AI-driven technology offers real-time vehicle detection, capturing plate numbers, make, model, and direction of travel with exceptional accuracy.</p>
                </div>
            </div>
            <article className="">
                <div className="mx-auto min-h-[calc(100vh_-_var(--header-large-height))] py-20 max-w-[var(--max-width)] flex gap-20">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-800 text-3xl leading-[2.8rem] max-w-[28ch]">Make infrastructure tangible and measurable.</h3>
                        <p className="text-gray-700 leading-[1.8rem] max-w-[60ch]">Isarsoft Perception makes traffic and people flows quantifiable to support planners with data and analyses for infrastructure measures.</p>
                        <ul className="flex flex-col gap-6 mt-6">
                            {
                                [
                                    "Optimize and analyze infrastructure",
                                     "Survey traffic and people flows in real time", 
                                     "Easy integration into existing video camera systems"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4">
                                        <BsFillCheckCircleFill size={24} className="text-blue-600" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex-1 h-fit flex rounded-2xl overflow-hidden border border-gray-200">
                        <div className="flex flex-col items-center w-12 py-2 bg-white border-r border-gray-200">
                            <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-8 aspect-square" />
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black, black, rgba(0, 0, 0, 0.3))' }} className="py-8 flex-1 flex flex-col justify-center gap-3">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <span key={item} className="block w-[28px] aspect-square rounded-md bg-blue-main/20"></span>
                                    ))
                                }
                            </div>
                            <span className="w-8 aspect-square rounded-full border border-gray-200 flex items-end justify-center overflow-hidden">
                                <IoPerson size={24} className="-mb-[2px] text-gray-300" />
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.2), black 10%, black 90%, rgba(0, 0, 0, 0.2))' }} className="flex-1 bg-gray-100 p-6 flex items-center">
                                <div className="flex items-end gap-4 w-full">

                                    <div className="bg-white rounded-xl flex-2 aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>
                                    <div className="flex-1 bg-white rounded-xl aspect-square shadow-lg shadow-black/5 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="bg-blue-300/10">
                <div className="mx-auto min-h-[calc(100vh_-_var(--header-large-height))] pt-40 pb-20 max-w-[var(--max-width)] flex gap-20">
                    <div className="flex-1 bg-white h-fit flex rounded-2xl overflow-hidden border border-gray-200">
                        <div className="flex flex-col items-center w-12 py-2 bg-white border-r border-gray-200">
                            <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-8 aspect-square" />
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black, black, rgba(0, 0, 0, 0.3))' }} className="py-8 flex-1 flex flex-col justify-center gap-3">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <span key={item} className="block w-[28px] aspect-square rounded-md bg-blue-main/20"></span>
                                    ))
                                }
                            </div>
                            <span className="w-8 aspect-square rounded-full border border-gray-200 flex items-end justify-center overflow-hidden">
                                <IoPerson size={24} className="-mb-[2px] text-gray-300" />
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.2), black 10%, black 90%, rgba(0, 0, 0, 0.2))' }} className="flex-1 bg-gray-100 p-6 flex items-center">
                                <div className="flex items-end gap-4 w-full">

                                    <div className="bg-white rounded-xl flex-2 aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>
                                    <div className="flex-1 bg-white rounded-xl aspect-square shadow-lg shadow-black/5 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-800 text-3xl leading-[2.8rem] max-w-[28ch]">Real-time KPIs.</h3>
                        <p className="text-gray-700 leading-[1.8rem] max-w-[60ch]">Isarsoft Perception makes traffic and people flows quantifiable to support planners with data and analyses for infrastructure measures.</p>
                        <ul className="flex flex-col gap-6 mt-6">
                            {
                                [
                                    "Optimize and analyze infrastructure",
                                    "Survey traffic and people flows in real time", 
                                    "Easy integration into existing video camera systems"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4">
                                        <BsFillCheckCircleFill size={24} className="text-blue-600" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </article>
            <article className="">
                <div className="mx-auto min-h-[calc(100vh_-_var(--header-large-height))] pt-40 pb-20 max-w-[var(--max-width)] flex gap-20">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-800 text-3xl leading-[2.8rem] max-w-[28ch]">Support safety-critical decisions.</h3>
                        <p className="text-gray-700 leading-[1.8rem] max-w-[60ch]">Isarsoft Perception provides alarms to allow for adequate reactions to safety-critical events.</p>
                        <ul className="flex flex-col gap-6 mt-6">
                            {
                                [
                                    "Protect customers, employees and property",
                                    "Smooth integration with other safety systems", 
                                    "Respond to safety-critical incidents in real time"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4">
                                        <BsFillCheckCircleFill size={24} className="text-blue-600" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex-1 h-fit flex rounded-2xl overflow-hidden border border-gray-200">
                        <div className="flex flex-col items-center w-12 py-2 bg-white border-r border-gray-200">
                            <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-8 aspect-square" />
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black, black, rgba(0, 0, 0, 0.3))' }} className="py-8 flex-1 flex flex-col justify-center gap-3">
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                        <span key={item} className="block w-[28px] aspect-square rounded-md bg-blue-main/20"></span>
                                    ))
                                }
                            </div>
                            <span className="w-8 aspect-square rounded-full border border-gray-200 flex items-end justify-center overflow-hidden">
                                <IoPerson size={24} className="-mb-[2px] text-gray-300" />
                            </span>
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.2), black 10%, black 90%, rgba(0, 0, 0, 0.2))' }} className="flex-1 bg-gray-100 p-6 flex items-center">
                                <div className="flex items-end gap-4 w-full">

                                    <div className="bg-white rounded-xl flex-2 aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>
                                    <div className="flex-1 bg-white rounded-xl aspect-square shadow-lg shadow-black/5 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-[400%] before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-[400%] after:rounded-xl after:bg-gray-300/50"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}