import { FaPlay } from "react-icons/fa6";


export default function Definition () {


    return (
        <div className="px-4 xs:px-6 sm:px-10">
            <div className="text-center lg:text-left pt-20 mx-auto min-h-screen max-w-[var(--max-width)] flex flex-col lg:flex-row justify-center items-center gap-20">
                <div className="flex lg:hidden flex-col gap-4">
                    <h3 className="text-blue-800 uppercase font-semibold text-sm">Learn about alpr</h3>
                    <h2 className="text-4xl text-gray-900">What is ALPR?</h2>
                </div>
                <div className="w-full max-w-[640px]">
                    <div className="aspect-video rounded-4xl bg-blue-400/20 flex items-center justify-center">
                        <span className="flex items-center justify-center p-4 border-2 border-dashed border-blue-main/40 rounded-full">
                            <span className="flex items-center justify-center w-16 aspect-square rounded-full bg-blue-main/40 text-white">
                                <FaPlay size={20} className="ml-1" />
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="hidden lg:flex flex-col gap-4">
                        <h3 className="text-blue-800 uppercase font-semibold text-sm">Learn about alpr</h3>
                        <h2 className="text-4xl text-gray-900">What is ALPR?</h2>
                    </div>
                    <p className="mt-6 text-base leading-[1.8rem] text-gray-800 max-w-[80ch] lg:max-w-[48ch]">
                        <span>ALPR (Automatic License Plate Recognition) is a technology used to automatically read and identify vehicle License Plates <span className="text-blue-800 hover:underline">Optical Character Recognition</span> (OCR). </span>
                        <br />
                        <br />
                        <span>Safe Security Dynamics&apos; LPR solution leverage cutting-edge Artificial Intelligence and Machine Learning to far exceed traditional systems.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}