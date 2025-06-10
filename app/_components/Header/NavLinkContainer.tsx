
import Link from "next/link";

import { type IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa6";

import SubHeader from "./SubHeader";

type SubLink = {
    title: string;
    description: string;
    href: string;
    Icon: IconType;
};

type Props = {
    title: string;
    href: string;
    subLinks?: SubLink[];
    showingSubLinks: boolean;
    displaySubLinks: () => void;
    hideSubLinks: () => void;
    toggleSubLinksDisplay: () => void;
    toggleMobileHeader: () => void;
};

export default function NavLinkContainer({ title, href, subLinks, showingSubLinks, toggleMobileHeader, toggleSubLinksDisplay, displaySubLinks, hideSubLinks }: Props) {

    return (
        <li key={title} className="peer">
            {
                Boolean(subLinks?.length) ?
                    <>
                    <button 
                        onClick={toggleSubLinksDisplay} 
                        onMouseOver={displaySubLinks} 
                        onMouseOut={hideSubLinks} 
                        className="peer lg:group xs:px-6 sm:px-10 lg:px-4 w-full lg:w-fit block text-white lg:hover:text-white/80 border-t lg:border-t-0 border-gray-200/20"
                    >
                        <span className="flex lg:justify-center justify-between items-center gap-6 lg:gap-4 h-14 mx-auto max-w-[var(--max-width)]">
                            <span className="text-sm">{title}</span>
                            <FaAngleDown size={12} className={`${showingSubLinks ? 'rotate-180' : ''} lg:mb-0.5 transition-transform duratoin-300`} />
                        </span>
                    </button>
                    <SubHeader 
                        links={subLinks}
                        showingSubLinks={showingSubLinks}
                        hideSubLinks={hideSubLinks} 
                        displaySubLinks={displaySubLinks}
                        toggleMobileHeader={toggleMobileHeader}
                    />
                    </> :
                    <Link 
                        onClick={toggleMobileHeader} 
                        href={href} 
                        className="lg:group lg:px-4 px-4 xs:px-6 sm:px-10 block text-white hover:text-blue-400 border-t lg:border-t-0 border-gray-200/20"
                    >
                        <span className="flex items-center justify-between lg:justify-center gap-6 lg:gap-4 h-14 mx-auto max-w-[var(--max-width)]">
                            <span className=" text-sm">{title}</span>
                        </span>
                    </Link>
            }
        </li>
    )
}