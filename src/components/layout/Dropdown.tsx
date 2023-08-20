"use client";
import icons from '@/utils/icons';
import { useState } from 'react';

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
            <span className="flex items-center gap-1 cursor-pointer">
                Phân loại <RiArrowDownSLine className="text-base" />
            </span>
            {isHovered && (
                <div className="absolute bg-white flex flex-col gap-2 p-3 rounded-xl w-[200px]">
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                    <span>Việt hóa</span>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
