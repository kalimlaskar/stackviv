import react from "react";
import Copywriter from './Copywriter';
import { Bars3Icon, BellIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
export default function Footer() {
    return (
        <div className="bg-[#1e1e1e] p-8">
            <div className="w-full flex gap-4 md:gap-32 mx-auto max-w-7xl md:flex-nowrap flex-wrap">
                <div className="flex-none w-72 text-white">
                    Stackviv is a free Generative AI Tools Directory, our aim is to provide access to the best AI websites, their features, and alternatives. We share our expertise with the best tutorials and resources.
                </div>
                <div className="flex-auto w-64 text-white">
                    <span className="text-[#693ee0] text-[20px] leading-[28px] mb-2 font-medium"> Useful Links</span>
                    <ul className="mt-3">
                        <li>
                            About
                        </li>
                        <li className="mt-2">
                            Blogs
                        </li>
                    </ul>
                </div>
                <div className="flex-auto w-64">
                    <span className="text-[#693ee0] text-[20px] leading-[28px] mb-2 font-medium"> Policies</span>
                    <ul className="mt-3 text-white">
                        <li>
                        <Link href="/terms-of-use"> Terms of Use </Link>
                        </li>
                        <li className="mt-2">
                            <Link href="/privacy-policy"> Privacy Policy </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-auto w-64">
                    <span className="text-[#693ee0] text-[20px] leading-[28px] mb-2 font-medium"> Social</span>
                    <ul>
                        <li className="flex items-center justify-start  mt-3">
                            <img src="https://stackviv.ai/wp-content/uploads/2024/09/icons8-instagram-32.png" className="w-100 mr-5 bg-white rounded-[10px]" />
                            <img src="https://stackviv.ai/wp-content/uploads/2024/09/icons8-linkedin-32.png" className="w-100 bg-white rounded-[10px]" />
                        </li>
                    </ul>
                </div>
            </div>
            <Copywriter />
        </div>
    );
}
