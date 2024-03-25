import './NavBar.css'
import { createContext, useContext, useState } from 'react';
import NavButton from './NavButton';

const NavContext = createContext({
  activeTab: '',
  changeActiveTab: () => {},
});

export function useNavContext() {
  const ctx = useContext(NavContext); // create custom useContext hook to replace vanilla hook

  if (!ctx) {
    throw new Error('navContext must be wrapped by <NavBar>');
  }

  return ctx;
}

export default function NavBar({ children }) {
  const [activeTab, setActiveTab] = useState('Accordion');

  function changeActiveTab(tab) {
    setActiveTab(tab);
  }

  const contextValue = {
    activeTab,
    changeActiveTab,
  };

  console.log('[activeTab]:', activeTab);

  return (
    <NavContext.Provider value={contextValue}>
      <nav className='nav'>
        <ul>
          <NavButton tab='Accordion' />
          <NavButton tab='Locations' />
          <NavButton tab='Solar System' />
        </ul>
      </nav>
      {/* use RENDER PROPS to pass state value to app, which will render a page based on the state */}
      {children(activeTab)}
    </NavContext.Provider>
  );
}
