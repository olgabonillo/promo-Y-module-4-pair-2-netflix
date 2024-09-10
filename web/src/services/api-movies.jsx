// login

const getMoviesFromApi = () => {
  console.log("Se están pidiendo las películas de la app");
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
<<<<<<< HEAD
  return fetch('')
    .then(response => response.json())
    .then(() => {
      // CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
      return {
        success: true,
        movies: [
          {
            id: '1',
            title: 'Gambita de dama',
            genre: 'Drama',
            image:
              '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg'
          },
          {
            id: '2',
            title: 'Friends',
            genre: 'Comedia',
            image:
              '//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/friends.jpg'
          }
        ]
      };
=======
  return fetch("//localhost:4000/movies")
    .then((response) => response.json())
    .then((data) => {
      return data;
>>>>>>> b9625cf712c7ff872e4845e282d18b07d4c7ab06
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
