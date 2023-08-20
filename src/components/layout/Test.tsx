import Link from 'next/link';

function Test() {
    return (
        <div className="bg-blue-500 p-4 text-white z-index-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="flex space-x-4">
                        <div className="relative group">
                            <button type="button" className="px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                                Menu
                            </button>
                            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <Link href="/">
                                    <span className="block px-4 py-2 hover:bg-blue-500">Trang chủ</span>
                                </Link>
                                <Link href="/">
                                    <span className="block px-4 py-2 hover:bg-blue-500">Trang chủ 2</span>
                                </Link>
                            </div>
                        </div>
                        <button type="button" className="px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                            Đăng nhập
                        </button>
                        <button type="button" className="px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
