var path_img = [
    ["./20240127_082848.jpg", "Website"],
    ["./20240127_113956.jpg", "Logo"],
    ["./20240127_083135.jpg", "UI Kit"],
    ["./20240127_075027.jpg", "Photo"],
    ["./20240127_082826.jpg", "App Design"],
    ["./20240127_113956.jpg", "Website"]
];

let konten_el = document.getElementById("portofolio");

function load(){
    path_img.forEach(img => {
        konten_el.innerHTML += `
        <div class="col">
                <div class="card">
                    <img src=${img[0]} class="card-img-top" alt="Work 1">
                    <div class="card-body">
                        <h5 class="card-title">Portofolio ${img[1]}</h5>
                        <p class="card-text">Description of Portofolio</p>
                    </div>
                </div>
        </div>
        `
      })
}

load();

function show_filtered(filter_type) {
  let filtered_img = path_img.filter(img => img[1] === filter_type);

  let konten_el = document.getElementById("portofolio");
  konten_el.innerHTML = "";

  filtered_img.forEach(img => {
    konten_el.innerHTML += `
        <div class="col">
                <div class="card">
                    <img src=${img[0]} class="card-img-top" alt="Work 1">
                    <div class="card-body">
                        <h5 class="card-title">Portofolio ${img[1]}</h5>
                        <p class="card-text">Description of Portofolio</p>
                    </div>
                </div>
        </div>
    `
  })
}

function show_all() {
    konten_el.innerHTML = "";
    load();
}