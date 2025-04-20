import Image from "next/image";
import Link from "next/link";
import { BiHome, BiSearch } from "react-icons/bi";
import { FaAngleDown, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const PRODUCTS = [
    {
        title: "Ei- AH13VD26 Surveillance Camera - White",
        description: "Type: Surveillance Camera (Dome) Analog High Definition (AHD) Colour: White Professional use Easy installation and operation",
        price: 1233.33,
        image: "/images/camera3.jpg"
    },
    {
        title: "Eagle-i El - P70VD07 Surveillance Camera (Dome) Analog",
        description: "Type: Surveillance Camera (Dome) Analog Professional use Easy installation and operation Model No: El - P70VD07",
        price: 0,
        image: "/images/camera4.avif"
    },
    {
        title: "Kenxinda Spy camera pen",
        description: "Micro‐camera‎,‎ Video recording Shoto taking capability sensitive microphone",
        price: 0,
        image: "/images/camera5.webp"
    },
    {
        title: "Universal Wireless Indoor CCTV Camera With Memory Card Slot",
        description: "Simple use - insert micro sd card and plug into mains to record Support 32GB micro SD card to record 3-4 days. Record in 24hrs x 7days to protect your security all the time. Recognize faces",
        price: 0,
        image: "/images/camera6.png"
    },
    {
        title: "XIAOMI HD Smart IP WiFi Wireless Indoor/ Outdoor Surveillance CCTV Camera",
        description: "Stream Live video of your Home / office/ Business anywhere. Motion Detection Take video and pictures  intercom Functionality",
        price: 0,
        image: "/images/camera7.jpg"
    },
    {
        title: "Eagle-i EI - P70WB27 Surveillance Camera (Bullet) Analog",
        description: "Type: Surveillance Camera (Bullet) Analog Professional use Easy installation and operation Model No: EI - P70WB27",
        price: 0,
        image: "/images/camera8.webp"
    },
]

export default function Products() {

    return (
        <div>
            <section className="px-4 xs:px-6 lg:px-10 bg-dark-blue text-white">
                <div className="mx-auto pt-20 pb-16">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="mt-4 text-4xl leading-[3.6rem] max-w-[32ch] text-center">Products</h2>
                        <p className="mt-8 text-base leading-[1.8rem] max-w-[56ch] text-center">At Safe Security Dynamics, we provide tailored security systems to protect all organisations.</p>
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-30 px-4 xs:px-6 lg:px-10 bg-gray-100 text-gray-900">
                <div className="mx-auto max-w-[var(--max-width)] min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
                    <div>
                        <div className="h-fit w-full pt-10 sticky top-[var(--header-large-height)] flex flex-col gap-4">
                            <div className="flex flex-col border bg-white border-gray-200 rounded-lg overflow-hidden">
                                <div className="flex items-center h-12">
                                    <span className="w-12 aspect-square flex items-center justify-center">
                                        <BiSearch size={20} />
                                    </span>
                                    <input type="text" className="text-base pr-4 h-12 flex-1 focus:outline-none" placeholder="Search products" />
                                </div>
                                <div className="flex border-t border-gray-200 items-center justify-between gap-4 p-4">
                                    <p className="text-sm max-w-[16ch]">Showing <span className="text-blue-600">all</span> results of all <span className="text-blue-600">entries</span></p>
                                    <button className="flex items-center justify-center px-3 h-8 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600">
                                        <span className="text-sm whitespace-nowrap">Reset all</span>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                <button className="w-full h-12 flex items-center justify-between gap-4 px-4">
                                    <span>All categories</span>
                                    <FaAngleDown size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <div className="flex items-center gap-2 text-gray-500">
                            <BiHome size={16} />
                            <span className="text-xs hover:text-blue-400 hover:underline">Products</span>
                            <span className="text-base">/</span>
                            <span className="text-xs hover:text-blue-400 hover:underline">Network camera solutions</span>
                        </div>
                        <ul className="mt-10 lg:mt-16 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {
                                PRODUCTS.map(({ title, price, image }, index) => (
                                    <li key={index} className="">
                                        <Link href="/products/1" className="group w-full h-full rounded-md bg-white shadow-lg shadow-black/5 p-3 flex flex-col gap-4">
                                            <div className="relative border border-gray-100 rounded-md overflow-hidden aspect-square">
                                                <Image src={image} fill alt="Product image" className="object-cover" />
                                            </div>
                                            <div className="flex-1 justify-between flex flex-col gap-2">
                                                <h3 className="tracking-tight group-hover:underline text-sm sm:text-base text-blue-main">{title}</h3>
                                                <div className="flex items-end gap-4 justify-between">
                                                    <span className="text-base sm:text-lg">NGN {price}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <span />
                    <ul className="mt-10 sm:mt-20 flex justify-center flex-wrap items-center gap-2 sm:gap-3">
                        <li>
                            <button className="bg-white border-gray-200 text-gray-600 hover:bg-blue-main hover:border-blue-main/50 hover:text-white border w-10 sm:w-12 aspect-square rounded-md flex items-center justify-center">
                                <FaAnglesLeft size={14} />
                            </button>
                        </li>
                        {
                            [1, 2, 3, 4, 5].map((item) => (
                                <li key={item}>
                                    <button className={`${item === 1 ? 'bg-blue-main border-blue-main text-white' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-main/50 hover:text-blue-main'} border w-10 sm:w-12 aspect-square rounded-md flex items-center justify-center`}>
                                        <span className="text-sm">{item}</span>
                                    </button>
                                </li>
                            ))
                        }
                        <li>
                            <button className="bg-white border-gray-200 text-gray-600 hover:bg-blue-main hover:border-blue-main hover:text-white border w-10 sm:w-12 aspect-square rounded-md flex items-center justify-center">
                                <FaAnglesRight size={14} />
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}