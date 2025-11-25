import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { basicDatas } from "../../utils/somedatas"

export default function Navbar01() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)

    const toggleCart = () => setIsCartOpen(!isCartOpen)
    const handleSearchFocus = () => setIsSearchFocused(true)
    const handleSearchBlur = () => setIsSearchFocused(false)

    
    return(
        <>
            {/* Black Overlay appear when you focus on the input search */}
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                    isSearchFocused 
                        ? 'opacity-50 z-40 pointer-events-auto' 
                        : 'opacity-0 -z-10 pointer-events-none'
                }`}
                aria-hidden="true"
            />

            <nav className="bg-[#10121a] shadow-md sticky top-0 z-50">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-2">
                    
                    <div className="flex justify-between items-center h-16 relative">
                        
                        {/* Logo/Name - hidden on mobile */}
                        <div className={`flex-shrink-0 transition-opacity duration-300 ${
                            isSearchFocused ? 'md:opacity-100 opacity-0 w-0 md:w-auto' : 'opacity-100'
                        }`}>
                            <a 
                                href="./my-free-lovable-components"
                                aria-label="Homepage"
                                className="hidden md:block text-2xl font-bold text-white"
                            >
                                {basicDatas.name}
                            </a>
                        </div>

                        {/* Search Bar - spread on mobile when you focus on it */}
                        <div className={`relative transition-all duration-300 ease-in-out ${
                            isSearchFocused
                                ? 'w-full md:w-[75%]' 
                                : 'w-[75%]'
                        }`}>         
                            <div className={`flex w-full h-full items-center gap-0 rounded-lg overflow-hidden transition-all duration-300 ${
                                isSearchFocused 
                                    ? 'bg-gray-200 ring-2 ring-amber-400 shadow-lg' 
                                    : 'bg-gray-100'
                            }`}>
                                <input 
                                    type="search" 
                                    placeholder="Search..."
                                    onFocus={handleSearchFocus}
                                    onBlur={handleSearchBlur}
                                    className={`px-4 w-[95%] outline-none h-11 placeholder-gray-500 transition-all duration-300 ${
                                        isSearchFocused 
                                            ? 'placeholder-gray-300' 
                                            : 'bg-transparent text-gray-700'
                                    }`}
                                />
                                <button 
                                    type="submit"
                                    className="bg-amber-400 mx-auto grow h-12 p-3 text-black outline-none cursor-pointer focus:ring-2 focus:ring-amber-600 hover:bg-amber-500 font-medium transition-colors"
                                >
                                    <FontAwesomeIcon className="text-xl" icon={faSearch} />
                                </button>
                            </div>
                        </div>

                        {/* Cart Icon - on desktop */}
                        <button 
                            onClick={toggleCart}
                            aria-label="Open shopping cart"
                            className={`p-2 text-white text-3xl hidden md:block hover:text-amber-400 transition-all duration-300 relative`}
                        >
                            <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                        </button>

                        {/* Mobile Menu Button - Hidden on Mobile when search is Active */}
                        <div className={`md:hidden flex items-center space-x-3 transition-all duration-300 ${
                            isSearchFocused ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
                        }`}>
                            <button 
                                onClick={toggleCart}
                                aria-label="Open shopping cart"
                                className="p-2 text-white text-3xl hover:text-amber-400 transition-colors relative"
                            >
                                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}