/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import Data from "../Utils/data.json";

export const TabContext = createContext();

const destinationData = Data.destinations;
const destinationNames = [...new Set(destinationData.map(data => data.name))];

const crewData = Data.crew;
const crewNames = [...new Set(crewData.map(data => data.name))];

const techData = Data.technology;
const techNames = [...new Set(techData.map(data => data.name))];

const getInitialDestinationTab = () => {
    const savedDestTab = localStorage.getItem("destinationTab");
    if (savedDestTab && savedDestTab !== "[object Object]") {
        return savedDestTab;
    }
    return destinationData[0].name;
}

const getInitialCrewTab = () => {
    const savedCrewTab = localStorage.getItem("crewTab");
    if (savedCrewTab && savedCrewTab !== "[object Object]") {
        return savedCrewTab;
    }
    return crewData[0].name;
}

const getInitialTechTab = () => {
    const savedTechTab = localStorage.getItem("techTab");
    if (savedTechTab && savedTechTab !== "[object Object]") {
        return savedTechTab;
    }
    return techData[0].name;
}

export default function TabProvider({ children }) {
    const [openDestTab, setOpenDestTab] = useState(getInitialDestinationTab);
    const [openCrewTab, setOpenCrewTab] = useState(getInitialCrewTab);
    const [openTechTab, setOpenTechTab] = useState(getInitialTechTab);
    
    const handleDestTabChange = (newTab) => {
        setOpenDestTab(newTab);
        localStorage.setItem("destinationTab", newTab);
    }

    const handleCrewTabChange = (newTab) => {
        setOpenCrewTab(newTab);
        localStorage.setItem("crewTab", newTab);
    }

    const handleTechTabChange = (newTab) => {
        setOpenTechTab(newTab);
        localStorage.setItem("techTab", newTab);
    }

    let activeDestinationTab = destinationData.filter(
        tab => tab.name.toLowerCase().trim() === openDestTab.toLowerCase().trim()
    );

    if (activeDestinationTab.length === 0) {
        activeDestinationTab = [destinationData[0]];
    }

    let activeCrewTab = crewData.filter(
        tab => tab.name.toLowerCase().trim() === openCrewTab.toLowerCase().trim()
    );

    if (activeCrewTab.length === 0) {
        activeCrewTab = [crewData[0]];
    }

    let activeTechTab = techData.filter(
        tab => tab.name.toLowerCase().trim() === openTechTab.toLowerCase().trim()
    );

    if (activeTechTab.length === 0) {
        activeTechTab = [techData[0]];
    }
    
    return (
        <TabContext.Provider value={{ 
            destinationNames,
            crewNames,
            techNames,
            openDestTab,
            openCrewTab,
            openTechTab,
            handleDestTabChange,
            handleCrewTabChange,
            handleTechTabChange,
            activeDestinationTab,
            activeCrewTab,
            activeTechTab
        }}>
            {children}
        </TabContext.Provider>
    )
}
