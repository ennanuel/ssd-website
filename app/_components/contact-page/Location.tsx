import Image from "next/image";



export default function Location () {

    return (
        <section className="bg-dark-blue text-white px-4 xs:px-6 lg:px-10">
            <div className="mx-auto max-w-[var(--max-width)] py-30 border-b border-white/20 min-h-screen flex flex-col md:flex-row items-center gap-20">
                <div className="relative flex-1">
                    <div className="relative md:absolute md:top-1/2 right-0 md:-translate-y-1/2 w-full md:w-[120%]">
                        <Image src="/images/office2.jpg" alt="Office image" width={1024} height={1024} className="max-h-[480px] min-w-40 min-h-60 w-full object-cover rounded-2xl block" />
                    </div>
                </div>
                <div className="w-full md:w-auto flex flex-col">
                    <h2 className="text-3xl sm:text-4xl">We are here for you</h2>
                    <p className="mt-6 text-base sm:text-lg leading-[1.6rem] sm:leading-[2rem] max-w-[48ch]">No matter where and in which time zone you and your project are located - our team and network of qualified partner companies support you on-site and remote.</p>

                    <div className="flex gap-6 sm:gap-8 items-center mt-10 p-6 md:p-8 rounded-2xl bg-white/5">
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