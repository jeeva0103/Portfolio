import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import SectionContainer from './SectionContainer';



const Certifications = () => {

    const certifications = [
        'Front-End Web Developer, Python Foundation – Infosys Springboard',
        'Web Development training program (30 days) and Internship completion – Skill Vertex',
        'MongoDB Practice, Quantitative Aptitude – Codetantra Platform',
        'Full-Stack Web Development (MERN) Internship – MarkPyroPrime',
        'Full-Stack Development (Java) - Vcodes Chennai',
        'Java Development Internship – Cognifyz Technologies',
        'Master class in react.js (30 days) and Development to Deployment – Novitech R&D pvt ltd.',
        'Certification of completion at AI in IBM skillBuild',
    ];



    return (
        <SectionContainer id="certifications" className="bg-white">
            <div className="max-w-3xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
                        Certifications
                    </h2>
                    <p className="text-base text-neutral-600 max-w-2xl mx-auto">
                        Professional certifications and training programs from industry-leading platforms and organizations.
                    </p>
                </motion.div>

                {/* Certifications List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-neutral-50 rounded-lg p-5 md:p-8"
                >
                    <div className="space-y-3">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex items-start gap-3"
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                                        <FiAward className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                                <p className="text-neutral-700 text-sm md:text-base leading-snug">
                                    {cert}
                                </p>
                            </motion.div>
                        ))}


                    </div>
                </motion.div>


            </div>
        </SectionContainer>
    );
};

export default Certifications;
