
import Image from "next/image";
import { JSX } from "react";
import { AiOutlineAlert } from "react-icons/ai";

import { FaRegCheckCircle } from "react-icons/fa";
import { FiAlertCircle, FiAlertTriangle, FiArrowUpRight, FiEdit2, FiUser } from "react-icons/fi";
import { GoArchive, GoPencil } from "react-icons/go";
import { IoIosOptions } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { LuCctv } from "react-icons/lu";
import { RiAlarmWarningLine } from "react-icons/ri";

type OfferComponentProps = {
    title: string;
    description: string;
    features: string[];
    index: number;
    Demo: () => JSX.Element
};

const VEHICLE_DETECTIONS = [
  {
    id: 1,
    name: "Kinna Mixhel",
    timeStamp: "9/7/2023",
    memberStatus: "ALLOWED",
    plateNumber: "1C3CCBHG3CN739831",
    carMake: "Mazda",
    carModel: "B-Series",
    carModelYear: 2008,
  },
  {
    id: 2,
    name: "Ravi Danielian",
    timeStamp: "12/14/2023",
    memberStatus: "PROHIBITTED",
    plateNumber: "JN1AZ4EH7CM204357",
    carMake: "Ford",
    carModel: "Explorer",
    carModelYear: 2007,
  },
  {
    id: 3,
    name: "Merrily Portress",
    timeStamp: "1/29/2024",
    memberStatus: "PROHIBITTED",
    plateNumber: "WBSBL93464P595364",
    carMake: "Land Rover",
    carModel: "Range Rover",
    carModelYear: 1994,
  },
  {
    id: 4,
    name: "Janetta Brosh",
    timeStamp: "12/4/2023",
    memberStatus: "SUSPENDED",
    plateNumber: "WAULT54B13N018654",
    carMake: "Isuzu",
    carModel: "Amigo",
    carModelYear: 1999,
  },
  {
    id: 5,
    name: "Cristina Delacroix",
    timeStamp: "3/20/2024",
    memberStatus: "ALLOWED",
    plateNumber: "WDDUG7GB8FA061599",
    carMake: "Land Rover",
    carModel: "Discovery Series II",
    carModelYear: 1999,
  },
  {
    id: 6,
    name: "Livia O'Dea",
    timeStamp: "11/27/2023",
    memberStatus: "ALLOWED",
    plateNumber: "2FMGK5B89FB144266",
    carMake: "Acura",
    carModel: "RSX",
    carModelYear: 2005,
  },
];

const OFFERS = [
    {
        title: "Real-Time Vehicle Monitoring",
        description: "Leverage advanced ALPR technology to track vehicles instantly as they pass through monitored zones. Safe Security Dynamics ensures accurate, real-time data collection for swift decision-making.",
        features: [
            "Fast and accurate plate recognition",
            "Continuous 24/7 surveillance coverage",
            "Seamless integration with existing systems"
        ],
        Demo: DemoToDisplay1
    },
    {
        title: "Smart Alerts and Blacklist Detection",
        description: "Get instant notifications when blacklisted or suspicious vehicles are detected. Our system proactively enhances security by identifying threats as they happen.",
        features: [
            "Instant alerts on blacklisted vehicles",
            "Customizable threat response settings",
            "Supports law enforcement coordination"
        ],
        Demo: DemoToDisplay2
    },
    {
        title: "Secure User Registration & Access Control",
        description: "Register and manage authorized users effortlessly. Control who can access secure areas and ensure that only approved vehicles are recognized and allowed entry.",
        features: [
            "Easy user and vehicle registration",
            "Role-based access permissions",
            "Audit trails for all entries"
        ],
        Demo: DemoToDisplay3
    }
];

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

function OfferComponent({ title, description, features, index, Demo }: OfferComponentProps) {
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
                                    <FaRegCheckCircle size={24} className="text-blue-600" />
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
                                    <div className="bg-white w-full rounded-xl aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-screen before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-screen after:rounded-xl after:bg-gray-300/50">
                                        <div className="w-full h-full p-4 sm:p-2 flex flex-col gap-2">
                                            <span className="flex-1 block rounded-lg bg-gray-100"></span>
                                            <span className="block h-5 w-1/2 rounded-full bg-gray-200/80"></span>
                                            <span className="block h-5 w-full rounded-full bg-gray-200/80"></span>
                                            <span className="block h-5 w-4/5 rounded-full bg-gray-200/80"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-2">
                                    <div className="block w-full bg-white rounded-xl h-full lg:h-auto lg:aspect-square shadow-lg shadow-black/10 relative before:absolute before:bottom-[calc(100%_+_16px)] before:left-0 before:w-full before:h-screen before:rounded-xl before:bg-gray-300/50 after:absolute after:top-[calc(100%_+_16px)] after:left-0 after:w-full after:h-screen after:rounded-xl after:bg-gray-300/50">
                                        <Demo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
};

function DemoToDisplay1() {

    return (
        <div className="w-full h-full p-6 pb-0 flex flex-col gap-4 overflow-hidden">
            <span className="font-semibold text-gray-700">Detection summary</span>
            <div className="flex justify-between items-center gap-4">
                <span className="w-4/5 max-w-[200px] h-4 rounded-full bg-gray-200 block" />
                <span className="h-6 rounded-full pl-2 pr-3 border border-gray-200 flex gap-2 items-center justify-center">
                    <IoIosOptions size={14} />
                    <span className="text-xs">Daily</span>
                </span>
            </div>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 p-4 pr-6 rounded-lg bg-blue-100/60 text-gray-600">
                    <AiOutlineAlert size={24} />
                    <span className="text-3xl font-semibold flex-1">20.4k</span>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Vehicles</span>
                        <span className="text-sm font-semibold">Jun 8</span>
                    </div>
                </li>
                <li className="flex items-center gap-4 p-4 pr-6 rounded-lg bg-gray-100/60 text-gray-600">
                    <LuCctv size={24} />
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-1">
                            {[1, 2, 3].map((item) => (<span key={item} className="w-2 aspect-square rounded-full bg-gray-300 block" />))}
                            <span className="ml-1 text-sm font-semibold">camera</span>
                        </div>
                        <span className="text-sm font-semibold">200 detections</span>
                    </div>
                    <span className="flex items-center justify-center w-8 aspect-square rounded-full border border-gray-200">
                        <FiArrowUpRight size={14} />
                    </span>
                </li>
            </ul>
            <span className="mt-6 font-semibold text-gray-700">Vehicle stats</span>
            <div className="min-h-20 rounded-t-lg bg-gray-100/60"></div>
        </div>
    )
}

function DemoToDisplay2() {

    return (
        <div className="w-full h-full flex flex-col gap-4 p-6 overflow-hidden">
            <span className="font-semibold text-gray-800">Security alert</span>
            <div className="p-3 rounded-lg border border-yellow-200 text-yellow-500 flex gap-3">
                <FiAlertTriangle size={18} />
                <div className="flex flex-1 flex-col gap-1">
                    <span className="w-4/5 block h-3 rounded-full bg-yellow-100" />
                    <span className="w-1/2 block h-3 rounded-full bg-yellow-100" />
                </div>
            </div>
            <div className="p-6 flex flex-col items-center justify-center gap-3 rounded-lg text-center bg-yellow-100 text-gray-700">
                <RiAlarmWarningLine size={30} />
                <p className="font-semibold text-lg">Prohibitted vehicle detected. What do you want to do?</p>
                <div className="flex gap-3 justify-center">
                    <button className="min-w-20 h-8 px-3 flex items-center justify-center gap-2 bg-yellow-200 rounded-full">
                        <span className="font-semibold text-sm">Report</span>
                    </button>
                    <button className="min-w-20 h-8 px-3 flex items-center justify-center gap-2 bg-white rounded-full">
                        <span className="font-semibold text-sm">Ignore</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span className="w-4/5 block h-4 rounded-full bg-gray-100" />
                <span className="w-1/2 block h-4 rounded-full bg-gray-100" />
            </div>
        </div>
    )
};

function DemoToDisplay3() {

    return (
        <div className="w-full h-full flex flex-col gap-4 p-6 overflow-hidden">
            <span className="font-semibold text-gray-800">User details</span>
            <div className="flex items-center justify-between gap-4">
                <span className="block w-1/2 h-4 rounded-full bg-gray-100" />
                <span className="h-6 flex items-center justify-center gap-2 pl-2 pr-3 border border-gray-200 rounded-full text-gray-800">
                    <GoArchive size={12} />
                    <span className="text-xs font-semibold">Archive</span>
                </span>
            </div>
            <div className="flex flex-col rounded-lg border border-blue-200">
                <div className="flex justify-between items-start text-gray-600">
                    <span className="mx-4 my-6 flex items-center gap-4">
                        <FiUser size={24} />
                        <span className="font-semibold text-2xl">John Doe</span>
                    </span>
                    <span className="mt-4 mr-4 flex w-8 aspect-square items-center justify-center bg-blue-100 rounded-full">
                        <GoPencil size={14} />
                    </span>
                </div>
                <div className="m-4 mt-0 p-4 flex flex-col gap-3 bg-blue-100/60 rounded-md">
                    <div className="flex items-center justify-between gap-2 font-semibold text-sm text-gray-700">
                        <span className="flex-2">Role</span>
                        <span className="flex-1">Staff</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 font-semibold text-sm text-gray-700">
                        <span className="flex-2">Status</span>
                        <span className="flex-1">Allowed</span>
                    </div>
                    <div className="flex items-center justify-between gap-2 font-semibold text-sm text-gray-700">
                        <span className="flex-2">Last detected</span>
                        <span className="flex-1">2 May, 2025</span>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-2">
                <span className="w-4/5 block h-4 rounded-full bg-gray-100" />
                <span className="w-1/2 block h-4 rounded-full bg-gray-100" />
            </div>
        </div>
    )
}