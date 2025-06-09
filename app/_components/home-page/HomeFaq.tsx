import { FaAngleDown } from "react-icons/fa6";



const FAQs = [
  {
    question: "What is Safe Security Dynamics and how does it work?",
    answer: "Safe Security Dynamics uses ALPR (Automatic License Plate Recognition) technology to detect, track, and analyze vehicles through connected security cameras. It also supports user registration and blacklist alerting."
  },
  {
    question: "What kind of cameras are compatible with the system?",
    answer: "The system works with most IP-based security cameras. No special hardware is required—our software adapts to your existing surveillance infrastructure."
  },
  {
    question: "Can I receive alerts for specific vehicles or license plates?",
    answer: "Yes, you can configure custom alerts for blacklisted, whitelisted, or flagged vehicles directly through the dashboard."
  },
  {
    question: "Is the system suitable for private properties and gated communities",
    answer: "Absolutely. Safe Security Dynamics is ideal for residential estates, commercial facilities, and other controlled-access environments."
  },
  {
    question: "How is data stored and secured?",
    answer: "All data is encrypted and stored securely. We follow industry best practices for privacy, access control, and compliance with local data protection regulations."
  }
];


export default function Faq() {

    return (
        <section className="bg-blue-300/10 px-0 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] pt-20 pb-[160px] min-h-screen flex flex-col md:flex-row justify-between gap-12 lg:gap-20">
                <div className="px-4 xs:px-0 md:sticky top-[120px] h-fit pb-0 md:pb-20 flex flex-col">
                    <h2 className="text-4xl text-gray-900 mt-6 max-w-[28ch]">FAQ</h2>
                    <p className="text-gray-800 mt-8 max-w-[48ch] leading-[2rem] text-base sm:text-lg flex flex-col gap-2 sm:gap-6">
                        <span>Can&apos;t find the answer to your question?</span>
                        <span><a href="#" className="text-blue-600">Contact us</a> now!</span>
                    </p>
                </div>
                <div className="flex-1 max-w-[880px]">
                    <ul className="flex flex-col">
                        {
                            FAQs.map(({ question, answer }, index) => (
                                <li key={index} className="group border-b border-gray-200 pl-4 xs:pl-4 pr-4">
                                    <div className="hover:text-blue-600 text-gray-800 py-4 sm:py-8 flex items-center justify-between gap-6">
                                        <h4 className="text-base sm:text-lg group-hover:translate-x-4">{question}</h4>
                                        <FaAngleDown size={20} />
                                    </div>
                                    <p className="text-base text-gray-800 max-w-[88ch] hidden">{answer}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}