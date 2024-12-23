'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface CertificationCardProps {
  certification: {
    title: string;
    issuer: string;
    date: string;
    image: string;
    link: string;
    skills: string[];
  };
  index: number;
}

export function CertificationCard({ certification, index }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className="aspect-video relative bg-muted/30">
          <Image
            src={certification.image}
            alt={certification.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold">{certification.title}</h3>
            <Award className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
          </div>
          <p className="text-muted-foreground mb-4">
            {certification.issuer} • {certification.date}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {certification.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            View Certificate
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}