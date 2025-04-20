import Image from "next/image"


const SPONSORS = [
    {
        name: "Github",
        logo: "/icons/Company logo.png"
    },
    {
        name: "Dropbox",
        logo: "/icons/Company logo2.png"
    },
    {
        name: "Forbes",
        logo: "/icons/Press logo.png"
    },
    {
        name: "Bloomberg",
        logo: "/icons/Press logo1.png"
    }
]


export default function Sponsors() {


    return (
        <div className="w-full bg-blue-300/10 px-4 xs:px-6 md:px-10">
            <div className="mx-auto max-w-[var(--max-width)] flex flex-col items-center justify-center gap-10 pt-16 pb-20">
                <p className="text-gray-800 text-base sm:text-lg text-center">Fast, dynamic web experiences powered by the SSD platform</p>
                <ul className="w-full flex gap-10 item-center justify-center">
                    {
                        SPONSORS.map(({ name, logo }) => (
                            <li key={name} className="flex items-center justify-center px-0 md:px-6 lg:px-8">
                                <Image src={logo} alt="Sponsor logo" width={200} height={200} className="w-full grayscale max-w-[120px] h-auto object-cover" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}