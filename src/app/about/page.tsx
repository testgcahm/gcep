'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Users, Target, Handshake, School } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/componenets/card';

const AboutUsPage = () => {
  // Refs for animation triggers
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);

  // Detect when sections are in view
  const isAboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">About GCEP</h1>
        <p className="text-secondary max-w-2xl mx-auto">
          GCEP (Gujranwala Children's Education Program) is a non-profit organization dedicated to providing quality education 
          to underprivileged and orphan children. We believe education is a right, not a privilege, and we work tirelessly 
          to remove financial barriers that prevent children from achieving their dreams.
        </p>
      </motion.section>

      {/* Our Mission & Vision Section */}
      <motion.section
        ref={missionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-12 flex justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To ensure every child in Gujranwala has access to quality education, regardless of their financial circumstances.", className: "bg-[#f0f9ff]" },
            { icon: Handshake, title: "Our Vision", text: "A future where every child, especially orphans, can pursue their dreams through education.", className: "bg-[#fff7e6]" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`shadow-lg text-center p-6 ${item.className}`}>
                <CardHeader className="flex flex-col items-center">
                  <item.icon className="w-10 h-10 text-secondary mb-3" />
                  <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isTeamInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold text-secondary mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Dr. Asim Saleem", role: "Patron in Charge", image: "/patron.jpeg" },
            { name: "Sarah Khan", role: "Project Manager", image: "/team1.jpg" },
            { name: "Ahmed Raza", role: "Education Coordinator", image: "/team2.jpg" }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="shadow-lg bg-quaternary/50 border-quaternary/50 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover w-full h-full" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{member.name}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUsPage;
