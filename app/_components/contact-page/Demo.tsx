import Image from "next/image";


const DEMO_IMAGES = [
    { id: 1, name: "Delaware", cameraStatus: "ACTIVE", cameraFootage: "/images/vehicle-detection-1.png", timeStamp: "12:00 AM"},
    { id: 2, name:"Commercial", cameraStatus: "DISABLED", cameraFootage: "/images/vehicle-detection-2.webp", timeStamp: "12:00 AM"},
    { id: 3, name:"Londonderry", cameraStatus: "DISABLED", cameraFootage: "/images/vehicle-detection-3.jpg", timeStamp:"12:00 AM"},
    { id: 4, name: "Barby", cameraStatus: "ACTIVE", cameraFootage: "/images/vehicle-detection-4.jpeg", timeStamp: "12:00 AM"},
    { id: 5, name: "Alpine", cameraStatus: "INACTIVE", cameraFootage: "/images/vehicle-detection-5.jpg", timeStamp: "12:00 AM"},
    { id: 6, name: "Crescent Oaks", cameraStatus: "DISABLED", cameraFootage: "/images/vehicle-detection-6.jpg", timeStamp: "12:00 AM"},
]

export default function Demo({ isLight }: { isLight?: boolean }) {

    return (
        <section className="px-4 xs:px-6 lg:px-10">
            <div className="mx-auto max-w-[var(--max-width)] lg:min-h-[calc(100vh_-_var(--header-large-height))] flex py-20">
                <div className={`${isLight ? 'bg-white border-gray-200' : 'bg-blue-300/10 border-white'} border flex-1 overflow-hidden rounded-2xl py-8 sm:py-10 px-6 sm:px-10 lg:px-20 flex gap-20`}>
                    <div className="flex flex-col justify-center gap-2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-[2rem] sm:leading-[2.6rem] lg:leading-[3.6rem] text-gray-900 max-w-[20ch]">Optimize your business processes</h2>
                        <p className="mt-4 sm:mt-0 text-gray-800 max-w-[32ch] text-sm sm:text-base leading-[1.2rem] sm:leading-[1.6rem]">Book your personal web demo with one of our experts now, for free.</p>
                        <button className="mt-12 sm:mt-6 w-fit flex items-center justify-center px-4 sm:px-8 lg:px-10 h-12 lg:h-14 rounded-md bg-blue-500 text-white">
                            <span className="text-sm whitespace-nowrap">Book 30 min. free call</span>
                        </button>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute top-0 left-0 w-full min-w-[360px] grid grid-cols-[repeat(3,_40%)] grid-rows-2 gap-5">
                            {
                                DEMO_IMAGES.map(({ id, name, cameraFootage }) => (
                                    <div key={id} className="flex flex-col aspect-square rounded-2xl overflow-hidden shadow-xl shadow-black/10">
                                        <div className="bg-white h-8 px-3 flex items-center gap-2">
                                            <span className="block w-3 aspect-square rounded-sm border border-gray-200" />
                                            <span className="flex-1 text-[.65rem] text-gray-600">{name}</span>
                                            <span className="block w-1 aspect-square rounded-full bg-green-400" />
                                            <span className="text-[.65rem] text-gray-600">online</span>
                                        </div>
                                        <div className="relative flex-1 w-full">
                                            <Image src={cameraFootage} alt="demo image" fill className="object-cover block" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}