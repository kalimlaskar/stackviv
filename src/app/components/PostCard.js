'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PostCard({ postLimit = 3, gridTemplate = 'repeat(3, 1fr)', grid = 'grid' }) { // postLimit as a prop
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://stackviv.ai/wp-json/wp/v2/posts?per_page=100');
            const data = await response.json();

            // Map the API data to your desired format
            const decodeHtmlEntities = (html) => {
                const txt = document.createElement('textarea');
                txt.innerHTML = html;
                return txt.value;
            };

            const formattedPosts = data.map(item => ({
                id: item.id,
                title: item.title.rendered,
                href: item.slug, // Replace with actual URL if available
                description: decodeHtmlEntities(item.excerpt.rendered.replace(/(<([^>]+)>)/gi, '')), // Strip HTML tags and decode entities
                date: new Date(item.date).toLocaleDateString()
            }));

            setPosts(formattedPosts); // Update state with fetched posts
            setLoading(false); // Data has been fetched, so stop loading
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false); // Stop loading even if there's an error
        }
    };

    useEffect(() => {
        fetchPosts(); // Call fetchPosts on component mount
    }, []);

    return (
        <div className='flex gap-6 border-t-2 border-[#212529] md:flex-nowrap flex-wrap' style={{ gridTemplateColumns: gridTemplate, display: grid }}>
            {loading ? (
                <div className="loading text-black text-2xl">Loading posts...</div> // Show loading indicator while data is being fetched
            ) : (
                posts.slice(0, postLimit).map((post) => ( // Use the dynamic limit here
                    <div key={post.id} className="p-6 flex-1 flex flex-wrap content-between bg-white rounded-lg mt-8 shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),_0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        <div className=''>
                            <Link href={`blog/${post.href}`}>
                                <h5 className="mb-2 text-2xl text-[#000] font-semibold tracking-tight capitalize">{post.title}</h5>
                            </Link>
                            <p className="mb-3 mt-6 font-normal text-[#212529] line-clamp-7">{post.description}</p>
                        </div>
                        <div className='publishPost flex justify-between mt-8 w-full'>
                            <div className="publishDate text-[#212529]">
                                {post.date}
                            </div>
                            <Link href={`blog/${post.href}`}>
                                <div className="redMoreCta flex text-[#212529]">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-2 h-6 w-6 sm:text-1xl">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
