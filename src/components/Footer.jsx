import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </div>

                <div className="flex items-center gap-6 text-neutral-500">
                    <a href="https://github.com/jeeva0103" target="_blank" rel="noreferrer" className="hover:text-neutral-900 transition-colors">
                        <FiGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/jeeva-a-5316102ab" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                        <FiLinkedin size={20} />
                    </a>
                    <a href="mailto:jeevaayyanar123@gmail.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">
                        <FiMail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
