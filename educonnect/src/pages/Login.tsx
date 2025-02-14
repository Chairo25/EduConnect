import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("publicador");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, role);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="publicador">Publicador</option>
        <option value="admin">Administrador</option>
      </select>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;