import React from 'react';

interface PageProps {
    params: {
            slug: string;
    };
}

function Page({ params }: PageProps) {
    return <div>My Post: {params.slug}</div>;
}

export default Page;
