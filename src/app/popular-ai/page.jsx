import React from "react";
import "@/app/globals.css";
import styles from "@/app/components/css/Featured.module.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function PopularAi() {
    return (
        <div>
            <Header />
            <div className=" mx-auto max-w-7xl p-12 pl-0">
                <div className="flex justify-between pb-3">
                    <h1 className="text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Popular AI
                    </h1>
                </div>
            </div>
            <div className={`${styles.featured_bg} p-12`}>
                <div className="mx-auto max-w-7xl">
                    <div className="flex justify-between pb-3">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                            Popular AI Tools
                        </h2>
                    </div>
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
}
