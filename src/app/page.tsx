import Image from 'next/image';
import React from 'react';
import Card, { Author, Category, Font } from '@/components/card/Card';
import { Banner, Search } from '@/components/commons';

const author: Author = {
    name: 'Font Việt Hoá NVN',
    id: 1,
    avatar: 'https://i.ibb.co/ZJ2BJwX/242073936-376038647519847-1967932753825383134-n-2.jpg',
};
const category: Category = {
    name: 'Script',
    slug: 'category-slug',
    description: 'Category description',
    thumbnail:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    id: 1,
};
const font: Font = {
    id: 1,
    name: 'Font NVN Neography',
    description:
        'Font NVN Neography là một font thuộc dòng Script, có kiểu chữ đẹp, phù hợp với nhiều thiết kế khác nhau. Font NVN Neography có thể sử dụng cho các thiết kế về: thiệp cưới, thiệp mời, thiệp sinh nhật, thiệp chúc mừng, thiệp tình yêu, thiệp kỷ niệm, thiệp chia buồn, thiệp chúc mừng năm mới, thiệp chúc mừng năm mới, thiệp chúc mừng tân gia, thiệp chúc mừng thọ, thiệp chúc mừng thăng chức, thiệp chúc mừng tốt nghiệp, thiệp chúc mừng sinh nhật, thiệp chúc mừng ngày cưới, thiệp chúc mừng ngày thành hôn, thiệp chúc mừng ngày kết hôn, thiệp chúc mừng ngày lễ, thiệp chúc mừng ngày lễ tình nhân, thiệp chúc mừng ngày lễ giáng sinh, thiệp chúc mừng ngày lễ halloween, thiệp chúc mừng ngày lễ tết, thiệp chúc mừng ngày lễ tết nguyên đán, thiệp chúc mừng ngày lễ tết dương lịch, thiệp chúc mừng ngày lễ tết âm lịch, thiệp chúc mừng ngày lễ tết trung thu, thiệp chúc mừng ngày lễ tết trung thu, thiệp chúc mừng ngày lễ tết tây, thiệp chúc mừng',
    thumbnail: 'https://i.ibb.co/xGtJ2xM/240761895-362360298887682-9151394716837352826-n.jpg',
    author,
    slug: 'font-slug',
    category,
    createdAt: '2021-10-10',
    isVietnamese: true,
    detailImages: [
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    ],
    downloadLink: 'https://picsum.photos/200/300',
    linkDrive: 'https://picsum.photos/200/300',
};

function Home() {
    return (
        <main>
            <div className="">
                <div className="my-10">
                    <Banner />
                </div>
                <div className="grid grid-cols-4 gap-5 container mx-auto px-8">
                    <Card font={font} />
                    <Card font={font} />
                    <Card font={font} />
                    <Card font={font} />
                    <Card font={font} />
                    <Card font={font} />
                </div>
            </div>
        </main>
    );
}

export default Home;
