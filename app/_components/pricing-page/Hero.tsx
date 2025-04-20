import { AiOutlineArrowDown } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";


const PRICING = [
  {
    title: "Basic",
    description: "Our system identifies multiple vehicle for comprehensive monitoring.",
    price: "$2500",
    backgroundColor: "bg-white",
    features: [
      "Detects license plate number",
      "Identifies vehicle direction",
      "Operates under various weather",
      "Supports multi-vehicle tracking"
    ],
    buttonText: "Learn more"
  },
  {
    title: "Pro",
    description: "Our system identifies multiple vehicle for comprehensive monitoring.",
    price: "$3800",
    backgroundColor: "bg-white",
    features: [
      "Detects license plate number",
      "Identifies vehicle direction",
      "Operates under various weather",
      "Supports multi-vehicle tracking"
    ],
    buttonText: "Learn more",
    highlighted: true
  },
  {
    title: "Pro",
    description: "Our system identifies multiple vehicle for comprehensive monitoring.",
    price: "$3800",
    backgroundColor: "bg-white",
    features: [
      "Detects license plate number",
      "Identifies vehicle direction",
      "Operates under various weather",
      "Supports multi-vehicle tracking"
    ],
    buttonText: "Learn more",
    highlighted: true
  },
  {
    title: "Custom",
    description: "Our system identifies multiple vehicle for comprehensive monitoring.",
    price: "Let's Talk!",
    backgroundColor: "bg-white",
    features: [
      "Detects license plate number",
      "Identifies vehicle direction",
      "Operates under various weather",
      "Supports multi-vehicle tracking"
    ],
    buttonText: "Book A Call",
    highlighted: true
  }
];

export default function Hero() {

    return (
        <section className="bg-dark-blue text-white px-4 xs:px-6 md:px-10">
            <div className="mx-auto max-w-[var(--max-width)] pt-30 pb-20">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="text-5xl text-center">Pricing</h1>
                    <p className="text-lg leading-[2rem] max-w-[64ch] text-center">We offer our services in considerable and affordable plans according to your budget</p>
                </div>
                <ul className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
                    {
                        PRICING.map(({ title, description, price, features, buttonText }) => (
                            <li key={title} className="flex flex-col bg-white rounded-4xl">
                                <div className="flex flex-col gap-2 p-8 min-h-30">
                                    <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
                                    <p className="text-sm text-gray-500">{description}</p>
                                </div>
                                <div className="bg-blue-300/10 flex flex-col gap-4 px-8 py-6">
                                    <div className="flex items-end gap-2">
                                        <h4 className="whitespace-nowrap text-4xl font-semibold text-gray-900">{price}</h4>
                                        <span className="text-sm text-gray-600">{/\d/.test(price) ? '/month' : ''}</span>
                                    </div>
                                    <button className="flex items-center justify-center h-12 px-8 rounded-md bg-blue-600">
                                        <span className="text-white">{buttonText}</span>
                                    </button>
                                </div>
                                <div className="flex flex-col gap-8 pt-6 p-8">
                                    <p className="text-base font-semibold text-gray-800">Highlighted features: </p>
                                    <ul className="flex flex-col gap-6">
                                        {
                                            features.map((item) => (
                                                <li key={item} className="flex items-center justify-start gap-4">
                                                    <MdCheckCircle size={20} className="text-blue-600" />
                                                    <span className="text-sm text-gray-700">{item}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-14 flex items-center justify-center">
                    <a href="#features" className="w-fit h-14 px-6 flex items-center justify-center gap-3 rounded-md border border-white/40 hover:bg-white/5">
                        <span className="text-sm sm:text-base text-white">See full feature comparison</span>
                        <AiOutlineArrowDown size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}