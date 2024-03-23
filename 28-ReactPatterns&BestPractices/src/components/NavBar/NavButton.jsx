import { useNavContext } from './NavBar';

export default function NavButton({ tab }) {
  const { activeTab, changeActiveTab } = useNavContext();

  return (
    <li className={activeTab === tab ? 'active' : ''}>
      <button onClick={() => changeActiveTab(tab)}>{tab}</button>
    </li>
  );
}
