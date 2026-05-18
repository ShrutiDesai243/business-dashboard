const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shruti@123",
  database: "business_db"
});

db.connect(err => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.get("/total-listings", (req, res) => {
  db.query("SELECT COUNT(*) AS total FROM listing_master", (err, result) => {
    if (err) return res.send(err);
    res.json(result[0]);
  });
});

app.get("/category-count", (req, res) => {
  db.query(
    "SELECT category, COUNT(*) AS count FROM listing_master GROUP BY category",
    (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    }
  );
});

app.get("/city-count", (req, res) => {
  db.query(
    "SELECT city, COUNT(*) AS count FROM listing_master GROUP BY city",
    (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    }
  );
});

app.get("/source-count", (req, res) => {
  db.query(
    "SELECT source, COUNT(*) AS count FROM listing_master GROUP BY source",
    (err, result) => {
      if (err) return res.send(err);
      res.json(result);
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});