import { useState } from "react";
import { useAuth } from "../context/AuthContext";

interface Post {
  id: number;
  author: string;
  content: string;
  comments: string[];
}

function Posts() {
  const { user, role } = useAuth();
  const [posts, setPosts] = useState<Post[]>(JSON.parse(localStorage.getItem("posts") || "[]"));
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!user) return;
    const post: Post = { id: Date.now(), author: user, content: newPost, comments: [] };
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setNewPost("");
  };

  const deletePost = (id: number) => {
    if (role !== "admin") {
      console.error("No tienes permisos para eliminar publicaciones.");
      return;
    }
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <h1>Publicaciones</h1>
      {user && (
        <div>
          <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} />
          <button onClick={addPost}>Publicar</button>
        </div>
      )}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p><strong>{post.author}:</strong> {post.content}</p>
            {role === "admin" && (
              <button onClick={() => deletePost(post.id)}>Eliminar</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;