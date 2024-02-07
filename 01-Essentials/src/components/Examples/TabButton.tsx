// @ts-nocheck  // removes annoying parameter any type messages for file
import "./Examples.css";

export default function TabButton({ children, highlighted, ...props }) {
  return (
    <li>
      <button className={highlighted ? 'active' : ''} {...props}>{children}</button>
    </li>
  );
}
