import Image from "next/image";

const HERO_IMAGES = [
    'vehicle-detection-1.png',
    'vehicle-detection-2.webp',
    'vehicle-detection-3.jpg'
];

export default function Hero() {
    return (
        <section className="px-4 xs:px-6 md:px-10 overflow-hidden">
            <div className="mx-auto pb-10 lg:pb-0 max-w-[var(--max-width)] min-h-[calc(100dvh_-_var(--header-large-height))] flex flex-col-reverse lg:flex-row gap-14">
                <div className="flex-1 flex flex-col lg:py-30 gap-12">
                    <div className="flex-1 flex flex-col justify-start lg:justify-center">
                        <h1 className="mt-4 text-4xl sm:text-5xl leading-[2.6rem] sm:leading-[3.6rem] max-w-[20ch] text-gray-900">We make every camera count</h1>
                        <p className="mt-6 text-lg leading-[2rem] max-w-[40ch] text-gray-800">Isarsoft helps customers and partners to utilize the full potential of security camera systems through artificial intelligence.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="block w-10 h-2 rounded-full bg-blue-main"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-400"></span>
                        <span className="block w-2 h-2 rounded-full bg-gray-400"></span>
                    </div>
                </div>
                <div className="relative min-h-100 flex-1">
                    <div className="absolute pt-20 pb-14 bottom-0 left-0 w-full h-full max-h-[720px] grid grid-cols-[repeat(2,_auto)] grid-rows-[repeat(2,_auto)] gap-4">
                        {
                            HERO_IMAGES.map((filename, index) => (
                                <div key={filename} className={`${index === 0 ? 'row-span-2' : 'row-span-1'} min-w-64 col-span-1 relative`}>
                                    <Image src={`/images/${filename}`} alt="Demo image" fill className="object-cover rounded-xl" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}