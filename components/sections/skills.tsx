'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  Code, 
  Layout, 
  Database, 
  PenTool,   // Changed to PenTool for UI/UX Design
  Smartphone,
  Terminal,
  Coffee
} from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', ]
  },
  
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'PHP', 'MYSQL', 'MongoDB', ]
  },
  {
    category: 'UI/UX Design',
    icon: PenTool,  // Updated to PenTool icon
    items: ['Figma']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: ['React Native',  'Android']
  },
  {
    category: 'languages',
    icon: Layout,
    items: ['Java','C++']
  },
  
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div key={skill.category} variants={item}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <skill.icon className="w-8 h-8 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
