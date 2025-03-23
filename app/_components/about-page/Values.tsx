import { BiSolidBadge } from "react-icons/bi";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoTelescope } from "react-icons/io5";
import { MdHandshake, MdPeople, MdTipsAndUpdates } from "react-icons/md";

const VALUES = [
    {
        title: "Innovation and passion",
        desc: "We do our best everyday in big things and small to advance ourselves, along with customers and partners.",
        Icon: MdTipsAndUpdates
    },
    {
        title: "Openness and partnership",
        desc: "In an increasingly complex world, many problems cannot be solved alone. That's why we work with partners at eye level to find joint solutions.",
        Icon: MdHandshake
    },
    {
        title: "Responsibility and safety",
        desc: "We stand for protection and responsible processing of sensitive data.",
        Icon: BsShieldFillCheck
    },
    {
        title: "Customer orientation and foresight",
        desc: "Our customers and partners are at the center of everything we do. Thereby long-term success is always more important to us than short-term profit.",
        Icon: IoTelescope
    },
    {
        title: "Team spirit and appreciation",
        desc: "We work together in interdisciplinary teams to achieve our goals and the goals of our customers and partners. Achievements are duly appreciated and celebrated.",
        Icon: MdPeople
    },
    {
        title: "Communication and Transparency",
        desc: "We value feedback and communicate relevant information and decisions transparently and early on.",
        Icon: BiSolidBadge
    },
]

export default function Values () {

    return (
        <section className="bg-blue-300/10">
            <div className="mx-auto max-w-[var(--max-width)] min-h-screen pt-[120px] pb-20">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">Our Values</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 text-center">The basis of our actions</h2>
                    <p className="text-gray-800 mt-4 max-w-[80ch] leading-[2rem] text-lg text-center">In our dealings with customers, partners and colleagues, our values form the basis of our actions.</p>
                </div>
                <ul className="mt-20 grid grid-cols-3 grid-rows-2 gap-6">
                    {
                        VALUES.map(({ title, desc, Icon }) => (
                            <li key={title} className="bg-white rounded-4xl flex flex-col items-center p-8 border border-gray-200">
                                <span className="w-14 aspect-square rounded-full bg-blue-300/20 flex items-center justify-center">
                                    <Icon size={32} className="text-blue-600" />
                                </span>
                                <h3 className="mt-6 text-blue-main text-center font-semibold text-xl">{title}</h3>
                                <p className="mt-3 text-sm text-center text-gray-600 font-light">{desc}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}