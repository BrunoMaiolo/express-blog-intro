const express = require("express");
const app = express();
const port = 3000;

//Array di post//
const posts = [
  {
    title: "Ciambellone",
    content: "Un classico dolce soffice perfetto per la colazione.",
    image: "/images/ciambellone.jpeg",
    tags: ["dolci", "colazione"]
  },
  {
    title: "Cracker alla Barbabietola",
    content: "Snack croccante e colorato.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["snack", "salato"]
  },
  {
    title: "Pane Fritto Dolce",
    content: "Ricetta semplice e golosa.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["dolci", "tradizione"]
  },
  {
    title: "Pasta alla Barbabietola",
    content: "Primo piatto creativo e saporito.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["primi", "pasta"]
  },
  {
    title: "Torta Paesana",
    content: "Dolce rustico della tradizione.",
    image: "/images/torta_paesana.jpeg",
    tags: ["dolci", "tradizione"]
  }
];
//Rotta base//
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
//Server//
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});