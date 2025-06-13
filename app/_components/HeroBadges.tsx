import Image from "next/image";
import { IconType } from "react-icons";
import { GrSecure } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";



export default function HeroBadges({ iconSize = 36 }: { iconSize?: number }) {

    return (
        <div className="flex items-center gap-4">
            <Badge
                iconSize={iconSize}
                topText="ALPR"
                bottomText="Tested"
                Icon={GrSecure}
            />
            <Badge
                iconSize={iconSize}
                topText="Made in"
                bottomText="Nigeria"
                imageSrc="/icons/ng-flag.png"
                imageAlt="Nigeria flag"
            />
            <Badge
                iconSize={iconSize}
                topText="IT"
                bottomText="Security"
                Icon={IoShieldCheckmark}
            />
        </div>
    )
};

type BadgeProps = { 
    iconSize: number;
    topText: string, 
    bottomText: string, 
    Icon?: IconType, 
    imageSrc?: string, 
    imageAlt?: string; 
}

function Badge({ iconSize, topText, bottomText, Icon, imageSrc, imageAlt = "Badge image" }: BadgeProps) {

    return (
        <span className="flex items-center bg-white/10 text-white/70 rounded-lg overflow-hidden">
            {
                Icon ? 
                    <span style={{ width: iconSize }} className="flex items-center justify-center aspect-square bg-blue-500 text-white">
                        <Icon size={22} />
                    </span> :
                    imageSrc ?
                        <Image style={{ width: iconSize }} width={iconSize} height={iconSize} src={imageSrc} alt={imageAlt} className="block aspect-square" /> :
                        null
            }
            <p className="uppercase text-[.6rem] leading-[.7rem] font-semibold px-2">
                <span className="font-bold tracking-tight">{topText}</span>
                <br />
                <span>{bottomText}</span>
            </p>
        </span>
    )
}