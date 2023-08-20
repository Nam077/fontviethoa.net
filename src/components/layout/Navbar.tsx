import Link from 'next/link';
import React from 'react';
import { paths } from '@/utils/paths';
import Dropdown from './Dropdown';

function Navbar() {
    return (
        <div>
            <div className="container py-3 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link href={paths.HOME} className="font-bold text-xl">
                        Font Việt Hóa
                    </Link>
                    <Dropdown />
                </div>
                <div className="flex items-center gap-4">
                    <Link href={paths.LOGIN}>Đăng nhập</Link>
                    <Link href={paths.REGISTER}>
                        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Tạo tài khoản
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
