'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="h-full"
    >
      <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
        <div className="text-muted-foreground mb-4">
          {experience.company} | {experience.period}
        </div>
        <p className="mb-4 text-sm md:text-base">{experience.description}</p>
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-muted-foreground">
              {achievement}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}