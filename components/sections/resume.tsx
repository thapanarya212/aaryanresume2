'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const experiences = [
  {
    title: "Web Developer Intern",
    company: "UptoSkills",
    period: "September 2024 - DECEMBER 2024",
    description: [
      "Spearheaded the development of multiple full-stack web applications, working closely with both front-end and back-end teams.",
      "Assisted in the design and implementation of a user-friendly dashboard, ensuring it met client specifications and project requirements.",
      "Led a team of 5 developers, mentoring junior developers and fostering collaboration."
    ],
    achievements: [
      "Reduced application load time by 40% through code optimization.",
      "Implemented a CI/CD pipeline using GitHub Actions, automating testing and deployment.",
      "Led a team of 5 developers, mentoring junior developers and fostering collaboration."
    ]
  },
  // {
  //   title: 'Frontend Developer',
  //   company: 'Web Solutions',
  //   period: '2018 - 2020',
  //   description: 'Developed responsive web applications using modern frameworks and led UI/UX improvements.',
  //   achievements: [
  //     'Rebuilt company website increasing conversions by 25%',
  //     'Implemented responsive design system',
  //     'Optimized SEO performance'
  //   ]
  // },
];

export function ResumeSection() {
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
            onClick={() => window.open('https://drive.google.com/file/d/1b-j8btoY4aQueWCcx5pbF4l6D2LC2tZg/view?usp=drive_link', '_blank')}
            className="hover:scale-105 transition-transform"
          >
            <Eye className="mr-2 h-4 w-4" />
            View Resume
          </Button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <div className="text-muted-foreground mb-4">
                  {exp.company} | {exp.period}
                </div>
                <p className="mb-4 text-sm md:text-base">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}