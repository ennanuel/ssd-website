

const POINTS = [
    {
        numbers: "10+",
        title: "Employees from 7 countries",
        description: "Working together on pushing the boundaries of video analytics in lean, interdisciplinary teams"
    },
    {
        numbers: "1,000+",
        title: "Successful installations",
        description: "Together with our patners, we have successfully installed over 200 surveillance systems."
    },
    {
        numbers: "12+",
        title: "Plug & Play integrations",
        description: "For a seamless user experience with cameras, video management systems and data driven applications"
    },
]


export default function BulletPoints() {

    return (
        <div className="px-4 xs:px-6 md:px-10">
            <ul className="mx-auto max-w-[var(--max-width)] grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 pb-20">
                {
                    POINTS.map(({ numbers, title, description }) => (
                        <li key={title} className="bg-white flex flex-col p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-blue-600">{numbers}</h3>
                            <h2 className="text-gray-800 text-lg font-semibold">{title}</h2>
                            <p className="mt-2 text-sm text-gray-600">{description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}