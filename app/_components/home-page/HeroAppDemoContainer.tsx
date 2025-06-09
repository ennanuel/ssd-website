
import Image from "next/image";
import { JSX } from "react";
import { IoPerson } from "react-icons/io5";


export default function HeroAppDemoContainer({ children }: { children: JSX.Element }) {
    return (
        <div className="h-full w-full max-h-[var(--max-hero-height)]">
            <div className="flex relative left-0 lg:left-[10%] w-[110%] sm:w-full lg:w-[110%] h-full rounded-2xl overflow-hidden bg-gradient-to-r from-white/20 to-white/5">
                <DemoSidebar />
                {children}
            </div>
        </div>
    )
};

function DemoSidebar() {
    return (
        <div className="w-12 md:w-14 flex flex-col bg-blue-500">
            <span className="w-full aspect-square flex items-center justify-center bg-blue-main">
                <Image src="/icons/logo.png" width={40} height={40} alt="Company logo" className="w-10 h-auto rounded-full" />
            </span>
            <div className="flex-1 flex flex-col justify-between items-center gap-4 md:gap-6 p-3 py-6">
                <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-2 md:gap-3">
                    {
                        [1, 2, 3, 4].map((item) => (
                            <span key={item} className="block w-5 md:w-[28px] aspect-square rounded-sm bg-white/30" />
                        ))
                    }
                </div>
                <div style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.3), black , rgba(0, 0, 0, 0.3))' }} className="flex flex-col gap-2 md:gap-3">
                    {
                        [1, 2, 3, 4].map((item) => (
                            <span key={item} className="block w-5 md:w-[28px] aspect-square rounded-sm bg-white/30" />
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center justify-center p-2 md:p-3">
                <span className="flex items-end justify-center mb-2 md:mb-3 bg-white text-gray-300 aspect-square w-full rounded-full overflow-hidden">
                    <IoPerson size={28} className="mb-[-2px]" />
                </span>
            </div>
        </div>
    )
}