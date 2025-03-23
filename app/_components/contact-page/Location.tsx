import Image from "next/image";



export default function Location () {

    return (
        <section className="bg-dark-blue text-white">
            <div className="mx-auto max-w-[var(--max-width)] py-30 border-b border-white/20 min-h-screen flex items-center gap-20">
                <div className="relative flex-1">
                    <div className="absolute top-1/2 left-[-20%] -translate-y-1/2 w-[120%]">
                        <Image src="/images/office2.jpg" alt="Office image" width={1024} height={1024} className="w-full max-h-[65vh] object-cover rounded-2xl block" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl">We are here for you</h2>
                    <p className="mt-6 text-lg leading-[2rem] max-w-[48ch]">No matter where and in which time zone you and your project are located - our team and network of qualified partner companies support you on-site and remote.</p>

                    <div className="flex gap-8 items-center mt-10 p-8 rounded-2xl bg-white/5">
                        <Image src="/icons/ng-flag.png" alt="Nigerian flag" width={48} height={48} className="rounded-sm block w-8 h-auto" />
                        <div className="flex-1 flex flex-col">
                            <p className="text-sm">
                                <span>Isarsoft GmbH</span><br />
                                <span>Lichtenbergstraße 8</span><br />
                                <span>85748 Garching bei München</span><br />
                                <span>Nigeria</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}