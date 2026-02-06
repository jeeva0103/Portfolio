import React from 'react';
import SectionContainer from './SectionContainer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'Smart Healthcare Assistance Web App',
        description: 'An AI-powered healthcare assistance platform that helps users with their medical needs and requirements. Features intelligent chatbot integration using advanced CNN algorithms to provide personalized health guidance and support.',
        tags: ['React', 'JavaScript', 'CNN Algorithm', 'Chatbot'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
    {
        title: 'Online Course Platform',
        description: 'A comprehensive online learning platform inspired by Coursera, enabling students to purchase and consume courses at their own pace. Integrated with a robust backend to manage course data, user progress, and payments securely using MySQL database.',
        tags: ['React', 'Node.js', 'MySQL', 'Backend Integration'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
    {
        title: 'E-Commerce Admin Panel',
        description: 'A full-featured user and admin control panel for e-commerce platforms. Allows administrators to manage user accounts, site settings, inventory, and customer data efficiently with an intuitive interface built with React and Node.js.',
        tags: ['React', 'Node.js', 'Admin Panel', 'Database'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
    {
        title: 'Cash Book Financial Manager',
        description: 'A personal finance management application built with React that enables users to track, maintain, and monitor their financial transactions. Features expense tracking, budget planning, and financial analytics for better money management.',
        tags: ['React', 'JavaScript', 'Finance', 'Charts'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
    {
        title: 'Dazzle Cosmetics E-Commerce Store',
        description: 'A fully responsive e-commerce platform for cosmetics featuring product listings, shopping cart, and checkout functionality. Built with HTML, CSS, JavaScript, and Tailwind CSS to deliver an engaging shopping experience across all devices.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Responsive'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
    {
        title: 'Dentist Portfolio Website',
        description: 'A professional, customized portfolio website designed specifically for a dental practice. Features a user-friendly design that showcases services, builds trust with patients, and provides easy appointment booking capabilities.',
        tags: ['React', 'Responsive Design', 'Portfolio', 'Tailwind CSS'],
        github: 'https://github.com',
        demo: 'https://example.com',
    },
];

const Projects = () => {
    return (
        <SectionContainer id="projects" className="bg-neutral-50 relative">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-neutral-900 mb-6 tracking-tight">Projects</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-lg font-light">
                    Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="glass-card rounded-2xl overflow-hidden flex flex-col group">
                        

                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                            <p className="text-neutral-600 mb-6 flex-1 leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold uppercase tracking-wide rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pt-6 border-t border-neutral-100">
                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 font-semibold text-sm transition-colors">
                                    <FiGithub size={20} /> View Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neutral-600 hover:text-blue-600 font-semibold text-sm transition-colors">
                                    <FiExternalLink size={20} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Projects;
