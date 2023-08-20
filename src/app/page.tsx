import React from 'react';
import { Author, Category, Font } from '@/components/card/Card';
import CardList from '@/components/cardList/CardList';

const author: Author = {
    name: 'Author name',
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
};
const category: Category = {
    name: 'Category name',
    slug: 'category-slug',
    description: 'Category description',
    thumbnail:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
    id: 1,
};

const fonts: Font[] = [];
let isVietnamese = true;
Array(32)
    .fill(null)
    .forEach((_, i) => {
        isVietnamese = !isVietnamese;
        const newFont = {
            id: i + 1,
            name: `NVN Azkia ${i + 1}`,
            description:
                'Font Azkia là một font Scrip mới được thiết kế bởi Mikrojihad. Font Azkia có một phong cách đơn giản, dễ đọc và hoàn hảo cho các dự án thiết kế của bạn.',
            thumbnail:
                'https://i0.wp.com/ifonts.xyz/wp-content/uploads/2018/01/azkia-script.png?resize=580%2C387&ssl=1',
            author,
            slug: `font-slug-${i + 1}`,
            category,
            createdAt: '2021-10-10',
            isVietnamese,
            detailImages: [
                'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
                'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
            ],
            downloadLink: 'https://picsum.photos/200/300',
            linkDrive: 'https://picsum.photos/200/300',
        };

        fonts.push(newFont);
    });

function Home() {
    return (
        <main className="container mx-auto ">
            Xin chào
            <CardList fonts={fonts} />
        </main>
    );
}

export default Home;
