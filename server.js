const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  try {
    if (!req.method || !req.url) {
      return res.status(404).json({ Msg: "Invalid Request" });
    }
    const response = {
      email: "kaluvictor130@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Viktor2025-bit/HNG-task-0-repository.git",
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ Msg: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
