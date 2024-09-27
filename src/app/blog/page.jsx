import React from "react";
import "@/app/globals.css";
import styles from "@/app/components/css/Featured.module.css";
import Header from "../components/Header";
import Post from "../components/Post";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

export default function Blog() {
    return (
        <div>
            <Header />
            <div className={`${styles.featured_bg} p-12`}>
                <div className="mx-auto max-w-7xl">
                    <div className="flex justify-between pb-3">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Blog
                        </h2>
                    </div>
                    <PostCard postLimit={100} gridTemplate="repeat(3, 3fr)" grid="grid" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
