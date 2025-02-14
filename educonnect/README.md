# EduConnect

## Descripción
EduConnect es una plataforma de red social académica donde estudiantes y docentes pueden interactuar mediante publicaciones y comentarios. Implementa roles diferenciados para garantizar un entorno seguro y estructurado.

## Características
- **Roles de usuario:**
  - Publicador: Puede crear publicaciones y comentarios.
  - Administrador: Puede eliminar publicaciones y comentarios, además de gestionar usuarios.
- **Autenticación y gestión de sesiones con LocalStorage.**
- **Interfaz responsiva con Material UI y estilos mejorados.**
- **Persistencia de datos en LocalStorage.**
- **Estructura modular con TypeScript.**
- **Diseño centrado y académico.**

## Instalación
### 1. Clonar el repositorio
```sh
git clone https://github.com/tu_usuario/educonnect.git
cd educonnect
```

### 2. Instalar dependencias
```sh
npm install
```

### 3. Ejecutar la aplicación
```sh
npm run dev
```
Accede a la aplicación en `http://localhost:5173/`.

## Uso
1. **Registro e inicio de sesión**
   - Ingresa un nombre de usuario y selecciona un rol (Publicador o Administrador).
2. **Publicaciones**
   - Los Publicadores pueden crear y comentar publicaciones.
   - Los Administradores pueden eliminar publicaciones y comentarios.
3. **Gestión de usuarios**
   - Los Administradores pueden ver la lista de usuarios registrados en la sección de administración.
4. **Navegación**
   - Explora la aplicación mediante la barra de navegación.

## Estructura del proyecto
```
educonnect/
├── src/
│   ├── components/ (Navbar y otros componentes reutilizables)
│   ├── context/ (Gestión de autenticación y estado global)
│   ├── pages/ (Diferentes vistas: Home, Posts, Admin, etc.)
│   ├── styles/ (Archivos CSS para mejorar la apariencia)
│   ├── App.tsx (Configuración de rutas)
│   ├── main.tsx (Punto de entrada)
├── public/
├── package.json
├── README.md
```

## Tecnologías utilizadas
- **React + TypeScript** (Desarrollo de la aplicación)
- **React Router DOM** (Navegación entre páginas)
- **Material UI y CSS personalizados** (Interfaz moderna y responsiva)
- **LocalStorage** (Persistencia de datos)

## Autores
- Jairo Eduardo Pogo Rengel,Jonathan Rodrigo Hernández Ojeda,Hugo Eduardo Montachana Siza

---
Este proyecto es parte de la actividad de aprendizaje n.° 2. 🚀