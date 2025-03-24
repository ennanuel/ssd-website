
import Image from "next/image";

import { GrSecure } from "react-icons/gr";
import { IoPerson, IoShieldCheckmark } from "react-icons/io5";



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

const CAMERAS = [
    { id: 1, name: "Delaware", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-1.png", timeStamp: "12:00 AM"},
    { id: 2, name:"Commercial", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-2.webp", timeStamp: "12:00 AM"},
    { id: 3, name:"Londonderry", cameraStatus: "DISABLED", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-3.jpg", timeStamp:"12:00 AM"},
    { id: 4, name: "Barby", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-4.jpeg", timeStamp: "12:00 AM"},
    { id: 5, name: "Alpine", cameraStatus: "INACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-5.jpg", timeStamp: "12:00 AM"},
    { id: 6, name: "Crescent Oaks", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-6.jpg", timeStamp: "12:00 AM"},
]

export default function Hero() {


    return (
        <div className="bg-dark-blue text-white overflow-hidden min-h-dvh px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex gap-10 py-10">
                <div className="flex-2 flex flex-col justify-end pb-10 gap-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-5xl leading-[4rem] max-w-[40ch]">{SLIDES[0].title}</h2>
                        <p className="text-lg leading-[2rem] max-w-[64ch]">{SLIDES[0].description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center h-14 rounded-md bg-blue-500 text-white hover:bg-blue-600 px-8">
                            <span className="text-sm">Get a demo</span>
                        </button>
                        <button className="flex items-center justify-center h-14 rounded-md bg-white text-blue-900 hover:bg-blue-100 px-8">
                            <span className="text-sm">Book free 30 mins. call</span>
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
                <div className="flex-3 pb-6">
                    <div className="flex relative left-[10%] w-[110%] h-full rounded-2xl overflow-hidden bg-gradient-to-r from-white/20 to-white/5">
                        <div className="w-14 flex flex-col bg-blue-500">
                            <span className="w-full aspect-square flex items-center justify-center bg-blue-main">
                                <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-10 h-auto rounded-full" />
                            </span>
                            <div className="flex-1 flex flex-col justify-between items-center gap-6 p-3 py-6">
                                <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-3">
                                    {
                                        [1, 2, 3, 4].map((item) => (
                                            <span key={item} className="block w-[28px] aspect-square rounded-sm bg-white/30" />
                                        ))
                                    }
                                </div>
                                <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-3">
                                    {
                                        [1, 2, 3, 4].map((item) => (
                                            <span key={item} className="block w-[28px] aspect-square rounded-sm bg-white/30" />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-3">
                                <span className="flex items-end justify-center mb-3 bg-white text-gray-300 aspect-square w-full rounded-full overflow-hidden">
                                    <IoPerson size={28} className="mb-[-2px]" />
                                </span>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 grid-rows-2 p-8 gap-6">
                            {
                                CAMERAS.map(({ id, name, cameraFootage }) => (
                                    <div key={id} className="flex flex-col overflow-hidden rounded-xl">
                                        <span className="bg-white flex justify-between items-center gap-2 px-3 py-2">
                                            <div className="flex flex-1 gap-2 items-center">
                                                <span className="w-3 aspect-square rounded-sm border border-gray-300" />
                                                <span className="text-[.55rem] text-gray-800 font-bold">{name}</span>
                                            </div>
                                            <span className="flex items-center gap-1">
                                                <span className="w-2 aspect-square rounded-full bg-green-400" />
                                                <span className="text-[.55rem] text-gray-800 tracking-tight">online</span>
                                            </span>
                                        </span>
                                        <span className="relative flex-1">
                                            <Image src={cameraFootage} fill alt="Camera footage" className="w-full h-full object-cover" />
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}