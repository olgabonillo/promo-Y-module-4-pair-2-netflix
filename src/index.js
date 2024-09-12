const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// Create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set("view engine", "ejs");

async function getDBConnection() {
  const connection = await mysql.createConnection({
    // configuro la conexión
    host: "localhost",
    user: "root",
    password: "Ariadna18",
    database: "netflix",
  });
  connection.connect(); // conecto
  return connection;
}

// Creamos un GET para el fetch
server.get("/movies", async (req, res) => {
  const connection = await getDBConnection();
  const sql = "SELECT * FROM movies WHERE genre = ?";
  const [genreResult] = await connection.query(sql, [req.query.genre]);
  console.log(genreResult);
  connection.end();

  res.json({
    status: "success",
    result: genreResult,
  });

  connection.end();
});

// Endpoint para el motor de plantillas
server.get("/movie/:movieId", async (req, res) => {
  const connection = await getDBConnection();
  const id = req.params.movieId;
  const sqlQuery = "SELECT * FROM movies WHERE idMovies = ?";
  const [result] = await connection.query(sqlQuery, [id]);
  connection.end();
  res.render("movie", {result: result[0]});
});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Para crear un servidor estático
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Servidor estático para el CSS
const staticServerCss = "./src/public-css";
server.use(express.static(staticServerCss));