import React from 'react';
import Head from 'next/head'; // Import Head for managing <head> tags
import "@/app/globals.css";
import styles from '../../app/components/css/Featured.module.css'
import Header from '../../app/components/Header';
import Footer from '../../app/components/Footer';
import Card from '../../app/components/Card';

export default function Featured() {
    return (
        <div>
            {/* Meta title */}
            <Head>
                <title>Featured Page - Stackviv</title>
                <meta name="description" content="Featured Page" />
            </Head>
            <Header />
            <div className={`${styles.featured_bg} p-12`}>
                <div className="mx-auto max-w-7xl">
                    <div className='flex justify-between pb-3'>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Featured
                        </h2>
                    </div>
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
}
