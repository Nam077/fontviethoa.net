import React from 'react';
import Search from './Search';

const categories = [
    {
        id: 0,
        name: 'Tất cả',
    },
    {
        id: 1,
        name: 'Thư pháp',
    },
    {
        id: 2,
        name: 'Chữ ký',
    },
    {
        id: 3,
        name: 'Chữ viết tay',
    },
    {
        id: 4,
        name: 'Chữ đầu báo',
    },
    {
        id: 5,
        name: 'Chữ ký',
    },
    {
        id: 6,
        name: 'Chữ viết tay',
    },
    {
        id: 7,
        name: 'Chữ đầu báo',
    },
    {
        id: 8,
        name: 'Chữ ký',
    },
    {
        id: 9,
        name: 'Chữ viết tay',
    },
    {
        id: 10,
        name: 'Chữ đầu báo',
    },
];

function Banner() {
    return (
        <div className='bg-[url("https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80")] w-full h-[450px] object-cover object-center bg-center flex flex-col items-center justify-center relative mt-[50px]'>
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="z-10 text-white text-center">
                <h2 className="font-bold text-6xl">Chào mừng</h2>
                <span className="text-2xl font-normal">đã đến với FontVietHoa.me</span>
                <div className="mt-4">
                    <Search />
                </div>
                <div className="mt-4 max-w-[900px] flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <span
                            key={category.id}
                            className="text-base font-normal bg-white px-3 py-2 rounded-lg cursor-pointer text-gray-600"
                        >
                            {category.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;
