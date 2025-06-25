import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { user } = useUser();

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Panel de usuario</h1>
      <p>¡Hola, {user.firstName}!</p>
    </main>
  );
}

export default Dashboard;
