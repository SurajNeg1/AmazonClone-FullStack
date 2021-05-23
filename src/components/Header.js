import Image from "next/image";
import {SearchIcon , MenuIcon,ShoppingCartIcon} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
                {/* Left Side (Logo) */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}  
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Middle (Search Bar) */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "/>
                    <SearchIcon className="h-12 p-4"/>
                </div>
                {/* Right Side (Sign In , Return , Basket) */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">   
                    {/* Sign In  */}
                    <div className="link">
                        <p>Suraj Singh Negi</p>
                        <p className="font-extrabold md:text-sm">
                            Account & Lists
                        </p>
                    </div>
                    {/* Return & Orders*/}
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm" >
                            & Orders
                        </p>
                    </div>
                    {/* Basket */}
                    <div className="link relative flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10"/>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                            Basket
                        </p>
                    </div>
                </div>
            </div>
            {/* Bottom Nav  */}
            <div className="flex items-center space-x-3 p-2 pl-2 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center"> 
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electonics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header