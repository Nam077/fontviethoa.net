import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import icons from '../../utils/icons';

const { RiFileDownloadLine } = icons;
export interface Author {
    id: number;
    name: string;
    avatar: string;
}
export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    thumbnail: string;
}
export interface Font {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    author: Author;
    slug: string;
    category: Category;
    isVietnamese: boolean;
    detailImages?: string[];
    downloadLink?: string;
    linkDrive?: string;
    createdAt: string;
}
export interface CardProps {
    font: Font;
}
function Card(props: CardProps) {
    const { font } = props;
    return (
        <div className=" bg-white p-[10px] rounded-xl w-full shadow-md">
            <div className="relative w-full h-[190px]">
                <Image
                    src={font.thumbnail}
                    alt="Picture of the author"
                    layout="fill"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="text-sm font-medium inline-flex items-center gap-1 px-2 py-0.5 rounded-lg shadow-sm bg-yellow-300">
                    {font.isVietnamese ? 'Việt hoá' : 'Font Quốc tế'}
                </div>
                <div className="text-sm font-medium inline-flex items-center gap-1 px-2 py-0.5 rounded-lg shadow-sm bg-blue-300">
                    {font.category.name}
                </div>
            </div>
            <div className="py-3">
                <h5 className="text-xl font-semibold capitalize line-clamp-1 space-y-0">{font.name}</h5>
                <p className="text-gray-500 text-sm line-clamp-3 mt-3">{font.description}</p>
            </div>
            <div className="py-3 px-4 bg-gray-100 rounded-xl flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl">
                        <Image
                            src={font.author?.avatar}
                            alt="Picture of the author"
                            layout="fill"
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col text-sm">
                        <span className="font-semibold">{font.author?.name}</span>
                        <span className="text-xs text-gray-600">{font.createdAt}</span>
                    </div>
                </div>
                <Link href={`/font/${font.slug}`}>
                    <RiFileDownloadLine className="text-gray-600 text-2xl hover:text-blue-500 transition-color duration-300 ease-in-out" />
                </Link>
            </div>
        </div>
    );
}

export default Card;
