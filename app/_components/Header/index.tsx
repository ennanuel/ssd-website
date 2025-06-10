"use client";

import { useState } from "react";
import { GoOrganization } from "react-icons/go";
import { LuTrafficCone } from "react-icons/lu";
import { RiBankLine, RiGovernmentLine, RiHotelBedLine, RiPoliceBadgeLine } from "react-icons/ri";
import { TbBuildingWarehouse, TbParking, TbSchool } from "react-icons/tb";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const NAV_LINKS = [
    {
        title: "Industries",
        href: "/industries",
        subLinks: [
            { title: "Transportation", description: "Monitor and manage traffic flow", href: "/transportation", Icon: LuTrafficCone },
            { title: "Security sector", description: "Enhance surveillance with smart tracking", href: "/security-sector", Icon: RiPoliceBadgeLine },
            { title: "Government agencies", description: "Enforce regulations and track vehicles", href: "/government-agencies", Icon: RiGovernmentLine },
            { title: "Schools", description: "Secure campus vehicle access", href: "/schools", Icon: TbSchool },
            { title: "Real estate", description: "Control access in gated communities", href: "/real-estate", Icon: TbBuildingWarehouse },
            { title: "Hotel", description: "Manage guest and staff vehicles", href: "/hotels", Icon: RiHotelBedLine },
            { title: "Organizations", description: "Track internal and visitor vehicles", href: "/organizations", Icon: GoOrganization },
            { title: "Banking", description: "Strengthen perimeter and asset security", href: "/banking", Icon: RiBankLine },
            { title: "Parking", description: "Automate entry, exit, and billing", href: "/parking", Icon: TbParking }
        ]
    },
    {
        title: "Products",
        href: "/products"
    },
    {
        title: "Resources",
        href: "/resources"
    },
    {
        title: "Pricing",
        href: "/pricing"
    },
    {
        title: "Contact us",
        href: "/contact"
    }
]

export default function Header() {
    const [showMobileHeader, setShowMobileHeader] = useState(false);
    const [showSubLinks, setShowSubLinks] = useState(false);

    const toggleShowMobileHeader = () => setShowMobileHeader(!showMobileHeader);

    const displaySubLinks = () => setShowSubLinks(true);
    const hideSubLinks = () => setShowSubLinks(false);
    const toggleSubLinksDisplay = () => {
        if(showSubLinks) hideSubLinks();
        else displaySubLinks();
    }

    return (
        <header className="sticky top-0 z-10 max-h-[var(--header-large-height)] font-inter">
            <DesktopHeader 
                links={NAV_LINKS} 
                showMobileHeader={showMobileHeader} 
                showingSubLinks={showSubLinks}
                toggleShowMobileHeader={toggleShowMobileHeader} 
                displaySubLinks={displaySubLinks} 
                hideSubLinks={hideSubLinks} 
                toggleSubLinksDisplay={toggleSubLinksDisplay} 
            />
            <MobileHeader 
                links={NAV_LINKS} 
                showHeader={showMobileHeader} 
                showingSubLinks={showSubLinks}
                toggleShowMobileHeader={toggleShowMobileHeader}
                displaySubLinks={displaySubLinks}
                hideSubLinks={hideSubLinks} 
                toggleSubLinksDisplay={toggleSubLinksDisplay} 
            />
            <hr className="border-none outline-none min-h-0.25 h-0.25 w-full bg-gray-200/20" />
        </header>
    )
};