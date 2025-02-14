import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/about">Acerca de</Button>
        <Button color="inherit" component={Link} to="/posts">Publicaciones</Button>
        {user ? (
          <Button color="inherit" onClick={logout}>Cerrar sesión</Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">Iniciar sesión</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;