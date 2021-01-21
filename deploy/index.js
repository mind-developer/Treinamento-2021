const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
// app.use("/uploads", express.static("../public/uploads/"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/cadastro", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/perfil", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(3397);
