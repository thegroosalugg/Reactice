import { useNavContext } from './NavBar';
import { motion } from 'framer-motion';

export default function NavButton({ tab }) {
  const { activeTab, changeActiveTab } = useNavContext();

  return (
    <li>
      <motion.button
        whileHover={{ scale: 1.1, color: '#0f86ef' }}
        transition={{ type: 'easeInOut', duration: 0.5 }}
        onClick={() => changeActiveTab(tab)}
      >
        {tab}
      </motion.button>
      {activeTab === tab && (
        <motion.div layoutId='tab-indicator' className='active' />
      )}
    </li>
  );
}
