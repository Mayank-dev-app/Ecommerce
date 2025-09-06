const express = require("express");
require("./Controller/database/DbConfig"); // MongoDB Config
const cors = require("cors");

const app = express();
const PORT = 5000;

// CORS enable
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ecommerce-6cax.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Preflight (important for Vercel / browsers)
app.options("*", cors());

app.use(express.json());
app.use("/api/v1/", require("./Routes/User"));
app.use("/api/v1/", require("./Routes/Product"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
