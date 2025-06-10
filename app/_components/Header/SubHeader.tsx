
import Link from "next/link";
import { type IconType } from "react-icons";

type SubLink = { 
    title: string; 
    description: string; 
    href: string; 
    Icon: IconType;
};

type Props = {
    links?: SubLink[];
    showingSubLinks: boolean;
    displaySubLinks: () => void;
    hideSubLinks: () => void;
    toggleMobileHeader: () => void;
}

export default function SubHeader({ links, showingSubLinks, displaySubLinks, hideSubLinks, toggleMobileHeader }:  Props) {

    if(!links?.length) return;
    
    return (
        <div onMouseOver={displaySubLinks} onMouseOut={hideSubLinks} className={`${showingSubLinks ? 'block' : 'hidden'} pt-0 lg:pt-8 lg:absolute top-[75%] left-1/2 lg:-translate-x-1/2 w-full max-w-[var(--max-width)]`}>
            <div className={`lg:animate-into-view origin-top w-full flex overflow-hidden lg:bg-gradient-to-br from-blue-main to-blue-600 rounded-lg lg:shadow-xl shadow-black/10`}>
                <ul className="p-4 sm:p-6 md:px-10 lg:p-6 flex-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {
                        links.map(({ title, description, href, Icon}) => (
                            <li key={title}>
                                <Link href={href} onClick={toggleMobileHeader} className="group flex items-center gap-4 lg:p-3 rounded-lg hover:bg-white/10">
                                    <span className="flex items-center justify-center w-12 aspect-square rounded-2xl bg-white/20">
                                        <Icon size={20} />
                                    </span>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-semibold">{title}</span>
                                        <span className="text-xs text-white/70">{description}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
};