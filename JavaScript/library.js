const library = function () {
  const libraryURL = "https://striveschool-api.herokuapp.com/books";
  fetch(libraryURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    })
    .catch((err) => {
      console.log("si è verificato un errore", err);
    })
    .then((data) => {
      console.log("DATA", data);
    });
};

library();
