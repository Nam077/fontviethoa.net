'use client';

import { useState } from 'react';
import icons from '@/utils/icons';

const { RiArrowDownSLine } = icons;

const Dropdown = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <span className="flex items-center gap-1 cursor-pointer text-gray-600 font-bold hover:text-green-500 duration-300 ease-in-out transition-all">
                Phân loại <RiArrowDownSLine className="text-base" />
            </span>
            {isHovered && (
                <div className="absolute bg-white flex flex-col rounded-md w-[200px] shadow-xl z-10 border border-gray-100">
                    <span className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                    <span className="px-2 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:underline cursor-pointer hover:text-green-500 duration-300 ease-in-out transition-all ">
                        Việt hóa
                    </span>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
