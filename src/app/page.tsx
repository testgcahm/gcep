'use client';

import { Book, Heart, Users, ChevronRight, BarChart3 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Button from '@/componenets/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/componenets/card';
import { useRef } from 'react';

const HomePage = () => {
  // Refs for animation triggers
  const missionRef = useRef(null);
  const patronRef = useRef(null);
  const actionRef = useRef(null);

  // Detect when sections are in view
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const isPatronInView = useInView(patronRef, { once: true, margin: '-100px' });
  const isActionInView = useInView(actionRef, { once: true, margin: '-100px' });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-3 mb-5 mx-auto">
          <Image src="/logo.png" alt="GCEP Logo" width={240} height={240} className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44" />
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary drop-shadow-sm leading-snug">
            Empowering Gujranwala&apos;s Children Through Education
          </h1>
        </div>

        {/* Handwritten Effect Animation */}
        <motion.p
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="dark:text-gray-300 mt-4 max-w-2xl mx-auto text-secondary"
        >
          GCEP is a dedicated non-profit organization working to provide educational opportunities to deserving and orphan children in Gujranwala.
          We believe that education is the key to a brighter future, and we strive to remove financial barriers that prevent children from reaching their full potential.
        </motion.p>
      </header>

      {/* Mission, Vision & Statistics Section - Slide-in Effect */}
      <motion.section
        ref={missionRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mb-12 flex justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{ icon: Book, title: "Our Mission", text: "To ensure every child in Gujranwala has access to quality education, regardless of their financial circumstances." },
            { icon: Heart, title: "Our Vision", text: "A future where orphan children are empowered to achieve their dreams through education." },
            { icon: BarChart3, title: "Statistics", text: "Over 25 children are currently supported by GCEP." }
          ]
            .map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className={`bg-quaternary/50 border-quaternary/50 shadow-lg text-center p-6`}>
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

      {/* Patron Section - Scale-Up Effect */}
      <motion.section
        ref={patronRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isPatronInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="text-3xl font-semibold text-secondary mb-8">Patron in Charge</h2>
        <Card className="mx-auto w-full max-w-xl bg-quaternary/50 border-quaternary/50 shadow-lg p-6 flex flex-col sm:flex-row items-center">
          {/* Patron Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-secondary">
            <Image
              src="/patron.jpeg"
              alt="Patron"
              width={160}
              height={160}
              className="object-cover w-full h-full object-top"
            />
          </div>
          {/* Patron Info */}
          <div className="sm:ml-6 mt-4 sm:mt-0 text-center sm:text-left">
            <CardTitle className="text-xl sm:text-2xl font-semibold text-primary">Dr. Asim Saleem</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              HOD Medicine, GMC Teaching Hospital
            </CardDescription>
          </div>
        </Card>
      </motion.section>

      {/* Call to Action Section - Fade-in with Button Bounce */}
      <motion.section
        ref={actionRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isActionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-semibold text-secondary mb-8">Take Action</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Button
              variant="default"
              size="lg"
              className="bg-primary text-white hover:bg-secondary transition-colors duration-300 px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
            >
              Donate Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Button
              variant="outline"
              size="lg"
              className="text-primary hover:bg-quaternary/50 hover:text-primary transition-colors duration-300 px-8 py-3 rounded-full border-2 border-primary shadow-md hover:shadow-lg"
            >
              Volunteer Today
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
