import Link from 'next/link';
import React from 'react';
import { paths } from '@/utils/paths';
import Dropdown from './Dropdown';

const Navbar = () => {
    return (
        <div className="text-white fixed top-0 w-full z-50 bg-white px-4 py-2 shadow-xl">
            <div className="container mx-auto py-5 flex justify-between items-center">
                {/* Logo */}
                <Link href={paths.HOME} className="font-bold text-xl text-[#27AE60]">
                    LOGO
                </Link>

                <div>
                    <Dropdown />
                </div>

                {/* Login & Register buttons */}
                <div className="space-x-4">
                    <Link
                        href={paths.LOGIN}
                        className="text-gray-600 hover:underline hover:text-green-500 transition-all duration-300 ease-in-out"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        href={paths.REGISTER}
                        className=" rounded-[10px]  px-4 py-2  bg-[#27AE60] text-white hover:bg-[#2ECC71]"
                    >
                        Đăng Ký
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
