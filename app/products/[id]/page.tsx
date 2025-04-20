"use client";

import { useState } from "react";
import Image from "next/image";
import { BiExpand, BiHome } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { LuCctv } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import Link from "next/link";

const PRODUCT_IMAGES_SRC = [
    '/images/camera3.jpg',
    '/images/camera4.avif',
    '/images/camera5.webp',
    '/images/camera6.png',
    '/images/camera7.jpg',
    '/images/camera4.avif',
    '/images/camera4.avif',
    '/images/camera4.avif',
];

const PRODUCT_FEATURES = [
    "Type: Surveillance Camera (Dome) Analog High Definition (AHD)",
    "Colour: White",
    "Professional use",
    "Easy installation and operation"
];

const PRODUCT_OPTIONS = [
    {
        title: "Description",
        value: "description"
    },
    {
        title: "Product Details",
        value: "details"
    }
]

const ADVANTAGES = [
    {
        title: "Secured product",
        Icon: RiShieldCheckFill
    },
    {
        title: "Fast delivery",
        Icon: FaTruck
    },
    {
        title: "SSD compatible",
        Icon: LuCctv
    },
];

const PRODUCT_DETAILS = [
    {
        title: "Camera",
        details: [
            ["Image Sensor", "2.54 cm (1/2.8 inch) progressive scan CMOS"],
            ["Min. Illumination", "Color: 0.01 Lux @(F1.2, AGC ON), 0.028Lux @ (F2.0, AGC ON)"],
            ["Shutter Speed", "1/3 s to 1/100, 000 s"],
            ["Slow Shutter", "Yes"],
            ["Auto-Iris", "No"],
            ["Day & Night", "IR cut filter"],
            ["Digital Noise Reduction", "3D DNR"],
            ["WDR", "DWDR"],
            ["Angle Adjustment", "Pan: 0° to 360°, tilt: 0° to 75°, rotation: 0° to 360°"]
        ]
    },
    {
        title: "Lens",
        details: [
            ["Focal Length", "2.8 mm, 4 mm"],
            ["Min. Illumination", "F2.0"],
            ["Shutter Speed", "Fixed"],
            ["FOV", "2.8 mm, horizontal FOV 114.8°, vertical FOV 62°, diagonal FOV 135.5° 4 mm, horizontal FOV 86°, vertical FOV 46.5°, diagonal FOV 102.5°"],
            ["Lens Mount", "M12"]
        ]
    },
    {
        title: "IR",
        details: [
            ["IR Range", "Up to 10 m"],
            ["Min. Illumination", "Wavelength"]
        ]
    },
    {
        title: "Compression standard",
        details: [
            ["Video Compression", "Main stream: H.265+/H.265/H.264+/H.264 Sub stream: H.265/H.264/MJPEG"],
            ["H.264 Type", "Wavelength"],
            ["H.265 Type", "Main Profile"],
            ["Video Bit Rate", "32 Kbps to 8 Mbps"]
        ]
    },
    {
        title: "Smart Feature-set",
        details: [
            ["Region of Interest", "1 fixed region for main stream"]
        ]
    },
    {
        title: "Smart Feature-set",
        details: [
            ["Region of Interest", "1 fixed region for main stream"]
        ]
    },
    {
        title: "Image",
        details: [
            ["Max. Resolution", "1280 × 960"],
            ["Main Stream Max. Frame Rate", "50Hz: 25fps (1280 × 960, 1280 × 720) 60Hz: 30fps (1280 × 960, 1280 × 720)"],
            ["Sub-stream Max. Frame Rate", "50Hz: 25fps (640 × 480, 640 × 360, 320 × 240) 60Hz: 30fps (640 × 480, 640 × 360, 320 × 240)"],
            ["Image Enhancement", "BLC, 3D DNR"],
            ["Image Settings", "Saturation, brightness, contrast, sharpness, AGC, white balance adjustable by client software or web browser"],
            ["Day/Night Switch", "Auto, scheduled, day, night"]
        ]
    },
    {
        title: "Network",
        details: [
            ["Alarm Trigger", "Motion detection, video tampering alarm, illegal login"],
            ["Protocols", "TCP/IP, ICMP, HTTP, HTTPS, DHCP, DNS, RTP, RTSP, RTCP, NTP, IGMP, QoS, UDP"],
            ["General Function", "Anti-flicker, heartbeat, mirror, password protection, privacy mask, watermark"],
            ["Firmware Version", "V5.5.83"],
            ["API", "ONVIF (PROFILE S), ISAPI"],
            ["Simultaneous Live View", "Up to 6 channels"],
            ["User/Host", "Up to 32 users 3 levels: Administrator, Operator and User"],
            ["Client", "iVMS-4200, Hik-Connect, iVMS-5200, iVMS-4500"],
            ["Web Browser", "IE8+, Chrome 31.0-44, Firefox 30.0-51, Safari 8.0+"]
        ]
    },
    {
        title: "Interface",
        details: [
            ["Communication Interface", "1 RJ45 10M/100M self-adaptive Ethernet port"]
        ]
    },
    {
        title: "General",
        details: [
            ["Operating conditions", "-30 °C to 60 °C (-22 °F to 140 °F), humidity: 95% or less (non-condensing)"],
            ["Power supply 12 VDC ± 25%, 5.5 mm coaxial power plug PoE (802.3af, class 3) Power consumption and current 12 VDC, 0.3 A, max: 3.5", "Power Supply 12 VDC ± 25%, 5.5 mm coaxial power plug PoE (802.3af, class 3)"],
            ["Power consumption and current", "12 VDC, 0.3 A, max: 3.5 W PoE: (802.3af, 36 V to 57 V), 0.2 A to 0.1 A, Max: 4.5 W"],
            ["Weight", "90 g (0.4 lb.)"]
        ]
    }
];

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
];

export default function Product() {
    const [detailsToShow, setDetailsToShow] = useState("description");

    return (
        <div className="pt-14 pb-30 bg-gray-100 text-gray-900">
            <section className="px-4 xs:px-6 lg:px-10 min-h-screen">
                <div className="mx-auto max-w-[var(--max-width)]">
                    <div className="flex-wrap flex items-center gap-y-1 gap-x-2 text-gray-500">
                        <span className="flex items-center gap-2">
                            <BiHome size={16} />
                            <span className="text-xs hover:text-blue-400 hover:underline">Products</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-base">/</span>
                            <span className="text-xs hover:text-blue-400 hover:underline">Network camera solutions</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="text-base">/</span>
                            <span className="text-xs hover:text-blue-400 hover:underline">Ei- AH13VD26 Surveillance Camera - White</span>
                        </span>
                    </div>
                    <div className="mt-10 flex flex-col lg:flex-row gap-12 md:gap-20 rounded-lg bg-white p-4 sm:p-6 md:p-10">
                        <div className="flex-1">
                            <ul className="w-full h-fit grid grid-cols-3 lg:grid-cols-4 grid-rows-[repeat(2,_auto)] lg:grid-rows-3 gap-4 md:gap-6">
                                {
                                    PRODUCT_IMAGES_SRC.slice(0, 4).map((src, index) => (
                                        <li key={index} className={`${index === 0 ? 'row-span-1 lg:row-span-3 col-span-3' : 'col-span-1 row-span-1'} aspect-square lg:aspect-auto lg:min-h-[120px] relative rounded-md border border-gray-100 overflow-hidden flex items-center justify-center bg-black text-white`}>
                                            <div className="absolute top-0 left-0 w-full h-full">
                                                <Image src={src} alt={`Product image ${index + 1}`} fill className="object-cover" />
                                            </div>
                                            {
                                                PRODUCT_IMAGES_SRC.length > 4 && index === 3 ? 
                                                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 text-white flex items-center justify-center">
                                                        <span className="text-3xl">+{PRODUCT_IMAGES_SRC.length - 4}</span>
                                                    </div> :
                                                    null
                                            }
                                            {
                                                index == 0 ?
                                                    <button className="absolute bottom-4 right-4 w-10 aspect-square bg-white border border-gray-200 rounded-sm flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-main hover:border-blue-100">
                                                        <BiExpand size={20} />
                                                    </button> :
                                                    null
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="flex-1 flex flex-col justify-between gap-18">
                            <div className="flex flex-col">
                                <h2 className="text-xl md:text-2xl text-gray-900">Ei- AH13VD26 Surveillance Camera - White</h2>
                                <ul className="mt-10 flex flex-col gap-4">
                                    {
                                        PRODUCT_FEATURES.map((feature) => (
                                            <li key={feature} className="text-gray-600">
                                                <span className="text-sm sm:text-base">{feature}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mt-8 flex items-center gap-6">
                                    <span className="text-gray-600 text-sm sm:text-base">Quantity:</span>
                                    <div className="flex gap-2">
                                        <button className="flex items-center justify-center w-10 aspect-square rounded-sm border border-gray-200 text-gray-800 hover:bg-gray-100">
                                            <MdAdd size={18} />
                                        </button>
                                        <input type="text" className="w-12 h-10 text-center rounded-sm border border-gray-400 p-1" />
                                        <button className="flex items-center justify-center w-10 aspect-square rounded-sm border border-gray-200 text-gray-800 hover:bg-gray-100">
                                            <MdAdd size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="flex">
                                    <button className="h-12 flex items-center justify-center gap-3 px-4 xs:px-6 md:px-10 max-w-[280px] rounded-md bg-blue-600 hover:bg-blue-main text-white">
                                        <FaShoppingCart size={16} />
                                        <span className="text-sm sm:text-base">Add to cart</span>
                                    </button>
                                </div>
                                <div className="flex gap-2 md:gap-4">
                                    {
                                        ADVANTAGES.map(({ title, Icon }) => (
                                            <span className="rounded-md overflow-hidden flex border border-gray-200 text-gray-400">
                                                <span className="w-8 aspect-square flex items-center justify-center bg-gray-200 text-gray-400">
                                                    <Icon size={16} />
                                                </span>
                                                <p className="flex flex-col justify-center gap-[2px] px-[6px]">
                                                    {
                                                        title.split(" ").map((word) => (
                                                            <span className="text-[.6rem] leading-[.6rem] tracking-tighter uppercase">{word}</span>
                                                        ))
                                                    }
                                                </p>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex">
                            {
                                PRODUCT_OPTIONS.map(({ title, value }, index) => (
                                    <button onClick={() => setDetailsToShow(value)} className={`${value === detailsToShow ? 'border-b-white text-blue-main' : 'text-gray-600 hover:text-gray-900'} ${index === 0 ? 'rounded-tl-lg' : index === (PRODUCT_OPTIONS.length - 1) ? 'rounded-tr-lg' : ''} border-r border-b last:border-r-0 border-gray-200 bg-white h-10 sm:h-12 md:h-14 px-4 md:px-8 lg:px-10 flex items-center justify-center`}>
                                        <span className="text-sm sm:text-base">{title}</span>
                                    </button>
                                ))
                            }
                        </div>
                        <div className="bg-white rounded-lg rounded-tl-none overflow-clip">
                            {
                                detailsToShow === "description" ? 
                                    <div className="p-10">
                                        <p className="text-gray-800 text-base sm:text-lg">1.3 MP IR Fixed Network Turret Camera</p>
                                        <ul className="mt-6 flex flex-col gap-3">
                                            {
                                                [
                                                    "2.54 cm (1/2.8 inch) progressive scan CMOS",
                                                    "1280 × 960@30fps",
                                                    "2.8 mm/4 mm fixed lens",
                                                    "H.265+/H.265/H.264+/H.264",
                                                    "3D DNR",
                                                    "Up to 10 m IR range"
                                                ].map((title) => (
                                                    <li key={title} className="flex gap-3 text-gray-500">
                                                        <span className="text-sm sm:text-base">{title}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div> :
                                    <div className="flex flex-col gap-10 p-10">
                                        {
                                            PRODUCT_DETAILS.map(({ title, details }) => (
                                                <div className="border-t first:border-t-0 border-gray-200">
                                                    <h3 className="border-b text-blue-main border-gray-200 py-4 text-lg sm:text-xl">{title}</h3>
                                                    <ul className="mt-4 flex flex-col">
                                                        {
                                                            details.map(([subTitle, description]) => (
                                                                <li key={subTitle} className="flex gap-12 py-3 text-sm sm:text-base">
                                                                    <span className="flex-1 text-gray-800 min-w-30">{subTitle}</span>
                                                                    <span className="flex-2 text-gray-400">{description}</span>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24 px-4 xs:px-6 lg:px-10">
                <div className="mx-auto max-w-[var(--max-width)]">
                    <h3 className="text-2xl sm:text-3xl">Products similar to this</h3>
                    <ul className="mt-10 sm:mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {
                            PRODUCTS.map(({ title, price, image }, index) => (
                                <li key={index} className="">
                                    <Link href="/products/1" title={title} className="group w-full h-full rounded-md bg-white shadow-lg shadow-black/5 p-2 flex flex-col gap-4">
                                        <div className="relative border border-gray-100 rounded-md overflow-hidden aspect-square">
                                            <Image src={image} fill alt="Product image" className="object-cover" />
                                        </div>
                                        <div className="flex-1 justify-between flex flex-col gap-2">
                                            <h3 className="tracking-tight group-hover:underline text-sm md:text-base text-blue-main">{title.length > 32 ? `${title.slice(0, 32)}...` : title}</h3>
                                            <div className="flex items-end gap-4 justify-between">
                                                <span className="text-base md:text-lg">NGN {price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}