import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <main style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <SignIn path="/sign-in" routing="path" />
    </main>
  );
}

export default SignInPage;
