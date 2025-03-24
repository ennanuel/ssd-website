import { FaFingerprint } from "react-icons/fa6"
import { LuTrafficCone } from "react-icons/lu"
import { PiDetectiveBold, PiSecurityCameraBold } from "react-icons/pi"
import { TbCarCrash } from "react-icons/tb"

const ADVANTAGES = [
    {
        title: "Traffic monitoring and regulation",
        Icon: LuTrafficCone
    },
    {
        title: "Quick response and crash detection",
        Icon: TbCarCrash
    },
    {
        title: "Unified identification system",
        Icon: FaFingerprint
    },
    {
        title: "Aiding investigations",
        Icon: PiDetectiveBold
    },
    {
        title: "Quality surveillane and monitoring",
        Icon: PiSecurityCameraBold
    },
]

export default function Advantages() {


    return (
        <section className="bg-blue-300/10 px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-30 pb-20 flex gap-20 items-center justify-between">
                <ul className="flex-1 max-w-[800px] grid grid-cols-6 grid-rows-2 gap-4">
                    {
                        ADVANTAGES.map(({ title, Icon }, index) => (
                            <li key={title} className={`${index === 3 || index === 4 ? 'col-span-3' : 'col-span-2'}`}>
                                <button className="p-6 w-full h-full text-left flex flex-col gap-8 justify-between rounded-2xl border border-gray-200 hover:border-blue-400 bg-white">
                                    <Icon size={32} className="text-blue-600" />
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
                                        <p className="text-xs text-gray-500">Click to see more</p>
                                    </div>
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex flex-col gap-16 justify-center">
                    <div className="flex flex-col">
                        <h3 className="text-blue-800 text-sm uppercase font-semibold">Our Advantages</h3>
                        <h2 className="text-4xl text-gray-900 mt-6 max-w-[24ch]">What makes us better</h2>
                        <p className="text-gray-800 mt-6 max-w-[48ch] leading-[2rem] text-lg">Our AI-driven technology offers real-time vehicle detection, capturing plate numbers, make, model, and direction of travel with exceptional accuracy.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center justify-center h-14 rounded-md border border-blue-500 bg-blue-500 px-8 w-fit text-white">
                            <span>Get started</span>
                        </button>
                        <button className="flex items-center justify-center h-14 rounded-md border border-gray-300 bg-white px-8 w-fit text-gray-600">
                            <span>Book a free call</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}