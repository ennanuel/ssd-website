import Image from "next/image";
import Link from "next/link";
import { type IconType } from "react-icons";
import { GrGlobe } from "react-icons/gr";
import NavLinkContainer from "./NavLinkContainer";
import ToggleMobileHeaderButton from './ToggleMobileHeaderButton';


type SubLink = {
    title: string;
    description: string;
    href: string;
    Icon: IconType;
};

type NavLink = {
    title: string;
    href: string;
    subLinks?: SubLink[];
};

type Props = {
    links: NavLink[];
    showMobileHeader: boolean;
    showingSubLinks: boolean;
    toggleShowMobileHeader: () => void;
    displaySubLinks: () => void;
    hideSubLinks: () => void;
    toggleSubLinksDisplay: () => void;
}

export default function DesktopHeader({ links, showMobileHeader, showingSubLinks, toggleShowMobileHeader, displaySubLinks, hideSubLinks, toggleSubLinksDisplay }: Props) {

    return (
        <div className="bg-dark-blue text-white peer px-4 xs:px-6 sm:px-10 h-[var(--header-large-height)]">
            <div className="mx-auto h-full flex justify-between items-center max-w-[var(--max-width)]">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={"/icons/logo.svg"} width={64} height={64} alt="Company logo" className="w-10 aspect-square" />
                    <span className="flex flex-col">
                        <h3 className="hidden sm:block font-light text-white uppercase text-sm tracking-tight">Safe Security Dynamics</h3>
                        <h3 className="sm:hidden font-light text-white uppercase text-sm tracking-tight">SSD</h3>
                        <p className="font-light text-xs text-white">Safety First</p>
                    </span>
                </Link>
                <nav className="hidden lg:flex gap-10 items-center">
                    <div className="">
                        <ul className="flex items-center gap-4">
                            {
                                links.map((navLink, index) => (
                                    navLink.href !== "/contact" ?
                                        <NavLinkContainer 
                                            {...navLink} 
                                            key={index} 
                                            showingSubLinks={showingSubLinks}
                                            displaySubLinks={displaySubLinks}
                                            hideSubLinks={hideSubLinks}
                                            toggleSubLinksDisplay={toggleSubLinksDisplay}
                                            toggleMobileHeader={toggleShowMobileHeader}
                                        /> :
                                        null
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link href='/contact' className="flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 px-8 h-12 rounded-md">
                            <span className="text-sm">Contact</span>
                        </Link>
                        <button className="h-12 text-white rounded-full hover:text-blue-400 flex items-center justify-center gap-2">
                            <GrGlobe size={20} />
                            <span className="text-sm">EN</span>
                        </button>
                    </div>
                </nav>
                <div className="flex lg:hidden gap-6 sm:gap-8">
                    <button className="h-12 text-white rounded-full hover:text-blue-400 flex items-center justify-center gap-2">
                        <GrGlobe size={20} />
                        <span className="text-sm">EN</span>
                    </button>
                    <ToggleMobileHeaderButton showingMobileHeader={showMobileHeader} toggleMobileHeader={toggleShowMobileHeader} />
                </div>
            </div>
        </div>
    )
}