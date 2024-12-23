'use client';

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver','Android App Developer'],
    loop: true,
    delaySpeed: 2000,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <ParticleBackground />
      
      <div className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
         Aaryan Adithy Sri Shakthi
          </motion.h1>
          
          <motion.div
            variants={fadeIn}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            I am a <span className="text-primary">{text}</span>
            <Cursor cursorStyle="_" />
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="space-x-4"
          >
            <Button
              variant="default"
              className="px-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
            <Button
              variant="outline"
              className="px-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.a
            href="#about"
            variants={fadeIn}
            className="inline-block mt-12 animate-bounce"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}