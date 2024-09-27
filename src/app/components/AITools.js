"use client";
import Link from 'next/link';
import { useState } from 'react';

import { ArrowRightIcon } from '@heroicons/react/24/outline'

const posts = [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Amazon CodeGuru',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://stackviv.ai/wp-content/uploads/2024/05/Amazon-AI-Services.png',
        },
        rating: 3, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 3, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 4,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 5,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 6,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 7,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 8,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    {
        id: 9,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        rating: 5, // Add a rating (1, 2, or 3 stars)
    },
    // More posts...
]
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
        <path d="M12 .587l3.668 7.476L23 9.748l-5.834 5.665L18.72 24 12 20.325 5.28 24l1.555-8.587L1 9.748l7.332-1.685L12 .587z" />
    </svg>
);

export default function AiTools() {
    const [visiblePosts, setVisiblePosts] = useState(6); // Number of posts to show initially
    const [loading, setLoading] = useState(false); // Track loading state

    const handleLoadMore = () => {
        setLoading(true); // Start loading animation
        setTimeout(() => {
            setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6); // Show 3 more posts
            setLoading(false); // Stop loading animation
        }, 1000); // 3-second delay
    };

    return (
        <div className="bg-white p-12">
            <div className="mx-auto max-w-7xl">
                <div className='flex justify-between mb-5 md:mb-0'>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        New AI Tools
                    </h2>
                    <Link href="popular-ai">
                        <div className="font-medium leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight flex">
                            View All <ArrowRightIcon aria-hidden="true" className="ml-2 h-6 w-5 sm:text-1xl" />
                        </div>
                    </Link>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 mt-2 pt-5 md:pt-8 border-t-2 border-[#212529] sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 justify-items-center">
                    {posts.slice(0, visiblePosts).map((post) => (
                        <article key={post.id} className="shadow-custom bg-white rounded-2xl p-4 m-2 flex max-w-xl flex-col items-start justify-between">
                            <div className="relative flex items-center gap-x-4">
                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <div className='ratings flex'>
                                        {[...Array(post.rating)].map((_, index) => (
                                            <StarIcon key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-4 text-xs">
                                <a
                                    href={post.category.href}
                                    className="relative z-10 bg-[#e3e3ff] text-[#171717] font-medium mt-4 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className='flex items-center w-full mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="max-w-[20px] h-auto ">
                                    <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"></path>
                                </svg>
                                <span className="ml-2 text-[#693ee0] no-underline text-sm font-semibold">
                                    Performance Review Generator
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {visiblePosts < posts.length && (
                    <div className='flex justify-center'>
                        <button onClick={handleLoadMore} className="px-4 py-2 mt-8 bg-[#693ee0] text-white rounded flex justify-center items-center">
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}