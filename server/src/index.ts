import cors = require("cors");
import express = require("express");
import dotenv = require("dotenv");
import Counter from "./template/Counter";
import Home from "./template/Home";
import Navigation from "./template/Navigation";
import NewsArticle from "./template/NewsArticle";
import articles from '../articles.json'

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("GET /");
  res.json(Navigation);
});

app.get("/home", async (req, res) => {
  console.log("GET /home");
  res.json(Home(articles));
});

app.get("/news/:id", (req, res) => {
  const { id } = req.params;
  console.log("GET /news/"+ id);
  const article = articles[id];
  res.json(NewsArticle(article));
});

app.get("/counter", (req, res) => {
  console.log("GET /counter");
  res.json(Counter);
})

app.listen(port, () => console.log(`Server started on port ${port}`));
