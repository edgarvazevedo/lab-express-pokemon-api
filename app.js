const express = require("express");

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();
app.use(express.json());

app.get("/pokemon", (req, res) => {
  return res.status(200).json(allPokemon);
});

app.get("/pokemon", (req, res) => {
  const foundPokemon = allPokemon.find((poke) => {
    return String(poke.id) === req.params.id;
  });

  if (foundPokemon) {
    return res.status(200).json(foundPokemon);
  }
  return res.status(404).json({ msg: "Pokemon not found" });
});

// -- Define your route listeners here! --

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
