import PropTypes from "prop-types";
import { useState } from "react";

function Header({onSearch}) {
    const [textSearch, setSearch] = useState('')
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="uppercase text-[40px] font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-2 text-black bg-white" 
                onChange={(e) => setSearch(e.target.value)} value = {textSearch}/>
                <button className="p-2 text-white bg-red-600"
                onClick={() => onSearch(textSearch)}>
                    Search
                </button>
            </div>
        </div>
    )
}


Header.PropTypes = {
    onSearch: PropTypes.func,
};

export default Header;