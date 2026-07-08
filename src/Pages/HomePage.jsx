import { memo } from "react";
import { Link } from "react-router";

const HomePage = memo(() => {
    const pageBackground = `bg-[url('../src/assets/home/background-home-mobile.jpg')]
    md:bg-[url('../src/assets/home/background-home-tablet.jpg')]
    lg:bg-[url('../src/assets/home/background-home-desktop.jpg')] bg-cover`;

    const buttonStyle = `w-48 h-48 md:w-64 md:h-64 rounded-full bg-white  flex 
    items-center justify-center text-black text-2xl md:text-3xl heading tracking-widest 
    uppercase mt-14 lg:mt-0 transition-all duration-300 
    hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]`;

    return (
        <section className={`${pageBackground} w-full min-h-screen top-0 left-0 pt-80 
        pb-26 px-30`}>
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left 
                gap-y-2">
                    <p className="text-white subheading text-[16px] md:text-xl opacity-80 tracking-widest">
                        SO, YOU WANT TO TRAVEL TO
                    </p>
                    <h1 className="text-white text-7xl md:text-9xl heading">
                        SPACE
                    </h1>
                    <p className="text-white body opacity-80 text-sm/8 md:text-[16px]/8">
                        Let’s face it; if you want to go to space, you might as well genuinely go <br />
                        to outer space and not hover kind of on the edge of it. Well sit back, <br />
                        and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className={buttonStyle}>
                    <Link 
                        to='/destinations'
                        className="w-full h-full flex items-center justify-center"
                    >
                        Explore
                    </Link>
                </div>
            </div>
            
        </section>
    )
})

export default HomePage;