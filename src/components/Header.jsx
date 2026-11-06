import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Nathaniel Jay Delos Santos</h2>
      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/about">About</NavLink>{" | "}
        <NavLink to="/projects">Projects</NavLink>{" | "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}