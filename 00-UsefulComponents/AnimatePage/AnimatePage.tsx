// @ts-nocheck
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
