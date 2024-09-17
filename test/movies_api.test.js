// Imports de las librerías.
const supertest = require("supertest");
const server = require("../src/index"); // Importo el fichero a testear.

// Configuración.
const api = supertest(server); // Utilizo la dependencia supertest y le paso el API que quiero testear.

// Describe
describe("/movies", () => {

  test("devuelve un array de peliculas en formato JSON", async () => {
    //Simular la petición al servidor, hacer la llamada.
    const response = await api.get("/movies");

    //Verificar el código de respuesta
    expect(response.headers["content-type"]).toMatch(/json/);
  });
});
