import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import PublicPage from "./pages/PublicPage";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import Balance from "./pages/Balance";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function PrivateRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        <Route
          path="/games"
          element={
            <PrivateRoute>
              <Games />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/balance"
          element={
            <PrivateRoute>
              <Balance />
            </PrivateRoute>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

export default App;
