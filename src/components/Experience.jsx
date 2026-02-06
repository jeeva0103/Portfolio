import React from 'react';
import SectionContainer from './SectionContainer';

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'Mentor Bridge ',
        period: '2024 - Present',
        description: 'Working on enhancing user interfaces and improving user experience for various client projects using React and Tailwind CSS.',
    },
    {
        role: 'Full Stack Developement - Java',
        company: 'Vcodes Technologies Pvt Ltd',
        period: '5 months',
        description: 'Developed and maintained client-facing applications using MERN stack. Collaborated with designers to implement responsive UI/UX designs.',
    },
    {
        role: 'Web Development Intern',
        company: 'MarkPyro Prime Technologies',
        period: '3 months',
        description: 'Assisted in building static websites and User/Admin dasboard. Gained hands-on experience with HTML, CSS, JavaScript, and React.js.',
    },
];

const Experience = () => {
    return (
        <SectionContainer id="experience" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">Professional Experience</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    My professional journey and career highlights.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 sm:pl-0">
                        {/* Timeline Line (Hidden on mobile for simplicity or custom implementation) */}
                        <div className="hidden sm:block w-px bg-gray-200 absolute left-0 top-0 bottom-0 -ml-px"></div>

                        <div className="sm:flex items-start gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                            <div className="sm:w-32 flex-shrink-0 text-sm font-medium text-neutral-500 mb-2 sm:mb-0">
                                {exp.period}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-neutral-900">{exp.role}</h3>
                                <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                                <p className="text-neutral-600 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default Experience;
