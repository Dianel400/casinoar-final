import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#111", color: "#fff" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><Link to="/" style={{ color: "#fff" }}>Inicio</Link></li>
        <li><Link to="/games" style={{ color: "#fff" }}>Juegos</Link></li>
        <li><Link to="/profile" style={{ color: "#fff" }}>Perfil</Link></li>
        <li><Link to="/balance" style={{ color: "#fff" }}>Cargar Saldo</Link></li>
      </ul>
    </nav>
  );
}
