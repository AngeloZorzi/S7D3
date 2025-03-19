const library = function () {
  const libraryURL = "https://striveschool-api.herokuapp.com/books";
  const rowContainer = document.querySelector(".row");

  fetch(libraryURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    })
    .then((books) => {
      console.log("DATA", books);
      books.forEach((book) => {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-md-4", "col-lg-3", "mb-4");

        col.innerHTML = `
          <div class="card h-100 border border-1 border-dark-subtle rounded rounded-5">
            <img src="${book.img}" class="card-img-top rounded rounded-top-5" alt="${book.title}" />
            <div class="card-body d-flex flex-column bg-dark border border-1 border-dark-subtle text-light rounded rounded-bottom-5">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">Prezzo: € ${book.price}</p>
              <button class="btn btn-danger mt-auto scarta-btn rounded rounded-pill">Scarta</button>
            </div>
          </div>
        `;

        rowContainer.appendChild(col);
      });

      const scartaButtons = document.querySelectorAll(".scarta-btn");
      scartaButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.closest(".col-6").remove();
        });
      });
    })
    .catch((err) => {
      console.log("Si è verificato un errore:", err);
    });
};

library();
