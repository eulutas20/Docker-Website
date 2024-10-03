import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const navigate = useNavigate();

  // Login olma işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api-b/add", {
        first_name,
        last_name,
      });

      if (response.data === "Name already exists") {
        navigate("/already-exists");
      } else {
        alert("User Created");
        navigate("/list");
      }
    } catch (err) {
      console.error(err.toString());
      alert("Error: " + err.toString());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
