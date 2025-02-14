import { useAuth } from "../context/AuthContext";

function Admin() {
  const { role, users } = useAuth();
  if (role !== "admin") return <h1>Acceso denegado</h1>;

  return (
    <div>
      <h1>Panel de Administración</h1>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.username} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;