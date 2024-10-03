import { useNavigate } from "react-router-dom";

function AlreadyPage() {
  const navigate = useNavigate();

  return (
    <div
      className="centered-container"
      style={{
        display: "grid",
        placeItems: "center", // This centers the grid item both horizontally and vertically
        height: "100vh",
        gridTemplateColumns: "auto auto", // Define two columns
        gap: "20px", // Space between grid items
      }}
    >
      <span style={{ color: "white", fontSize: "20px" }}>
        Name Already Exists
      </span>
      <button
        onClick={() => navigate("/")}
        className="button"
        style={{
          backgroundColor: "#007BFF", // Style the button with a blue background
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Login
      </button>
    </div>
  );
}

export default AlreadyPage;
