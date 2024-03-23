import NavButton from "./NavButton";

export default function NavBar() {
  return (
      <nav className="nav">
        <ul>
          <NavButton label='Accordion' />
          <NavButton label='Locations' />
          <NavButton label='Solar System' />
        </ul>
      </nav>
  );
}
