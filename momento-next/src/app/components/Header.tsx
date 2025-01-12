import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
        <header className="flex justify-between items-center p-4">
            <div className="flex flex-col">
                <Link href="/">
                    <p className="text-4xl font-bold">momento</p>
                </Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.21.896 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Header;