const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

function isEven(number) {
  return number % 2 === 0;
}

function isPositive(number) {
  return number > 0;
}

app.get("/", (req, res) => {
  res.send("Number Analyzer API is running");
});

app.get("/analyze", (req, res) => {
  const number = Number(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({
      error: "Invalid number",
    });
  }

  res.json({
    number,
    isEven: isEven(number),
    isPositive: isPositive(number),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
