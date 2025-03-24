import Image from "next/image";
import { FiCheckSquare } from "react-icons/fi";

type Props = {
    title: string;
    desc: string;
    index: number;
    solutions: string[];
    imageSrc: string;
}

const PROBLEMS_AND_SOLUTIONS = [
    {
        title: "Law enforcement agencies",
        desc: "Safe Security Dynamics provides specialized security solutions designed for government agencies and municipal organizations.",
        solutions: ["Kidnapping & Insecurity" , "Traffic control", "Personnel check"],
        imageSrc: "/images/vehicle-detection-1.png",
    },
    {
        title: "Road safety sector",
        desc: "Our integrated systems leverage cutting-edge technology to enhance investigations, improve traffic management, and enforce regulatory compliance.",
        solutions: ["Vehicle inspection" , "Checking driver record", "Instant alert system"],
        imageSrc: "/images/vehicle-detection-4.jpeg"
    },
    {
        title: "Health sector",
        desc: "Safe Security Dynamics provides specialized security solutions designed for government agencies and municipal organizations.",
        solutions: ["Kidnapping & Insecurity" , "Traffic control", "Personnel check"],
        imageSrc: "/images/vehicle-detection-2.webp",
    },
]

function ProblemSolutionComponent({ index, title, solutions, desc, imageSrc }: Props) {

    return (
        <article className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-300/10'} px-10`}>
            <div className={`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mx-auto max-w-[var(--max-width)] min-h-[calc(100vh_-_var(--header-large-height))] py-20 flex justify-between items-center gap-20`}>
                <div className="flex flex-col items-start justify-center">
                    <h2 className="text-4xl text-gray-800">{title}</h2>
                    <p className="text-gray-600 mt-6  max-w-[56ch] leading-[1.8rem] text-base">{desc}</p>
                    <ul className="flex flex-col gap-4 mt-10">
                        {
                            solutions.map((item) => (
                                <li key={item} className="flex items-center gap-4">
                                    <FiCheckSquare size={20} className="text-blue-600" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="relative flex-1 max-w-[720px] aspect-square max-h-[400px]">
                    <Image src={imageSrc} fill alt="Demo image" className="rounded-2xl object-cover block" />
                </div>
            </div>
        </article>
    )
}

export default function ProblemsAndSolutions() {

    return (
        <section className="mt-20 px-10">
            <div className="mx-auto max-w-[var(--max-w-[var(--max-width)] flex flex-col items-center justify-center">
                <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">Agency use cases</h3>
                <h2 className="text-4xl text-gray-900 mt-6 text-center">How to we contribute to government agencies</h2>
                <p className="text-gray-800 mt-6 max-w-[64ch] leading-[2rem] text-lg text-center">We offer a range of flexible plans to meet the unique needs and budgets of various organizations.</p>
            </div>
            {
                PROBLEMS_AND_SOLUTIONS.map((item, index) => (
                    <ProblemSolutionComponent {...item} index={index} key={index} />
                ))
            }
        </section>
    )
}