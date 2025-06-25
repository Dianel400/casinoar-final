import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <main style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
      <SignUp path="/sign-up" routing="path" />
    </main>
  );
}

export default SignUpPage;
