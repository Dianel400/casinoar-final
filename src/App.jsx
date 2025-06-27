import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Página pública
function PublicPage() {
  return <h1>Página pública de CasinoAR 🎰</h1>;
}

// Página privada
function PrivatePage() {
  return <h1>¡Estás logueado y viendo contenido exclusivo de CasinoAR! 🔐</h1>;
}

// Página de juegos
function GamesPage() {
  return <h1>Acá van los juegos del casino 🎲</h1>;
}

// Página no encontrada
function NotFoundPage() {
  return <h1>404 - Página no encontrada 😢</h1>;
}

// Componente principal
function AppRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route path="/games" element={<GamesPage />} />
        <Route
          path="/private"
          element={
            <>
              <SignedIn>
                <PrivatePage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
