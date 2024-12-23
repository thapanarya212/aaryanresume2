'use client';

import { motion } from 'framer-motion';

interface ModalOverlayProps {
  onClick: () => void;
}

export function ModalOverlay({ onClick }: ModalOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
    />
  );
}