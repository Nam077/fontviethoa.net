import Link from 'next/link';
import React from 'react';
import { paths } from '@/utils/paths';
import icons from '@/utils/icons';
import Dropdown from './Dropdown';

const { RiArrowDownSLine } = icons;

const Navbar = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto py-3 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link href={paths.HOME} className="font-bold text-xl">
                        Font Việt Hóa
                    </Link>
                    <Dropdown />
                </div>
                <div className="flex items-center gap-4">
                    <Link href={paths.LOGIN}>Đăng nhập</Link>
                    <Link href={paths.REGISTER}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Tạo tài khoản</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
