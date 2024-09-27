// app/blog/[slug]/page.js
"use client"
import React from 'react';
import { useParams } from 'next/navigation';  // New way to get params in App Router
import Header from '../../components/Header';
import Footer from '@/app/components/Footer';

// Fetch the post data from API
async function getPostData(slug) {
    const res = await fetch(`https://stackviv.ai/wp-json/wp/v2/posts?slug=${slug}`);
    const posts = await res.json();

    // Return the first post matching the slug (WordPress API returns an array)
    return posts.length > 0 ? posts[0] : null;
}

// Dynamic page component
export default async function PostPage() {
    const params = useParams();  // This will grab the 'slug' from the URL
    const post = await getPostData(params.slug);

    // Handle case where post is not found
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto p-6 ">
                <h1 className="text-4xl font-semibold mb-4">{post.title.rendered}</h1>
                <div className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </div>
            <Footer />
        </div>
    );
}
