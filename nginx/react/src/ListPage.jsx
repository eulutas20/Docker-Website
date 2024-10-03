import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function ListPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [count, setCount] = useState(0); // State olarak count

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api-c/list");
      setUsers(response.data);
      setCount(response.data.length);
    } catch (err) {
      console.error("Error fetching users: " + err);
      alert("Error fetching users: " + err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8081/api-c/delete/${id}`)
        .then(() => navigate("/deleted")) // Silme başarılıysa yönlendir
        .catch((err) => {
          console.error("Error deleting user:", err);
          alert("Error deleting user: " + err);
        });
    } catch (err) {
      console.error("Error during deletion:", err);
      alert("Error during deletion: " + err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ font: "25px", color: "white" }}>Total users: {count}</p>
      <button style={{ width: "auto" }} onClick={() => navigate("/")}>
        Back to Login
      </button>
    </div>
  );
}

export default ListPage;
