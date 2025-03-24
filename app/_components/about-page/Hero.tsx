import Image from "next/image";


export default function Hero() {
    return (
        <section className="px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen flex gap-14">
                <div className="flex flex-col py-30">
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="mt-4 text-5xl leading-[3.6rem] max-w-[20ch] text-gray-900">We make every camera count</h1>
                        <p className="mt-6 text-lg leading-[2rem] max-w-[40ch] text-gray-800">Isarsoft helps customers and partners to utilize the full potential of security camera systems through artificial intelligence.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="block w-10 h-2 rounded-full bg-blue-main"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-500"></span>
                    </div>
                </div>
                <div className="flex-1 pt-20 pb-14 grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="col-span-1 row-span-2 relative overflow-hidden rounded-xl">
                        <Image src="/images/vehicle-detection-1.png" alt="Demo image" fill className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl">
                        <Image src="/images/vehicle-detection-2.webp" alt="Demo image" fill className="object-cover" />
                    </div>
                    <div className="col-span-1 row-span-1 relative overflow-hidden rounded-xl">
                        <Image src="/images/vehicle-detection-3.jpg" alt="Demo image" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}