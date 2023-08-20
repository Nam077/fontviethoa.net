import Image from 'next/image';
import { Card } from '@/components/Card';
import { Author, Category, Font } from '@/components/Card/Card';

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
const font: Font = {
    id: 1,
    name: 'Font name',
    description: 'Font description',
    thumbnail:
        'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
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
            Xin chào
            <Card font={font} />
        </main>
    );
}

export default Home;
