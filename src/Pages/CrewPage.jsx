import { memo, lazy, Suspense } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

const Crew = lazy(() => import("../Components/Crew"));

const CrewPage = memo(() => {
    const pageBackground = `bg-[url('../src/assets/crew/background-crew-mobile.jpg')]
    md:bg-[url('../src/assets/crew/background-crew-tablet.jpg')]
    lg:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] bg-cover`;

    return (
        <section className={`${pageBackground} w-full min-h-screen top-0 left-0 pt-40 
        pb-26 text-center md:text-left px-10 lg:px-42`}>
            <h2 className="text-white uppercase text-2xl font-thin subheading 
            tracking-widest">
                <span className="opacity-60 font-semibold">02</span> Meet Yoour Crew
            </h2>
            
            <Suspense fallback={<LoadingSpinner />}>
                <Crew />
            </Suspense>
        </section>
    )
})

export default CrewPage;