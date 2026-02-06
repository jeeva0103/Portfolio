import React from 'react';
import SectionContainer from './SectionContainer';

const About = () => {
    return (
        <SectionContainer id="about" className="bg-gray-50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Me</h2>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                        I am a passionate Full-Stack Developer with a strong foundation in modern web technologies.
                        My journey in tech started with a curiosity for how things work, leading me to build comprehensive web solutions.
                    </p>
                    <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                        I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy bridging the gap between
                        design and engineering. My goal is to build scalable, maintainable applications that solve real-world problems.
                    </p>
                    <p className="text-neutral-600 text-lg leading-relaxed">
                        When I'm not coding, I'm likely exploring new tech tools, contributing to open source, or enhancing my design skills.
                    </p>
                </div>

                <div className="bio-card">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-4">Quick Bio</h3>
                    <ul className="space-y-4 text-neutral-600">
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-neutral-900 min-w-24">Experience:</span>
                            <span>Fresher</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-neutral-900 min-w-24">Education:</span>
                            <span>B.Sc. in Computer Science</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-neutral-900 min-w-24">Location:</span>
                            <span>Dindigul-624002, Tamil Nadu, India</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-medium text-neutral-900 min-w-24">Interests:</span>
                            <span>Frontend Development (React js), Web Development, UI/UX, AI Integrations</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionContainer>
    );
};

export default About;
