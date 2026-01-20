import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsappFloatingButton = () => {
  const whatsappNumber = '+918360105386';
  const message = encodeURIComponent('Hi Aman! I would like to discuss a project with you.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </motion.a>
  );
};

export default WhatsappFloatingButton;
