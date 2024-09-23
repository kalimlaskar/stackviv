import react from "react";
import Copywriter from './Copywriter';
import { Bars3Icon, BellIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
export default function Footer() {
    return (
        <div className="bg-[#1e1e1e] p-8">
            <div class="flex gap-32">
                <div class="flex-none w-72">
                    Stackviv is a free Generative AI Tools Directory, our aim is to provide access to the best AI websites, their features, and alternatives. We share our expertise with the best tutorials and resources.
                </div>
                <div class="flex-auto w-64">
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
                <div class="flex-auto w-64">
                    <span className="text-[#693ee0] text-[20px] leading-[28px] mb-2 font-medium"> Policies</span>
                    <ul className="mt-3">
                        <li>
                            Terms of Use
                        </li>
                        <li className="mt-2">
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div class="flex-auto w-64">
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
