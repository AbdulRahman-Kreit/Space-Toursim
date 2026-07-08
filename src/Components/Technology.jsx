import { useContext } from "react";
import { TabContext } from "../Cotexts/TabProvider";

export default function Technology() {
    const {
        techNames,
        openTechTab,
        handleTechTabChange,
        activeTechTab,
    } = useContext(TabContext);

    const currentTab = activeTechTab[0];
    const { name, images, alt, description } = currentTab;
    const { portrait, landscape } = images;

    const passiveButton = `w-12 h-12 rounded-full border-2 border-gray-400 mb-4
    text-white text-sm flex items-center justify-center duration-200 hover:border-white cursor-pointer`;

    const activeButton = `w-12 h-12 rounded-full bg-white text-black text-sm mb-4 flex
    items-center justify-center font-bold border-[2px_solid_#fff_!important]`;

    return (
        <div
            className="flex flex-col-reverse lg:flex-row items-center justify-between mt-32 lg:mt-12 gap-32 text-white w-full"
        >
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex flex-row lg:flex-col items-center gap-4 mb-8 lg:mt-0 lg:mr-12">
                    {techNames.map((tabName, index) => (
                        <button
                            key={index}
                            onClick={() => handleTechTabChange(tabName)}
                        >
                            <p
                                className={
                                    tabName === openTechTab
                                        ? activeButton
                                        : passiveButton
                                }
                            >
                                {index + 1}
                            </p>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg uppercase tracking-widest text-gray-400 mb-4 heading">
                        THE TECHNOLOGY...
                    </h3>

                    <h1 className="text-4xl font-serif uppercase mb-8">
                        {name}
                    </h1>

                    <p className="text-gray-400 max-w-md">
                        {description}
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-auto">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        srcSet={portrait}
                    />

                    <img
                        src={landscape}
                        alt={alt}
                        className="
                            w-full
                            lg:w-128.75
                            h-42.5
                            md:h-80
                            lg:h-150
                            object-cover
                            object-center
                        "
                    />
                </picture>
            </div>
        </div>
    );
}