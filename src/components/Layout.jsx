import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";

const Layout = () => {
  return (
    <div>
      <nav style={{ padding: "1rem", backgroundColor: "#222", color: "#fff", display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/" style={{ marginRight: 16, color: "#fff" }}>CasinoAR</Link>
          <Link to="/games" style={{ marginRight: 16, color: "#fff" }}>Juegos</Link>
          <Link to="/private" style={{ color: "#fff" }}>Privado</Link>
        </div>
        <div>
          <SignedOut>
            <SignInButton mode="modal">
              <button style={{ marginRight: 8 }}>Ingresar</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button>Registrarse</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
