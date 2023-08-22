'use client';

import { useState } from 'react';
import icons from '@/utils/icons';
import { Category } from '../card/Card';
import DropdownItem from '../commons/DropDownItem';

const { RiArrowDownSLine } = icons;
const categories: Category[] = [
    {
        id: 0,
        name: 'Tất cả',
        description: 'Tất cả các font chữ có trên FontVietHoa.me',
        slug: 'tat-ca',
        thumbnail: 'https://picsum.photos/200/300',
    },
    {
        id: 1,
        name: 'Thư pháp',
        description: 'Tất cả các font chữ có trên FontVietHoa.me',
        slug: 'thu-phap',
        thumbnail: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Chữ ký',
        description: 'Tất cả các font chữ có trên FontVietHoa.me',
        slug: 'chu-ky',
        thumbnail: 'https://picsum.photos/200/300',
    },
];
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
                    {categories.map((category) => (
                        <DropdownItem key={category.id} category={category} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
