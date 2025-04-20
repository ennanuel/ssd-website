
import Image from "next/image";


const IMAGES = [
    'office1.jpg',
    'office2.jpg',
    'collab.jpg',
    'collab2.jpg'
]

export default function Vision () {

    return (
        <section className="px-4 xs:px-6 md:px-10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-30 pb-20 grid grid-cols-4 grid-rows-2 gap-4">
                <div className="col-span-full md:col-span-2 flex flex-col justify-center md:p-8">
                    <h3 className="text-sm font-semibold text-blue-800 uppercase">Our vision</h3>
                    <h2 className="mt-4 text-4xl leading-[3.6rem] text-gray-800 max-w-[32ch]">Today and in the future</h2>
                    <p className="mt-8 text leading-[1.8rem] text-gray-600 max-w-[56ch]"> Our value lies in delivering precise, real-time vehicle recognition technology that empowers businesses, law enforcement, and communities to operate safely and efficiently.</p>
                </div>
                {
                    IMAGES.map((filename, index) => (
                        <div key={filename} className={`${index >= 2 ? `${index === 2 ? 'hidden sm:block' : 'col-span-full'} sm:col-span-2` : 'col-span-1 hidden md:block'} relative`}>
                            <Image src={`/images/${filename}`} fill alt="Image of our vision" className="block rounded-2xl object-cover" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}