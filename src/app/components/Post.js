import React from 'react';
import PostCard from './PostCard';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Post = () => {
    return (
        <div className='bg-white p-10'>
            <div className='mx-auto max-w-7xl'>
                <div className='flex justify-between pb-2'>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Recent Post
                    </h2>
                    <div className="font-medium leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight flex">View All <ArrowRightIcon aria-hidden="true" className="ml-2 h-6 w-5 sm:text-1xl" /></div>
                </div>
                <PostCard />
            </div>
        </div>
    );
};

export default Post;
