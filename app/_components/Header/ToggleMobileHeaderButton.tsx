

type Props = {
    toggleMobileHeader: () => void;
    showingMobileHeader: boolean;
}

export default function ToggleMobileHeaderButton({ toggleMobileHeader, showingMobileHeader }: Props) {

    return (
        <button onClick={toggleMobileHeader} className={`${showingMobileHeader ? 'rotate-45 delay-300' : ''} duration-30 menu-btn group w-fit sm:w-12 sm:aspect-square rounded-full hover:text-blue-400 flex items-center justify-center transition-transform`}>
            <span className="flex flex-col w-8 gap-2">
                <span className={`${showingMobileHeader ? 'translate-y-2.5 delay-0' : 'delay-200'} block w-full h-0.5 bg-white transition-transform duration-300`} />
                <span className={`${showingMobileHeader ? 'rotate-90 delay-200' : ''} block w-full h-0.5 bg-white transition-transform duration-300`} />
                <span className={`${showingMobileHeader ? '-translate-y-2.5 delay-0' : 'delay-200'} block w-full h-0.5 bg-white transition-transform duration-300`} />
            </span>
        </button>
    )
}