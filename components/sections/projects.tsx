'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Online Quiz System',
    description: [
      'Developed a system that allows administrators to start and stop tests for specific students based on their ERP numbers.',
      'Facilitated user logins without the need to remember credentials.',
      'Enabled admins to generate passwords for students to access quizzes.',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['html', 'css', 'javascript', 'php', 'xml', 'ajax', 'Bootstrap'],
    github: 'https://github.com/thapanarya212/online-quiz-system', // GitHub link
     demo: 'https://github.com/thapanarya212/online-quiz-syste', // Remove or add actual demo link here
  },
  {
    title: 'Terrain Recognition and Detection',
    description: [
      'Developed a machine learning model to accurately recognize and classify various types of terrain (e.g., forest, desert, urban, water bodies).',
      'This project aids in terrain identification using images by training a comprehensive dataset.',
    ],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Pandas', 'cloud platforms'],
    github: 'https://github.com/thapanarya212/Terrain_Recogntion_using_DeepLearning', // GitHub link
     demo: 'https://github.com/thapanarya212/Terrain_Recogntion_using_DeepLearning', // Remove or add actual demo link here
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="text-muted-foreground mb-4">
                    <ul className="list-disc pl-6">
                      {project.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label={`GitHub repository for ${project.title}`}
                        className="hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        aria-label={`Live demo of ${project.title}`}
                        className="hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
