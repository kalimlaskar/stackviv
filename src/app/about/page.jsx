import React from "react";
import "@/app/globals.css";
import styles from "@/app/components/css/Featured.module.css";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className={`${styles.featured_bg} p-12`}>
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between pb-3">
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
