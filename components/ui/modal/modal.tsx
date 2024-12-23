'use client';

import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ModalOverlay } from './modal-overlay';
import { ModalContent } from './modal-content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <ModalOverlay onClick={onClose} />
      <ModalContent onClose={onClose} title={title}>
        {children}
      </ModalContent>
    </AnimatePresence>
  );
}