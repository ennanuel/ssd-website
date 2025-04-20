import Image from "next/image"


const STAFFS = [
    {
        name: "Emeka Agomoh",
        image: "/images/profile1.JPG",
        role: "Co-Founder & Chief Executive Officer (CEO)",
        description: "Oskar Haller studied at Ludwig-Maximilians University Munich, Fudan University Shanghai and Technical University Munich (M.Sc.) and has a wide base of business knowledge and technical understanding."
    },
    {
        name: "Ifeanyi Nneji",
        image: "/images/profile2.JPG",
        role: "Co-Founder & Chief Executive Officer (CEO)",
        description: "Philipp Schmidt holds an M.Sc. in Computer Science from the Karlsruhe Institute of Technology (KIT) with a focus in research on humanoid robotics and artificial intelligence."
    }
]


export default function Staff() {

    return (
        <section className="bg-blue-300/10 px-4 xs:px-6 md:px-10">
            <div className="mx-auto max-w-[var(--max-width)] py-30">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">Meet the team</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 text-center">The management board of SSD</h2>
                    <p className="text-gray-800 mt-4 max-w-[80ch] leading-[2rem] text-lg text-center">The management board consists of the founders Emeka Agomoh and Ifeanyi Nneji.</p>
                </div>
                <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center ">
                    {
                        STAFFS.map(({ name, image, role, description }) => (
                            <li key={name} className="p-6 sm:p-10 flex flex-col rounded-4xl items-center justify-center border border-gray-200 bg-white">
                                <Image src={image} width={200} height={200} alt={`Image of ${name}`} className="w-20 aspect-square rounded-full block" />
                                <h3 className="mt-8 text-2xl text-gray-900 text-center">{name}</h3>
                                <h4 className="mt-2 mb-6 text-sm text-gray-500 text-center">{role}</h4>
                                <hr className="w-40 h-[2px] rounded-t-full bg-blue-400 border-none outline-none" />
                                <p className="mt-6 text-sm text-gray-600 font-light max-w-[48ch] text-center">{description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}