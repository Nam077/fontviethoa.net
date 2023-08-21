import React from 'react';
import icons from '@/utils/icons';

const { RiSearch2Line } = icons;

function Search() {
    return (
        <div className="flex items-center gap-3 rounded-md bg-white shadow-lg max-w-[900px] w-full mx-auto">
            <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 bg-transparent outline-none text-gray-600"
            />
            <span className="text-2xl p-3 text-gray-700">
                <RiSearch2Line />
            </span>
        </div>
    );
}

export default Search;
