const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3030, () => {
  console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/legales", (req, res) => {
  res.render("legales");
});
