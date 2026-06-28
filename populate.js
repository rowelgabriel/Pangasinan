var aboutCardsRow = document.getElementById('about-cards');

for (var i = 0; i < aboutCards.length; i++) {
  aboutCardsRow.innerHTML +=
    `
      <div class="col-lg-4 col-md-6">
        <div class="card h-100 rounded-4 shadow border-0 text-center p-4">
          <i class="${aboutCards[i].icon} display-4"></i>
          <div class="card-body">
            <div class="card-title h4">${aboutCards[i].title}</div>
            <div class="card-text text-muted">
              ${aboutCards[i].desc}
            </div>
          </div>
        </div>
      </div>
    `;
}

var placesCardsRow = document.getElementById('places-cards');

for (var i = 0; i < places.length; i++) {
  var id = "carousel" + i;
  var imagesHTML = "";

  for (var j = 0; j < places[i].images.length; j++) {
    imagesHTML += `
      <div class="carousel-item ${j === 0 ? "active" : ""}">
        <img src="${places[i].images[j]}" class="d-block w-100" alt="">
      </div>
    `;
  }

  placesCardsRow.innerHTML += `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 rounded-4 shadow border-0">
        <div id="${id}" class="carousel slide">
          <div class="carousel-inner">
            ${imagesHTML}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
        <div class="card-body text-center">
          <div class="card-title fw-bold h4">${places[i].title}</div>
          <div class="card-text text-muted">${places[i].desc}</div>
        </div>
      </div>
    </div>
  `;
}

var festivalsCardsRow = document.getElementById('festivals-cards');

for (var i = 0; i < festivals.length; i++) {
  festivalsCardsRow.innerHTML += `
    <div class="col-lg-4 col-md-6">
      <div class="card h-100 rounded-4 shadow border-0 text-center">
        <img src="${festivals[i].image}" class="img-fluid rounded-top" alt="${festivals[i].title}">
        <div class="card-body">
          <div class="card-title h4">${festivals[i].title}</div>
          <div class="card-text text-muted">
            ${festivals[i].desc}
          </div>
        </div>
      </div>
    </div>
  `;
}
