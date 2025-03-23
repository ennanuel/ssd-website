import { FiMail, FiPhone } from "react-icons/fi";



export default function Contact() {

    return (
        <section className="bg-blue-300/10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-30 pb-40 flex justify-between gap-20">
                <div className="flex flex-col h-fit pb-6 sticky top-40">
                    <h3 className="text-sm font-semibold text-blue-800 uppercase">Contact us</h3>
                    <h2 className="mt-4 text-4xl leading-[3.6rem] text-gray-800 max-w-[32ch]">We&apos;d like to hear from you</h2>
                    <p className="mt-8 text leading-[1.8rem] text-gray-600 max-w-[56ch]">Wheather it&apos&apos;s customer support, feeback, suggestions, or media inquiries. Our product experts will be happy to answer your questions, give you a tour of Isarsoft Perception, and help you successfully implement your project.</p>

                    <div className="mt-10 flex flex-col gap-6">
                        <a href="#" className="flex text-blue-600 items-center gap-3">
                            <FiMail size={18} />
                            <span className="text-sm">info@SSD.co</span>
                        </a>
                        <a href="#" className="flex text-blue-600 items-center gap-3">
                            <FiPhone size={18} />
                            <span className="text-sm">(+234)-8105 652 062</span>
                        </a>
                    </div>
                </div>
                <form action="" className="rounded-4xl bg-white border border-gray-200 p-10 w-full max-w-[640px] flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm text-gray-500">Name</label>
                        <input type="text" id="name" name="name" className="h-12 rounded-md bg-white border border-gray-100 px-4 block" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm text-gray-500">Company</label>
                        <input type="text" id="company" name="company" className="h-12 rounded-md bg-white border border-gray-100 px-4 block" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-1 flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                            <input type="text" id="email" name="email" className="h-12 rounded-md bg-white border border-gray-100 px-4 block" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm text-gray-500">Phone</label>
                            <input type="tel" id="phone" name="phone" className="h-12 rounded-md bg-white border border-gray-100 px-4 block" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm text-gray-500">Message</label>
                        <textarea name="message" id="message" className="h-40 rounded-md bg-white border border-gray-100 px-4 block"></textarea>
                    </div>
                    <button className="mt-4 flex items-center justify-center mx-auto px-4 h-14 rounded-lg w-full bg-blue-500 hover:bg-blue-600">
                        <span className="text-sm text-white">Send message</span>
                    </button>
                </form>
            </div>
        </section>
    )
}