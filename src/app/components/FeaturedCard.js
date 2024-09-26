"use client";

import Link from "next/link";
import styles from "./css/Featured.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Card from "./Card";

export default function FeaturedCard() {
  return (
    <div className={`${styles.featured_bg} p-12`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between pb-3">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Featured
          </h2>
          <Link
            href="/featured"
            as={"/featured"}
            className="font-medium leading-7 text-gray-900 sm:truncate sm:text-1xl sm:tracking-tight flex"
          >
            View All
            <ArrowRightIcon
              aria-hidden="true"
              className="ml-2 h-6 w-5 sm:text-1xl"
            />
          </Link>
        </div>
        <Card />
      </div>
    </div>
  );
}
