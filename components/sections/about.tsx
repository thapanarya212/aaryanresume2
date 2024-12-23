'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Brain } from 'lucide-react';
import Image from 'next/image';

const skills = [
  { name: 'Frontend Development', progress: 65 },
  { name: 'Backend Development', progress: 62 },
  { name: 'UI/UX Design', progress: 40 },
  { name: 'Android', progress: 60 },
];

const attributes = [
  { icon: Code, label: 'Clean Code' },
  { icon: Palette, label: 'Creative Design' },
  { icon: Brain, label: 'Problem Solving' },
];

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&q=80"
                  alt="Developer workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground">
              I am Aaryan Adithy Sri Shakthi, a web developer from Warangal, Telangana, pursuing a B.Tech in Computer Science Engineering at Centurion University with a GPA of 8.25. I gained hands-on experience during my internship at Uptoskills, developing a responsive dashboard that improved client data visibility by 40%. My projects include a Terrain Recognition model using TensorFlow and an Online Quiz System. I am certified in Full Stack Development (Wipro, 2024) and Azure-900 (Microsoft, 2023), skilled in Java, SQL, HTML, CSS, and React.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mt-12"
        >
          {attributes.map(({ icon: Icon, label }) => (
            <Card key={label} className="p-6 text-center">
              <Icon className="w-8 h-8 mx-auto mb-2" />
              <span className="font-medium">{label}</span>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}