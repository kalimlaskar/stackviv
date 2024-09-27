'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import SearchBar from './SearchBar'

import styles from './css/HeroBanner.module.css'
import Link from 'next/link'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={`${styles.hero_banner} bg-white`}>
            <div className="relative isolate px-6 pt-14 pb-14 lg:px-8">
                <div className="mx-auto">
                    <div className="text-center">
                        <h1 className={`${styles.hero_h1_level} text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl`}>Generative AI Tools Directory</h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Simplifying AI search: the best curated list of 10,000+ AI tools across <Link href="#" className={`${styles.p_link}`}>400+ AI categories</Link>
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
