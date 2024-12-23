'use client';

import { motion } from 'framer-motion';
import { CertificationCard } from './certification-card';
import { certifications } from './data';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my expertise
            and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}