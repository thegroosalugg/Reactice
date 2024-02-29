import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      {/* Outlet is where the children are loaded, and any persistent component can be places above or below them */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
