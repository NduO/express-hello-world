const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from Render via futopay!");
});

app.get("/accounts", (req, res) => {
  const urlParams = req.originalUrl;
  res.send(JSON.stringify({mode:json,amount:2500}));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
