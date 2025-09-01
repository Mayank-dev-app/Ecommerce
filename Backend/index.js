const express = require("express");
require("./Controller/database/DbConfig"); //MonogDb Config
const cors = require("cors");

const app = express();
const PORT = 5000;

// CORS enable
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://icart-ecom.netlify.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/v1/", require("./Routes/User"));

app.get("/", (req,res)=>{
  res.send("Server is running");
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
