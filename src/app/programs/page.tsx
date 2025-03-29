'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Programs: React.FC = () => {
    return (
        <section id="programs" className="py-16 px-6 min-h-screen flex flex-col items-center bg-gray-50">
            {/* Heading Section */}
            <motion.div 
                className="max-w-4xl text-center mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    At GCEP, we are committed to making education and support accessible to those in need. 
                    Our programs provide <strong className='text-secondary'>financial aid, mentorship, and essential resources </strong> 
                    to deserving students and orphans, empowering them to build a brighter future.
                </p>
            </motion.div>

            {/* Scholarship Program (No Card) */}
            <motion.div 
                className="max-w-3xl w-full text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-primary mb-4">Scholarship Program</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    The <strong className='text-secondary'>Scholarship Program</strong> ensures that deserving students with financial hardships 
                    can continue their education by covering:
                </p>
                <ul className="space-y-3 text-gray-700 inline-block text-left">
                    {["School fees", "Stationery and study materials", "Uniform expenses", "Paper and examination fees"].map((item, index) => (
                        <motion.li 
                            key={index} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <span className="w-3 h-3 bg-primary rounded-full"></span> <strong className='text-secondary'>{item}</strong>
                        </motion.li>
                    ))}
                </ul>

                {/* Selection Process */}
                <h4 className="text-3xl font-semibold text-primary mt-9 mb-3">Selection Process</h4>
                <p className="text-gray-700">
                    We conduct thorough background checks, visit the homes of <strong className='text-secondary'>deserving orphan students</strong>, 
                    and verify their cases before providing financial support.
                </p>

                {/* Annual Coverage */}
                <h4 className="text-3xl font-semibold text-primary mt-8">Annual Scholarship Coverage</h4>
                <p className="text-gray-700 font-medium text-lg">
                    <strong className='text-secondary'>Total Fees Covered in 2024:</strong>  
                    <span className="font-bold text-primary text-2xl block mt-2">540,360 PKR</span>
                </p>

                {/* Scholarship Image */}
                <motion.div 
                    className="w-full flex justify-center mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Image 
                        src="/program.jpeg" 
                        alt="Scholarship Program" 
                        width={500} 
                        height={300} 
                        className="rounded-lg shadow-md"
                    />
                </motion.div>
            </motion.div>

            {/* Orphan Support Program (Single Centered Card) */}
            <motion.div 
                className="bg-white shadow-lg p-10 rounded-2xl max-w-3xl w-full text-center mt-16 hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl font-bold text-primary mb-4">Orphan Support Program</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Our <strong className='text-secondary'>Orphan Support Program</strong> provides comprehensive assistance to orphan children, 
                    ensuring they receive <strong className='text-secondary'>education, mentorship, and essential resources</strong> to shape their future.
                </p>
                <ul className="space-y-3 text-gray-700 inline-block text-left">
                    {[
                        "Full educational support (fees, books, materials)",
                        "Mentorship and career guidance",
                        "Essential resources for daily needs",
                        "Emotional and psychological support"
                    ].map((item, index) => (
                        <motion.li 
                            key={index} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <span className="w-3 h-3 bg-primary rounded-full"></span> <strong className='text-secondary'>{item}</strong>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Programs;
