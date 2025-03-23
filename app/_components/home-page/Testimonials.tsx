import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";



export default function Testimonials() {

    return (
        <section className="bg-blue-300/10">
            <div className="mx-auto max-w-[var(--max-width)] pt-[120px] pb-20 flex flex-col gap-10">
                <div className="min-h-[calc(100vh_-_40px_-_var(--header-large-height))] bg-dark-blue text-white overflow-hidden rounded-xl flex">
                    <div className="w-full max-w-[640px] bg-black/50"></div>
                    <div className="flex-1 flex flex-col px-18 py-14">
                        <div className="flex-1 flex flex-col justify-center gap-4">
                            <IoMdQuote size={40} />
                            <p className="text-xl font-light leading-[2rem]">Our goal is to provide visitors with the best possible shopping experience. With Isarsoft’s solution, we can better respond to our customers’ needs and adapt our processes accordingly. What stood out to us was that the technology is AI-based, eliminating the need for additional sensor installations.</p>
                        </div>
                        <div className="flex">
                            <div className="flex-1 flex flex-col gap-1 border-b border-white/20 py-4">
                                <h3>Central Manager</h3>
                                <h4 className="text-sm font-light">Center West</h4>
                            </div>
                            <div className="border-b-3 border-white py-4">
                                <span className="flex items-center justify-center w-14 aspect-square rounded-full bg-yellow-400"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-8">
                    <div className="flex gap-2 pb-4">
                        <span className="block w-10 h-2 rounded-full bg-gray-800"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                    </div>
                    <div className="flex gap-8">
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-white text-gray-800 hover:text-gray-600">
                            <FaArrowLeft size={20} />
                        </button>
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-white text-gray-800 hover:text-gray-600">
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}