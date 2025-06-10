
import { type IconType } from "react-icons";
import NavLinkContainer from "./NavLinkContainer";

type SubLink = {
    title: string;
    description: string;
    href: string;
    Icon: IconType
}

type NavLink = {
    title: string;
    href: string;
    subLinks?: SubLink[];
};

type Props = {
    links: NavLink[];
    showHeader: boolean;
    showingSubLinks: boolean;
    displaySubLinks: () => void;
    hideSubLinks: () => void;
    toggleSubLinksDisplay: () => void;
    toggleShowMobileHeader: () => void;
}

export default function MobileHeader({ showHeader, links, showingSubLinks, toggleSubLinksDisplay, toggleShowMobileHeader, displaySubLinks, hideSubLinks }: Props) {

    return (
        <nav className={`${showHeader ? 'block lg:hidden' : 'hidden'} -mt-0.25 w-full max-h-[calc(100dvh_-_var(--header-large-height))] overflow-y-auto bg-dark-blue text-white shadow-xl shadow-black/5`}>
            <ul className="flex flex-col">
                {
                    links.map((navLink) => (
                        <NavLinkContainer 
                            {...navLink} 
                            key={navLink.title} 
                            showingSubLinks={showingSubLinks}
                            hideSubLinks={hideSubLinks}
                            displaySubLinks={displaySubLinks}
                            toggleSubLinksDisplay={toggleSubLinksDisplay}
                            toggleMobileHeader={toggleShowMobileHeader}
                        />
                    ))
                }
            </ul>
        </nav>
    )
}