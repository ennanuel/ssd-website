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
        <div className="w-full bg-blue-200/10">
            <ul className="mx-auto max-w-[var(--max-width)] flex gap-10 item-center justify-center py-10">
                {
                    SPONSORS.map(({ name, logo }) => (
                        <li key={name} className="flex items-center justify-center px-8">
                            <Image src={logo} alt="Sponsor logo" width={200} height={200} className="w-full grayscale max-w-[120px] h-auto object-cover" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}