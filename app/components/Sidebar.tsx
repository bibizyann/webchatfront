'use client';

import React from 'react';
import {sidebarLinks} from "../../env-constants";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-content-between bg-slate-400
         dark:bg-dark-1 p-6 pt-28 dark:text-white max-sm:hidden lg:w-[264px]">
            <div className='flex flex-1 flex-col gap-6'>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'flex gap-4 items-center p-4 rounded-lg justify-start',
                                {
                                    'bg-blue-1': isActive,
                                }
                            )}
                        >
                            <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-lg font-semibold max-lg:hidden">
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;