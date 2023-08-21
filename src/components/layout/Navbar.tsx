import Link from 'next/link';
import React from 'react';
import { paths } from '@/utils/paths';
import Dropdown from './Dropdown';

function Navbar() {
    return (
        <div className="text-white fixed top-0 w-full z-50  shadow-md bg-white">
            <div className="container mx-auto p-5 flex justify-between items-center">
                {/* Logo */}
                <div className="font-bold text-xl text-[#27AE60]">LOGO</div>

                {/* Menu items */}
                <div className="space-x-4">
                    <div className="relative group inline-block ">
                        <button
                            type="button"
                            className="inline-flex items-center text-[#27AE60] text-base font-bold mr-4"
                        >
                            Danh mục
                        </button>
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black z-10 hidden group-hover:block">
                            <div className="rounded-md ring-1 ring-black ring-opacity-5 ">
                                <div className="py-1">
                                    <Link href={paths.HOME}>
                                        <span className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#27AE60]">
                                            Phông chữ
                                        </span>
                                    </Link>
                                    <Link href={paths.LOGIN}>
                                        <span className="block px-4 py-2 text-sm hover:bg-gray-100 text-[#27AE60]">
                                            Mẫu thiệp
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="{paths.LOGIN}" className="hover:underline  font-bold text-gray-600 mr-4">
                        <span>Liên Hệ</span>
                    </Link>
                    <Link href="{paths.LOGIN}" className="hover:underline font-bold text-gray-600 mr-4">
                        <span>Giới Thiệu</span>
                    </Link>
                </div>

                {/* Login & Register buttons */}
                <div className="space-x-4">
                    <button
                        type="button"
                        className="bg-white  rounded-[10px] px-4 py-2 bg-[#27AE60] text-white hover:bg-[#2ECC71] p-4 py-2"
                    >
                        Đăng Nhập
                    </button>
                    <button
                        type="button"
                        className=" rounded-[10px]  px-4 py-2  bg-[#27AE60] text-white hover:bg-[#2ECC71] p-4 py-2"
                    >
                        Đăng Ký
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
