import Image from "next/image";



export default function WhoWeAre() {

    return (
        <section className="px-10">
            <div className="mx-auto max-w-[var(--max-width)] flex justify-between gap-24 items-center py-20">
                <div className="relative w-full max-w-[720px] aspect-video rounded-2xl overflow-hidden">
                    <Image src="/images/vehicle-detection-3.jpg" alt="An image of SSD" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-blue-800 uppercase">Who is SSD?</h3>
                    <h2 className="mt-4 text-4xl leading-[3.6rem] text-gray-800 max-w-[32ch]">Your single source for roadway intelligence</h2>
                    <p className="mt-8 text leading-[1.8rem] text-gray-600 max-w-[56ch]">ALPR stands for Automatic License Plate Recognition, a technology used to automatically read and identify vehicle license plates using optical character recognition (OCR).<br />
                    Safe Security Dynamics’ LPR solutions leverage cutting-edge artificial intelligence and machine learning to far exceed traditional systems. </p>
                </div>
            </div>
        </section>
    )
}