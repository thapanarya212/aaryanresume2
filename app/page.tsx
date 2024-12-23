'use client';

import { motion } from 'framer-motion';
import { ScrollProgress } from '@/components/animations/scroll-progress';
import { ParallaxSection } from '@/components/animations/parallax-section';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificationsSection } from '@/components/sections/certifications';
import { ResumeSection } from '@/components/sections/resume';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <HeroSection />
        <ParallaxSection>
          <AboutSection />
        </ParallaxSection>
        <ParallaxSection>
          <SkillsSection />
        </ParallaxSection>
        <ParallaxSection>
          <ProjectsSection />
        </ParallaxSection>
        <ParallaxSection>
          <CertificationsSection />
        </ParallaxSection>
        <ParallaxSection>
          <ResumeSection />
        </ParallaxSection>
        <ParallaxSection>
          <ContactSection />
        </ParallaxSection>
      </motion.main>
    </>
  );
}