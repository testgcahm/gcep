'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ShieldCheck, Users, DollarSign, Camera, Globe, HeartHandshake } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/card';

const AboutUsPage = () => {
    // Animation triggers
    const aboutRef = useRef(null);
    const valuesRef = useRef(null);
    const teamRef = useRef(null);

    const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
    const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
    const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-16">
            {/* Hero Section */}
            <motion.section
                ref={aboutRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
            >
                <h1 className="text-2xl sm:text-4xl font-bold text-primary mb-4">Gujranwala Child Education Program Society</h1>
                <h2 className="text-xl sm:text-3xl font-bold text-secondary mb-4">Who We Are</h2>
                <p className="text-base sm:text-lg text-secondary max-w-4xl mx-auto">
                    Founded in 2017 by <strong>G6</strong>, GCEP was created to bridge the educational gap for underprivileged children in Gujranwala.
                    What started as a <strong>small initiative</strong> has transformed into a <strong>movement</strong>, thanks to the unwavering support of our donors and volunteers.
                </p>
                {/* <Image
                    src="/about-us-banner.jpg"
                    alt="Our Mission"
                    width={800}
                    height={400}
                    className="rounded-lg shadow-lg mt-6 w-full sm:w-auto"
                /> */}
            </motion.section>

            {/* Our Values */}
            <motion.section
                ref={valuesRef}
                initial={{ opacity: 0, x: -50 }}
                animate={isValuesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
            >
                <h2 className="text-xl sm:text-3xl font-semibold text-secondary mb-10">Our Core Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {[
                        { title: "Transparency", icon: ShieldCheck, bg: "bg-blue-50", text: "We maintain full financial transparency, ensuring every donation is accounted for." },
                        { title: "Integrity", icon: BookOpen, bg: "bg-yellow-50", text: "We uphold the highest standards of honesty and ethics in our operations." },
                        { title: "Compassion", icon: Users, bg: "bg-green-50", text: "Every decision we make is driven by the desire to help children in need." },
                        { title: "Empowerment", icon: Globe, bg: "bg-purple-50", text: "We believe education empowers children to build a brighter future." },
                        { title: "Community", icon: HeartHandshake, bg: "bg-red-50", text: "We create a support network of donors, volunteers, and educators." }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isValuesInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`p-6 max-w-[350px] mx-auto rounded-xl shadow-md ${value.bg} flex flex-col items-center text-center`}
                        >
                            <value.icon className="w-10 h-10 text-primary mb-3" />
                            <h3 className="text-lg sm:text-xl font-semibold text-primary">{value.title}</h3>
                            <p className="text-gray-700 text-sm">{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Our Team - Centered */}
            <motion.section
                ref={teamRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col items-center text-center"
            >
                <h2 className="text-xl sm:text-3xl font-semibold text-secondary mb-10">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "Finance Department", role: "Ensures donations are used effectively and maintains financial transparency.", icon: DollarSign, bg: "bg-gray-100" },
                        { name: "Media Department", role: "Manages communication, storytelling, and our digital presence.", icon: Camera, bg: "bg-gray-100" },
                        { name: "PR Department", role: "Handles partnerships, outreach, and school visits.", icon: Globe, bg: "bg-gray-100" }
                    ].map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className={`shadow-md rounded-lg p-6 ${dept.bg} flex flex-col items-center`}>
                                <CardHeader className="flex flex-col items-center">
                                    <dept.icon className="w-12 h-12 text-secondary mb-3" />
                                    <CardTitle className="text-lg sm:text-xl font-semibold text-primary">{dept.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 text-sm">{dept.role}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center mt-12"
            >
                <h2 className="text-xl sm:text-3xl font-semibold text-secondary mb-6">Join Us in Making a Difference</h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">Support our mission by donating, volunteering, or spreading the word.</p>
                <a href="/donate" className="bg-primary text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-secondary transition duration-300 inline-block">
                    Donate Now
                </a>
            </motion.section>
        </div>
    );
};

export default AboutUsPage;
