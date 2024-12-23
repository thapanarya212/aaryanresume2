'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ModalContentProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function ModalContent({ onClose, children, title }: ModalContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                 z-50 w-[calc(100%-2rem)] md:w-full md:max-w-4xl max-h-[calc(100vh-4rem)] bg-background 
                 rounded-lg shadow-xl"
    >
      <div className="flex items-center justify-between p-4 border-b">
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-10rem)]">
        {children}
      </div>
    </motion.div>
  );
}