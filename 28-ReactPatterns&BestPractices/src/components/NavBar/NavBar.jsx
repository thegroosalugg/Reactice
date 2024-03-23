import { createContext, useContext, useState } from 'react';
import NavButton from './NavButton';

const NavContext = createContext({ activeTab: '', changeActiveTab: () => {} });

export function useNavContext() {
  const ctx = useContext(NavContext); // create custom useContext hook to replace vanilla hook

  if (!ctx) {
    throw new Error('navContext must be wrapped by <NavBar>');
  }

  return ctx;
}

export default function NavBar() {
  const [activeTab, setActiveTab] = useState('accordion');

  function changeActiveTab(tab) {
    setActiveTab(tab);
  }

  const contextValue = {
    activeTab,
    changeActiveTab,
  };

  console.log('[activeTab]:', activeTab)

  return (
    <NavContext.Provider value={contextValue}>
      <nav className='nav'>
        <ul>
          <NavButton tab='Accordion' />
          <NavButton tab='Locations' />
          <NavButton tab='Solar System' />
        </ul>
      </nav>
    </NavContext.Provider>
  );
}
