import { FiFacebook, FiInstagram, FiLinkedin, FiX } from "react-icons/fi";



export default function Form() {

    return (
        <section className="px-10">
            <div className="-mt-40 mx-auto max-w-[var(--max-width)] min-h-screen flex justify-between gap-20">
                <div className="flex flex-col gap-40 py-16">
                    <ul className="flex items-start gap-4 flex-wrap">
                        {
                            [FiX, FiFacebook, FiLinkedin, FiInstagram].map((Icon, index) => (
                                <li key={index}>
                                    <a href="#" className="flex items-center justify-center w-12 aspect-square rounded-sm border border-white/10 bg-white/5 text-white">
                                        <Icon size={20} />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="div flex flex-col gap-10">
                        <h3 className="text-4xl text-gray-800 leading-[3.4rem]">Talk to our product experts</h3>
                        <p className="text-lg text-gray-600 max-w-[48ch] leading-[2rem]">Have questions about pricings, plans, or SSD? Fill out the form and our customer representatives will be in touh directly.</p>
                    </div>
                </div>
                <form action="" className="flex-1 h-fit max-w-[720px] bg-[#f4f7fe] border border-gray-100 rounded-2xl p-10 pt-14 flex flex-col">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm text-gray-500">Name</label>
                                <input type="text" id="name" name="name" className="h-14 rounded-md bg-white border border-gray-200 px-4 block" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="company" className="text-sm text-gray-500">Company</label>
                                <input type="text" id="company" name="company" className="h-14 rounded-md bg-white border border-gray-200 px-4 block" />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-gray-500">Email</label>
                                <input type="text" id="email" name="email" className="h-14 rounded-md bg-white border border-gray-200 px-4 block" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="phone" className="text-sm text-gray-500">Phone</label>
                                <input type="tel" id="phone" name="phone" className="h-14 rounded-md bg-white border border-gray-200 px-4 block" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm text-gray-500">Message</label>
                            <textarea name="message" id="message" className="h-40 rounded-md bg-white border border-gray-200 px-4 block"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 my-8">
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="news-letter" id="news-letter" />
                            <label htmlFor="news-letter" className="font-light text-sm text-gray-600">Sign up to the Isarsoft newsletter</label>
                        </div>
                        <div className="flex items-center gap-4">
                            <input type="checkbox" name="news-letter" id="news-letter" />
                            <label htmlFor="news-letter" className="font-light text-sm text-gray-600">Agree to our <a href="#" className="text-blue-500">privacy policy</a></label>
                        </div>
                    </div>
                    <button className="flex w-fit items-center justify-center px-10 h-14 rounded-lg bg-blue-500 hover:bg-blue-600">
                        <span className="text-sm text-white">Send message</span>
                    </button>
                </form>
            </div>
        </section>
    )
}