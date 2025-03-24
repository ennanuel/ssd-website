
import Image from "next/image";
import { AiFillAlert } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa6";

import { GrSecure } from "react-icons/gr";
import { IoPerson, IoShieldCheckmark } from "react-icons/io5";
import { PiSpeedometerFill } from "react-icons/pi";


const CAMERAS = [
    { id: 1, name: "Delaware", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-1.png", timeStamp: "12:00 AM"},
    { id: 2, name:"Commercial", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-2.webp", timeStamp: "12:00 AM"},
    { id: 3, name:"Londonderry", cameraStatus: "DISABLED", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-3.jpg", timeStamp:"12:00 AM"},
    { id: 4, name: "Barby", cameraStatus: "ACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-4.jpeg", timeStamp: "12:00 AM"},
    { id: 5, name: "Alpine", cameraStatus: "INACTIVE", audioAvailable: true, vehicleDetected: true, cameraFootage: "/images/vehicle-detection-5.jpg", timeStamp: "12:00 AM"},
    { id: 6, name: "Crescent Oaks", cameraStatus: "DISABLED", audioAvailable: false, vehicleDetected: false, cameraFootage: "/images/vehicle-detection-6.jpg", timeStamp: "12:00 AM"},
]

const POINTS = [
    {
        title: "Planning",
        desc: "Accurate planning and forecasting requires information about passenger flows, people density and potential congestion points.",
        Icon: FaChartBar
    },
    {
        title: "Operation",
        desc: "Operational efficiency and customer satisfaction can be enhanced through insights into platform occupancy, queue length, and integrated workflows.",
        Icon: PiSpeedometerFill
    },
    {
        title: "Security",
        desc: "Security is a top concern for many passengers. Video Analytics can provide alerts to detect suspicious behavior, unattended items, or security-critical events.",
        Icon: AiFillAlert
    },
]

export default function Hero() {

    return (
        <section className="bg-dark-blue text-white overflow-hidden min-h-dvh px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col gap-20">
                <div className="flex gap-10 py-10">
                    <div className="flex-2 flex flex-col justify-end gap-10 pt-12">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-5xl leading-[4rem] max-w-[40ch]">Government & Law enforcement agencies</h2>
                            <p className="text-lg leading-[2rem] max-w-[64ch]">Use the full potential of the camera systems in your train stations. Isarsoft Perception video analysis adds value for planning, operation and security.</p>
                        </div>
                        <ul className="flex flex-col gap-6">
                            {
                                [
                                    "Accurate data for strategic planning",
                                    "Operational process optimization",
                                    "Data-based security management"
                                ].map((text) => (
                                    <li key={text} className="flex items-center gap-4">
                                        <BsFillCheckCircleFill className="text-blue-500" size={20} />
                                        <span className="text-base">{text}</span>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="mt-4 flex items-center gap-4">
                            <button className="flex items-center justify-center h-14 rounded-md bg-blue-500 text-white hover:bg-blue-600 px-8">
                                <span className="text-sm">Get a demo</span>
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
                        <div className="flex relative left-[10%] w-[110%] h-full max-h-[540px] rounded-2xl overflow-hidden bg-gradient-to-r from-white/20 to-white/5">
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
                <div className="pb-20">
                    <ul className="flex gap-6">
                        {
                            POINTS.map(({ title, desc, Icon }) => (
                                <li key={title} className="flex flex-col p-8 border border-white/10 bg-white/5 rounded-xl gap-4">
                                    <div className="flex items-center justify-between gap-6">
                                        <h3 className="text-xl text-blue-500 font-semibold">{title}</h3>
                                        <Icon size={24} />
                                    </div>
                                    <p className="text-sm font-light">{desc}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}