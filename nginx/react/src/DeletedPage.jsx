import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./DeletedPage.css";

function DeletedPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0); // State olarak count kullan

  useEffect(() => {
    countUsers(); // Kullanıcıları say
  }, []);

  const countUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api-c/list");
      setCount(response.data.length); // State'i güncelle
    } catch (err) {
      console.error("Error counting users: " + err);
      alert("Error counting users: " + err);
    }
  };

  return (
    <div className="centered-container">
      <div style={{ backgroundColor: "white" }} className="white-frame">
        <h1 style={{ color: "black" }}>Deletion Successful</h1>
        <p style={{ font: "25px", color: "black" }}>Remaining users: {count}</p>
        <button
          style={{
            marginLeft: "1px",
          }}
          onClick={() => navigate("/list")}
          className="button"
        >
          Back to List
        </button>
        <button
          style={{
            marginLeft: "1px",
          }}
          onClick={() => navigate("/")}
          className="button"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default DeletedPage;
