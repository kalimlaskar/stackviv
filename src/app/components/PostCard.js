import React from 'react';

const posts = [
    {
        id: 1,
        title: 'How to Sell AI Art Online for Free: A Comprehensive Guide',
        href: '#',
        description:
            'Imagine creating stunning artwork with just a few keystrokes, then turning those digital masterpieces into cold, hard cash. Welcome to the brave new world of AI-generated art! As an artist in the digital age, you’re standing at the forefront of a creative revolution. Artificial intelligence has opened up mind-bending possibilities in art creation, but here’s...',
        date: 'August 18, 2024',
    },
    {
        id: 2,
        title: '15 Best AI Tool Directories to Look for in 2024 ',
        href: '#',
        description:
            'Imagine creating stunning artwork with just a few keystrokes, then turning those digital masterpieces into cold, hard cash. Welcome to the brave new world of AI-generated art! As an artist in the digital age, you’re standing at the forefront of a creative revolution. Artificial intelligence has opened up mind-bending possibilities in art creation, but here’s...',
        date: 'August 18, 2024',
    },
    {
        id: 3,
        title: 'Using ChatGPT to Write Essays: A Comprehensive Guide',
        href: '#',
        description:
            'Imagine creating stunning artwork with just a few keystrokes, then turning those digital masterpieces into cold, hard cash. Welcome to the brave new world of AI-generated art! As an artist in the digital age, you’re standing at the forefront of a creative revolution. Artificial intelligence has opened up mind-bending possibilities in art creation, but here’s...',
        date: 'August 18, 2024',
    },
    // More posts...
]

export default function PostCard() {
    return (
        <div className='flex gap-6 border-t-2 border-[#212529]'>
            {posts.map((post) => (
                <div key={post.id} className="p-6 bg-white  rounded-lg mt-8 max-w-[28rem] shadow-[0px_4px_6px_-2px_rgba(0,0,0,0.05),_0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                    <a href="#">
                        <h5 className="mb-2 text-2xl text-[#000] font-semibold tracking-tight capitalize ">{post.title}</h5>
                    </a>
                    <p className="mb-3 mt-6 font-normal text-[#212529] line-clamp-7">{post.description}</p>
                    <div className='publishPost flex  justify-between mt-8'>
                        <div className="publishDate text-[#212529]">
                            August 18, 2024
                        </div>
                        <div className="redMoreCta flex text-[#212529]">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="ml-2 h-6 w-6 sm:text-1xl"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

