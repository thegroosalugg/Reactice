import Badge from './Badge.jsx';
import { motion } from 'framer-motion';

function Tab({ isSelected, onSelect, badgeCaption, children }) {
  return (
    <li>
      <button
        className={isSelected ? 'selected' : undefined}
        onClick={onSelect}
      >
        {children}
        {/* adding a key here ensures this component is detroyed and recreated each time the badgeCaption is updated, this ensures
        the animations inside Badge will execute again */}
        <Badge key={badgeCaption} caption={badgeCaption}></Badge>
      </button>
      {/* layoutId detects when this component is rendered from one place to another in the DOM and animates it */}
      {isSelected && <motion.div layoutId='tab-indicator' className="active-tab-indicator" />}
    </li>
  );
}

export default function ChallengeTabs({
  selectedType,
  onSelectType,
  challenges,
  children,
}) {
  return (
    <>
      <menu id="tabs">
        <Tab
          isSelected={selectedType === 'active'}
          onSelect={() => onSelectType('active')}
          badgeCaption={challenges.active.length}
        >
          Active
        </Tab>
        <Tab
          isSelected={selectedType === 'completed'}
          onSelect={() => onSelectType('completed')}
          badgeCaption={challenges.completed.length}
        >
          Completed
        </Tab>
        <Tab
          isSelected={selectedType === 'failed'}
          onSelect={() => onSelectType('failed')}
          badgeCaption={challenges.failed.length}
        >
          Failed
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
