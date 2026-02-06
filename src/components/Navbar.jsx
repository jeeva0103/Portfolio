import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link to="home" smooth={true} duration={500} className="text-2xl font-bold text-neutral-900 tracking-tighter">
                            Jeeva A
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="px-4 py-2 rounded-full text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-900 inline-flex items-center justify-center p-2 rounded-md focus:outline-none hover:bg-neutral-100 transition-colors"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-20 right-0 w-64 h-60% md:hidden bg-white border-l border-neutral-100 overflow-hidden shadow-lg"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks
                                .filter((link) => link.name !== 'Home')
                                .map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-xl text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
