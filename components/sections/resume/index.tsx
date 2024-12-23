'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { ExperienceCard } from './experience-card';
import { Modal } from '@/components/ui/modal/modal';
import { ResumeContent } from './resume-content';
import { experiences } from './data';

export function ResumeSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="resume" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <Button 
            variant="outline"
            onClick={() => setIsResumeOpen(true)}
            className="hover:scale-105 transition-transform"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <Modal 
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          title="Resume"
        >
          <ResumeContent />
        </Modal>
      </div>
    </section>
  );
}