import { useState } from "react";
import { NavLink } from "react-router"
import Logo from "../assets/shared/logo.svg"
import MobileMenu from "../assets/shared/icon-hamburger.svg"
import Close from "../assets/shared/icon-close.svg"

const links = [
    { id: 1, number: '00', name: "Home", href: "/" },
    { id: 2, number: '01', name: "Destination", href: "/destinations" },
    { id: 3, number: '02', name: "Crew", href: "/crew" },
    { id: 4, number: '03', name: "Technology", href: "/technology" },
];

const passiveLink = `text-white text-sm subheading tracking-widest after:absolute after:-bottom-8.5
after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-white 
after:transition-transform after:duration-300 hover:after:scale-x-100 relative`;

const activeLink = `text-white text-sm subheading tracking-widest after:absolute after:-bottom-0.5
after:left-0 after:h-0.5 after:w-full after:bg-white after:scale-x-100 relative py-8`;

const passiveLinkMobile = `text-white text-left subheading tracking-widest block w-full py-3 pl-2 relative
after:absolute after:-right-13.5 after:top-0 after:origin-top after:w-1 after:h-full after:scale-y-0 after:bg-white
after:transition-transform after:duration-300 hover:after:scale-y-100`;

const activeLinkMobile = `text-white text-left subheading tracking-widest block w-full py-3 pl-2 relative
after:absolute after:-right-13.5 after:top-0 after:w-1 after:h-full after:bg-white after:scale-y-100`;

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex flex-row items-center justify-between py-6 pl-10 lg:py-8 lg:pl-12 pr-0 bg-transparent
        z-100 absolute w-full">
            <img src={Logo} alt="Logo" className="w-8" />
            
            <div className="border border-gray-600 grow ml-12 -mr-8 hidden lg:block z-20"></div>
            
            <button className="md:hidden pr-12 z-40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                { isMenuOpen ? <img src={Close} alt="Close" className="w-7" /> :
                <img src={MobileMenu} alt="Mobile Menu" className="w-7" /> }
            </button>

            <ul className="hidden md:flex flex-row gap-8 lg:gap-12 py-8 pr-8 lg:pr-12 pl-26 lg:pl-32 bg-white/10 
            backdrop-blur-md">
                {links.map((link) => {
                    return (
                    <li key={link.id}>
                        <NavLink to={link.href}
                        className={({ isActive }) => isActive ? activeLink : passiveLink }>
                            <span className="font-semibold mr-2">{link.number}</span>
                            <span className="opacity-60">{link.name}</span> 
                        </NavLink>
                    </li>
                    )
                })}
            </ul>

            { isMenuOpen && 
                (<div className="md:hidden absolute top-0 right-0 w-6/10 h-screen bg-white/10 
                backdrop-blur-md">
                    <ul className="flex flex-col items-start gap-12 py-22 px-14 w-full">
                        {links.map((link) => {
                            return (
                            <li key={link.id} className="w-full">
                                <NavLink to={link.href}
                                className={({ isActive }) => isActive ? activeLinkMobile : 
                                passiveLinkMobile }>
                                    <span className="font-semibold mr-2">{link.number}</span>
                                    <span className="opacity-60">{link.name}</span> 
                                </NavLink>
                            </li>
                            )
                        })}
                    </ul>
                </div>)
            }
        </nav>
    )
}
