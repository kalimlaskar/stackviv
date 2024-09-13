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
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    />
                </div>
            </div>
        </div >
    )
}
