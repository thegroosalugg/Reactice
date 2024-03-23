import { useNavContext } from "./NavBar";

export default function NavButton({ tab }) {
  const { changeActiveTab } = useNavContext();

  return (
    <li>
      <button onClick={() => changeActiveTab(tab)}>{tab}</button>
    </li>
  );
}
