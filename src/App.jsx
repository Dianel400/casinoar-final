import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut
} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function PublicPage() {
  return <h1>Página pública de CasinoAR 🎰</h1>;
}

function PrivatePage() {
  return <h1>¡Estás logueado y viendo contenido exclusivo de CasinoAR! 🔐</h1>;
}

function RoutesWithClerk() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
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
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RoutesWithClerk />
    </BrowserRouter>
  );
}

export default App;

