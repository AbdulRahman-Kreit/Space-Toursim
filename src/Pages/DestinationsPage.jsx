import { memo, lazy, Suspense } from "react";
import LoadingSpinner from "../Components/LoadingSpinner";

const Destination = lazy(() => import("../Components/Destination"));

const DestinationsPage = memo(() => {
    const pageBackground = `bg-[url('../public/assets/destination/background-destination-mobile.jpg')]
    md:bg-[url('../public/assets/destination/background-destination-tablet.jpg')]
    lg:bg-[url('../public/assets/destination/background-destination-desktop.jpg')] bg-cover`;

    return (
        <section className={`${pageBackground} w-full min-h-screen top-0 left-0 pt-40 
        pb-26 text-center md:text-left px-10 lg:px-42`}>
            <h2 className="text-white uppercase text-2xl font-thin subheading 
            tracking-widest">
                <span className="opacity-60 font-semibold">01</span> Pick your destination
            </h2>
            
            <Suspense fallback={<LoadingSpinner />}>
                <Destination  />
            </Suspense>
        </section>
    );
})

export default DestinationsPage;