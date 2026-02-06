import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiBox, FiServer, FiGitBranch, FiMonitor, FiCheck, FiPackage, FiSettings } from 'react-icons/fi';
import SectionContainer from './SectionContainer';

const skillsData = [
    {
        category: 'Frontend',
        icon: FiCode,
        techs: [
            { name: 'React', icon: FiBox },
            { name: 'JavaScript (ES6+)', icon: FiMonitor },
            { name: 'Tailwind CSS', icon: FiSettings },
            { name: 'Bootstrap', icon: FiSettings },
            { name: 'HTML5', icon: FiCode },
            { name: 'CSS3', icon: FiCode },
            { name: 'UI/UX Design', icon: FiCheck },
        ],
    },
    {
        category: 'Backend',
        icon: FiServer,
        techs: [
            { name: 'Node.js', icon: FiServer },
            { name: 'Express.js', icon: FiServer },
            { name: 'REST APIs', icon: FiPackage },
            { name: 'Authentication', icon: FiSettings },
        ],
    },
    {
        category: 'Database',
        icon: FiDatabase,
        techs: [
            { name: 'MongoDB', icon: FiDatabase },
            { name: 'MySQL', icon: FiDatabase },
        ],
    },
    {
        category: 'Tools & Others',
        icon: FiTool,
        techs: [
            { name: 'Git & GitHub', icon: FiGitBranch },
            { name: 'VS Code', icon: FiMonitor },
            { name: 'Postman', icon: FiPackage },
            { name: 'Vercel', icon: FiPackage },
            { name: 'Figma', icon: FiBox },
        ],
    },
];

const Skills = () => {
    return (
        <SectionContainer id="skills" className="bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-neutral-100 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">Technical Skills</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto text-base font-light">
                    A collection of modern technologies and tools I use to build robust and scalable applications.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 relative z-10 max-w-6xl mx-auto">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="glass-card p-4 rounded-lg hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex items-center justify-center h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                                <skillGroup.icon className="text-white" size={16} />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900">
                                {skillGroup.category}
                            </h3>
                        </div>
                        <ul className="space-y-1.5">
                            {skillGroup.techs.map((tech, idx) => {
                                const IconComponent = tech.icon;
                                return (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        className="flex items-center gap-2 text-neutral-700 text-sm"
                                    >
                                        <IconComponent size={14} className="text-blue-600 flex-shrink-0" />
                                        <span className="font-medium">{tech.name}</span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Skills;
