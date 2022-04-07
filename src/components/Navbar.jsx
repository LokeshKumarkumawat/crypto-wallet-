import React from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="md:container md:mx-auto  flex  justify-between items-center p-4 ">
            <div className=" ">

                <img className="w-12 h-12 " src={logo} alt="logo" />


            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center  ">
                {["Market", "Exchange", "Wallets", "Tutorials"].map((item, index) => (
                    <NavBarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#2952e3] py-2 px-7 ml-10 rounded-full cursor-pointer hover:bg-[#2546bd]"> Login</li>

            </ul>


            <div className="flex relative md:hidden">
                {!toggleMenu && (
                    <HiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                )}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map(
                            (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
                        )}
                    </ul>
                )}
            </div>

        </nav>


    )
};

export default Navbar;