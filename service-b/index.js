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

const createTable = async () => {
  const query = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100)
      );
    `;
  await client.query(query);
};

createTable().catch((err) => console.error("Table creation error:", err));
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api-b", (req, res) => res.send("Login Page!!"));

app.post("/api-b/add", async (req, res) => {
  const { first_name, last_name } = req.body;
  try {
    const checkUser = await client.query(
      "SELECT * FROM users WHERE first_name = $1 AND last_name = $2",
      [first_name, last_name]
    );

    if (checkUser.rows.length > 0) {
      res.send("Name already exists");
    } else {
      await client.query(
        "INSERT INTO users (first_name, last_name) VALUES ($1, $2)",
        [first_name, last_name]
      );
      res.send({ message: "User added successfully" });
    }
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal server error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
