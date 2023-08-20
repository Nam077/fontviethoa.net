import Image from 'next/image';
import React from 'react';
import icons from '@/utils/icons';

const { RiFileDownloadLine } = icons;

const Card = () => {
    return (
        <div className="flex-1 bg-white p-[10px] rounded-xl max-w-[400px] shadow-md">
            <div className="relative w-full h-[190px]">
                <Image
                    src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
                    alt="Picture of the author"
                    layout="fill"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex items-center justify-between my-2">
                <div className="text-sm font-medium inline-flex items-center gap-1 px-2 rounded-full border border-gray-200 bg-yellow-300">
                    Việt hóa
                </div>
                <div className="text-sm font-medium inline-flex items-center gap-1 px-2 rounded-full border border-gray-200 bg-blue-300">
                    Serif
                </div>
            </div>
            <div className="py-2">
                <h5 className="text-xl font-semibold capitalize line-clamp-1">
                    How to choose the right laptop for programming
                </h5>
                <p className="text-gray-500 text-sm line-clamp-2 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum.
                </p>
            </div>
            <div className="py-3 px-4 bg-gray-100 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                            alt="Picture of the author"
                            layout="fill"
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col text-sm">
                        <span className="font-semibold">Font việt hóa NVN</span>
                        <span className="text-xs text-gray-600">20/08/2023</span>
                    </div>
                </div>
                <button>
                    <RiFileDownloadLine className="text-gray-600 text-2xl hover:text-blue-500 transition-color duration-300 ease-in-out" />
                </button>
            </div>
        </div>
    );
};

export default Card;
