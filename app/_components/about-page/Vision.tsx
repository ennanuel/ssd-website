
import Image from "next/image";


export default function Vision () {

    return (
        <section>
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-30 pb-20 grid grid-cols-4 grid-rows-2 gap-4">
                <div className="flex flex-col justify-center col-span-2 p-8">
                    <h3 className="text-sm font-semibold text-blue-800 uppercase">Our vision</h3>
                    <h2 className="mt-4 text-4xl leading-[3.6rem] text-gray-800 max-w-[32ch]">Today and in the future</h2>
                    <p className="mt-8 text leading-[1.8rem] text-gray-600 max-w-[56ch]"> Our value lies in delivering precise, real-time vehicle recognition technology that empowers businesses, law enforcement, and communities to operate safely and efficiently.</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/office1.jpg" alt="Image of our vision" fill className="block object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                    <Image src="/images/office2.jpg" alt="Image of our vision" fill className="block object-cover" />
                </div>
                <div className="col-span-2 relative overflow-hidden rounded-2xl">
                    <Image src="/images/collab.jpg" alt="Image of our vision" fill className="block object-cover" />
                </div>
                <div className="col-span-2 relative overflow-hidden rounded-2xl">
                    <Image src="/images/collab2.jpg" alt="Image of our vision" fill className="block object-cover" />
                </div>
            </div>
        </section>
    )
}