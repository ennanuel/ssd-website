"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";

const TESTIMONIALS = [
    {
        role: "Head of Security",
        company: "Metro City Mall",
        image: "/images/testimonials/testimonial1.jpg",
        logo: "/icons/logo.png",
        review: "Safe Security Dynamics has transformed how we manage vehicle access. The real-time alerts have significantly improved our response time to potential threats."
    },
    {
        role: "Operations Manager",
        company: "Greenway Logistics",
        image: "/images/testimonials/testimonial2.jpg",
        logo: "/icons/logo.png",
        review: "The vehicle tracking and reporting features have made our fleet operations much more efficient. Setup was quick and the system is easy to use."
    },
    {
        role: "Chief of Police",
        company: "Eastwood Police Department",
        image: "/images/testimonials/testimonial3.jpg",
        logo: "/icons/logo.png",
        review: "With Safe Security Dynamics, we've streamlined vehicle monitoring across multiple checkpoints. It’s been a game changer for city-wide traffic and threat control."
    },
    {
        role: "Facility Manager",
        company: "Riverview Gated Estate",
        image: "/images/testimonials/testimonial4.jpg",
        logo: "/icons/logo.png",
        review: "The ability to manage resident and visitor vehicles has greatly improved our estate’s security. The blacklist alert system is especially valuable."
    },
    {
        role: "IT Director",
        company: "Northbridge University",
        image: "/images/testimonials/testimonial5.jpg",
        logo: "/icons/logo.png",
        review: "Integrating Safe Security Dynamics into our existing camera network was seamless. The dashboard is intuitive and perfect for monitoring campus traffic."
    }
];

export default function Testimonials() {
    const timeout = useRef<NodeJS.Timeout>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonial = useMemo(() => TESTIMONIALS[currentIndex] || TESTIMONIALS[0], [currentIndex]);

    useEffect(() => {
        function showNextTestimonial() {
            setCurrentIndex((previousIndex) => {
                const newIndex = previousIndex < (TESTIMONIALS.length - 1) ?
                    previousIndex + 1 :
                    0;
                return newIndex;
            })
        };
        timeout.current = setInterval(showNextTestimonial, 5000);
        return () => {
            if(timeout.current) clearTimeout(timeout.current);
        }
    }, [])

    return (
        <section className="bg-blue-300/10 px-4 xs:px-6 sm:px-10">
            <div className="mx-auto max-w-[var(--max-width)] pt-[120px] pb-20 flex flex-col gap-10">
                <div className="lg:min-h-[calc(100vh_-_40px_-_var(--header-large-height))] bg-dark-blue text-white overflow-hidden rounded-xl flex flex-col sm:flex-row">
                    <div className="hidden sm:block relative flex-1 lg:flex-auto lg:w-full lg:max-w-[640px] bg-black/50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark-blue after:opacity-30">
                        <Image src={testimonial.image} alt="Testimonial image" fill className="object-cover block" />
                    </div>
                    <div className="flex-1 flex flex-col gap-6 px-10 lg:px-18 py-8 lg:py-14">
                        <div className="flex-1 flex flex-col justify-center gap-4">
                            <IoMdQuote size={40} />
                            <p className="text-base sm:text-lg lg:text-xl font-light leading-[1.8rem] lg:leading-[2rem]">{testimonial.review}</p>
                        </div>
                        <div className="flex">
                            <div className="flex-1 flex flex-col gap-1 border-b border-white/20 py-4">
                                <h3 className="text-sm sm:text-base">{testimonial.role}</h3>
                                <h4 className="text-xs sm:text-sm font-light">{testimonial.company}</h4>
                            </div>
                            <div className="border-b-3 border-white py-4">
                                <span className="relative overflow-hidden flex items-center justify-center w-14 aspect-square rounded-full bg-blue-main">
                                    <Image src={testimonial.logo} alt="Testimonial company logo" fill className="object-cover block" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end gap-8">
                    <div className="flex gap-2 pb-4">
                        {
                            TESTIMONIALS.map(({ company }, index) => (
                                <span key={company} className={`${index === currentIndex ? 'w-10 bg-blue-main' : 'w-2 bg-gray-500'} block h-2 rounded-full`}></span>
                            ))
                        }
                    </div>
                    <div className="flex gap-8">
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-white text-gray-800 hover:text-gray-600">
                            <FaArrowLeft size={20} />
                        </button>
                        <button className="flex items-center justify-center w-10 aspect-square rounded-full hover:bg-white text-gray-800 hover:text-gray-600">
                            <FaArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}