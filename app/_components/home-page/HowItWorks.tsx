


const STEPS = [
    {
        title: "Installation",
        desc: "Isarsoft Perception can be installed in a short amount of time and with little effort."
    },
    {
        title: "Configuration",
        desc: "The configuration is done via an intuitive dashboard in a few simple steps."
    },
    {
        title: "Evaluation",
        desc: "Continuous evaluation and collection of KPIs to build a solid database and identify trends."
    },
    {
        title: "Decision making",
        desc: "Whether planner, analyst or operator - Isarsoft Perception helps to make the right decisions."
    },
]

export default function HowItWorks() {


    return (
        <section className="min-h-[calc(100vh_-_var(--header-large-height))] bg-dark-blue px-10">
            <div className="mx-auto max-w-[var(--max-width)] pt-40 pb-20">
                <div className="flex flex-col">
                    <h3 className="text-blue-600 text-base uppercase font-semibold">How it works</h3>
                    <h2 className="text-4xl text-white mt-6">Video analysis, easier than ever before.</h2>
                    <p className="text-white mt-6 max-w-[64ch] leading-[2rem] text-lg">Isarsoft Perception turns security cameras into intelligent sensors.</p>
                </div>
                <ul className="mt-14 grid grid-cols-4 gap-4">
                    {
                        STEPS.map(({ title, desc }, index, arr) => (
                            <li key={title} className={`${index === arr.length - 1 ? 'bg-yellow-300 text-black' : 'bg-white/5 text-white'} relative flex gap-4 p-4 pb-8 border border-white/20 rounded-2xl`}>
                                <div className="">
                                    <span className={`${index === arr.length - 1 ? 'bg-black text-yellow-300' : 'bg-blue-500 text-white'} flex items-center justify-center w-10 aspect-square rounded-full`}>{index + 1}</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl h-10 flex items-center">{title}</h3>
                                    <p className="text-sm font-light">{desc}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}