import pg from "pg";
import express from "express";
import cors from "cors";

const { Client } = pg;

const client = new Client({
  user: "eulutas20",
  host: "database",
  database: "postgres",
  password: "123123",
  port: 5432,
});
client.connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api-c/list", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal server error");
  }
});

app.delete("/api-c/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await client.query("DELETE FROM users WHERE id = $1", [id]);
    res.send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal server error");
  }
});
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
