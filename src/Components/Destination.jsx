import { useContext } from "react";
import { TabContext } from "../Cotexts/TabProvider";

export default function Destination() {
    const { 
        destinationNames,
        openDestTab,
        handleDestTabChange,
        activeDestinationTab
    } = useContext(TabContext);

    const currentTab = activeDestinationTab[0];

    const { name, images, alt, description, distance, travel } = currentTab;
    const { webp } = images;

    // Style Variables
    const passiveButton = `text-white text-sm subheading tracking-widest after:absolute 
    after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left 
    after:scale-x-0 after:bg-white after:transition-transform after:duration-300 
    hover:after:scale-x-100 relative mx-3 opacity-60`;

    const activeButton = `text-white text-sm subheading tracking-widest after:absolute 
    after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:bg-white 
    after:scale-x-100 relative mx-3 opacity-100`;

    const pStyle = `text-sm uppercase subheading opacity-60 tracking-widest mb-1`;

    const h3Style = `heading text-3xl`;
    
    return (
        <div className="flex flex-col lg:flex-row items-center mt-22 gap-32 text-white">
            <div>
                <img src={webp} alt={alt} className="w-75 lg:w-100"/>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:mt-0"> 
                <div className="flex flex-row">
                    {destinationNames.map((tabName, index) => (
                        <button key={index}  onClick={() => handleDestTabChange(tabName)}
                        className={tabName === openDestTab ? activeButton : passiveButton}>
                            {tabName}
                        </button>
                    ))}
                </div>
                
                <div className="mt-8 lg:ml-3 text-center lg:text-left">
                    <h1 className="text-7xl md:text-8xl lg:text-9xl heading mb-8">
                        {name}
                    </h1>
                    <div className="w-90 sm:w-105">
                        <p className="body opacity-70 text-[16px]/7 mb-8">
                            {description}
                        </p>
                        <div className="border border-gray-600"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center lg:items-start text-center 
                    lg:text-left w-full gap-12 mt-8">
                        <span className="w-1/2">
                            <p className={pStyle}>avg. distance</p>
                            <h3 className={h3Style}>{distance}</h3>
                        </span>
                        <span className="w-1/2">
                            <p className={pStyle}>est. travil time</p>
                            <h3 className={h3Style}>{travel}</h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
