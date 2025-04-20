import { FiMail, FiPhone } from "react-icons/fi";


export default function Hero() {

    return (
        <section className="bg-dark-blue text-white px-4 xs:px-6 lg:px-10">
            <div className="mx-auto max-w-[var(--max-width)] max-h-[720px] min-h-[calc(100vh_-_var(--header-large-height))] py-40">
                <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-10 lg:items-end">
                    <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-blue-600 uppercase">Get in touch</h3>
                        <h2 className="mt-4 text-4xl leading-[3.6rem] max-w-[32ch]">How may we help you today?</h2>
                        <p className="mt-8 text-lg leading-[2rem] max-w-[48ch]">Contact us or directly book your individual online demo with our experts.</p>
                    </div>

                    <div className="flex flex-wrap gap-6 md:gap-14">
                        <a href="#" className="flex items-center">
                            <span className="w-12 rounded-sm aspect-square flex items-center justify-center bg-blue-600">
                                <FiMail size={16} />
                            </span>
                            <span className="text-sm font-light flex items-center pl-4 pr-6 h-full">info@SSD.co</span>
                        </a>
                        <a href="#" className="flex items-center">
                            <span className="w-12 rounded-sm aspect-square flex items-center justify-center bg-blue-600">
                                <FiPhone size={16} />
                            </span>
                            <span className="text-sm font-light flex items-center pl-4 pr-6 h-full">(+234)-8105 652 062</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}