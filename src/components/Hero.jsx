import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Hero = () => {
    const handleDownloadResume = () => {
        // Create a link element to trigger download
        const link = document.createElement('a');
        link.href = '/JEEVA A resume.pdf'; // Ensure this path is correct
        link.download = 'Jeeva_A_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-neutral-50 relative overflow-hidden px-4 pt-20">
            {/* Subtle Background Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10 w-full">

                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center md:text-left w-full md:w-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-blue-500 text-white border border-neutral-200 text-neutral-600 text-sm font-semibold mt-4 mb-4 md:mb-6 shadow-sm">
                        Full Stack Developer
                    </span>

                    <h1 className="text-4xl md:text-7xl font-bold text-neutral-900 mb-4 md:mb-6 tracking-tighter leading-tight">
                        Hi, I'm <span className="text-gradient">Jeeva A</span>.
                    </h1>

                    <p className="text-base md:text-xl text-neutral-600 mb-6 md:mb-8 leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
                        I specialize in building scalable web applications and seamless digital experiences.
                        With a passion for both frontend aesthetics and backend architecture, I turn complex problems into elegant solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mb-8 md:mb-12">
                        <button
                            onClick={handleDownloadResume}
                            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            Download Resume <FiDownload />
                        </button>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="btn-secondary-blue w-full sm:w-auto"
                        >
                            Contact Me <FiArrowRight />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-8 text-neutral-400">
                        <a href="https://github.com/jeeva0103" target="_blank" rel="noreferrer" className="hover:text-neutral-900 hover:scale-110 transition-all duration-300">
                            <FiGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/jeeva-a-5316102ab" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all duration-300">
                            <FiLinkedin size={28} />
                        </a>
                        <a href="mailto:jeevaayyanar123@gmail.com" className="hover:text-neutral-900 hover:scale-110 transition-all duration-300">
                            <FiMail size={28} />
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image / Placeholder */}
                <motion.div
                    className="flex-1 flex justify-center md:justify-end w-full md:w-auto"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 transform translate-y-4"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-neutral-100 flex items-center justify-center group">
                            {/* Replace src with your actual image path, e.g., /profile.jpg */}
                            <img
                                src="/jeeva_img.jpeg"
                                alt="Jeeva A"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
