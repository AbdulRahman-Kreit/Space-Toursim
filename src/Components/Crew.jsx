import { useContext } from "react";
import { TabContext } from "../Cotexts/TabProvider";

export default function Crew() {
    const { 
        crewNames, 
        openCrewTab, 
        handleCrewTabChange,
        activeCrewTab,
    } = useContext(TabContext);

    const currentTab = activeCrewTab[0];
    const { name, images, alt, role, bio } = currentTab;
    const { webp } = images;

    // Style Variables
    const passiveButton = `w-1 h-1 mr-12 rounded-full bg-white opacity-20 duration-200 
    hover:opacity-50`;

    const activeButton = `w-1 h-1 mr-12 rounded-full bg-white opacity-100`;


    return (
        <div className="flex flex-col lg:flex-row items-center juctify-between mt-12 gap-32 
        text-white">
            <div className="flex flex-col items-center lg:items-start">
                <h3 className="heading text-3xl opacity-60 mb-2">{role}</h3>
                <h1 className="heading text-4xl mb-8">{name}</h1>
                <div className="w-75 md:w-125">
                    <p className="body opacity-80 text-[16px]/7">{bio}</p>
                </div>
                

                <div className="mt-8">
                    {crewNames.map((tabName, index) => (
                        <button key={index} onClick={() => handleCrewTabChange(tabName)}
                        className={tabName === openCrewTab ? activeButton : passiveButton}>
                            <i className="fa-solid fa-circle"></i>
                        </button>
                    ))}
                </div>
            </div>
            <div className="relative w-fit">
                <img src={webp} alt={alt} />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t 
                from-[#0A0B17] via-[#0A0B17]/70 to-transparent pointer-events-none" />
            </div>
        </div>
    )
}
