import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import classes from "./Root.module.css";

export default function RootLayouy() {
  return (
    <>
      <NavBar />
      {/* Outlet is where the children are loaded, and any persistent component can be places above or below them */}
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
