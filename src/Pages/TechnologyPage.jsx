import { memo, lazy, Suspense } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

const Technology = lazy(() => import("../Components/Technology"));

const TechnologyPage = memo(() => {
    const pageBackground = `bg-[url('../src/assets/technology/background-technology-mobile.jpg')]
    md:bg-[url('../src/assets/technology/background-technology-tablet.jpg')]
    lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] bg-cover`;

    return (
        <section className={`${pageBackground} w-full min-h-screen top-0 left-0 pt-40 
        pb-26 text-center md:text-left px-10 lg:px-42`}>
            <h2 className="text-white uppercase text-2xl font-thin subheading 
            tracking-widest">
                <span className="opacity-60 font-semibold">03</span> Space Launch 101
            </h2>
            
            <Suspense fallback={<LoadingSpinner />}>
                <Technology />
            </Suspense>
        </section>
    )
})

export default TechnologyPage;