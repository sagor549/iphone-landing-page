import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full bg-black">
      <nav className="screen-max-width flex items-center justify-between px-4 py-3 sm:px-8">
        {/* Apple Logo */}
        <div className="flex items-center">
          <img 
            src={appleImg} 
            alt="apple-logo" 
            width={14} 
            height={18} 
            className="cursor-pointer hover:opacity-80" 
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden flex-[2] justify-center lg:flex">
          <div className="flex gap-6 xl:gap-8">
            {navLists.map((nav, i) => (
              <div 
                key={i} 
                className="text-xs text-gray-300 transition-all hover:text-white sm:text-sm"
              >
                {nav}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Search & Bag) */}
        <div className="flex items-center gap-5 sm:gap-6">
          <img 
            src={searchImg} 
            alt="search" 
            width={18} 
            height={18} 
            className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" 
          />
          <img 
            src={bagImg} 
            alt="bag" 
            width={18} 
            height={18} 
            className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;