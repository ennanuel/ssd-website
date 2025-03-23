import { FiCheckCircle } from "react-icons/fi";


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
    title: "Premium",
    description: "Our system identifies multiple vehicle for comprehensive monitoring.",
    price: "$4500",
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

export default function Pricing() {

    return (
        <div className="bg-blue-300/10">
            <div className="min-h-screen mx-auto max-w-[var(--max-width)] pt-[120px] pb-20">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-blue-800 text-sm uppercase text-center font-semibold">Software to meet any need</h3>
                    <h2 className="text-4xl text-gray-900 mt-6 text-center">Diverse plans for different projects</h2>
                    <p className="text-gray-800 mt-6 max-w-[64ch] leading-[2rem] text-lg text-center">We offer a range of flexible plans to meet the unique needs and budgets of various organizations.</p>
                </div>
                <ul className="grid grid-cols-4 gap-4 mt-20">
                    {
                        PRICING.map(({ title, description, price, backgroundColor, features, buttonText }) => (
                            <li key={title} className="group">
                                <a href="#" className={`${backgroundColor} flex flex-col p-6 pb-0 rounded-3xl border border-gray-200 group-hover:border-blue-600 group-hover:-translate-y-4`}>
                                    <h3 className="text-blue-main font-semibold text-3xl">{title}</h3>
                                    <p className="text-sm leading-[1.5rem] text-gray-800/80 mt-4">{description}</p>
                                    <div className="flex items-end mt-6">
                                        <span className="text-gray-800 text-2xl font-semibold">{price}</span>
                                        <span className="text-gray-800/50 text-xs">{/\d/.test(price) ?  '/month' : ''}</span>
                                    </div>
                                    <ul className="py-6 mt-6 flex flex-col gap-5 border-t border-y-gray-200">
                                        {
                                            features.map((item) => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <FiCheckCircle size={16} className="text-blue-400" />
                                                    <span className="text-sm text-gray-800/80">{item}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <button className="w-fit mx-auto mt-4 -mb-6 flex items-center justify-center px-10 rounded-md h-14 bg-blue-500 text-white">
                                        <span className="text-sm font-semibold">{buttonText}</span>
                                    </button>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}