
let el, i;
let data = [
  { nombre: "David", apellidopat: "Aguilar", apellidomat: "Delgado", pokemon: "Ponyta" },
  { nombre: "Bethbiray", apellidopat: "Dolores", apellidomat: "Romero", pokemon: "Dragonair"},
  { nombre: "Arely", apellidopat: "Ayala", apellidomat: "Huerta", pokemon: "Nidoking" },
  { nombre: "Sheila", apellidopat: "Coapango", apellidomat: "Ortiz", pokemon: "Tauros" },
  { nombre: "Andrea", apellidopat: "Galicia", apellidomat: "Ortega", pokemon: "Tauros" }
];
let panel = document.querySelector("#panel");

function clearForm() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellidopat").value = "";
    document.querySelector("#apellidomat").value = "";
    document.querySelector("#pokemon").value = "";
  }

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.nombre} ${x.apellidopat} ${x.apellidomat}, ${x.pokemon}`;
    panel.append(el);
  });
}

function create() {
  let nm = document.querySelector("#nombre").value;
  let app = document.querySelector("#apellidopat").value;
  let apm = document.querySelector("#apellidomat").value;
  let pk = document.querySelector("#pokemon").value;
  data = [...data, { nombre: nm, apellidopat: app, apellidomat: apm, pokemon: pk }];
  clearForm();
  console.log(data)
  renderItem();
}

function update() {
  data[i].nombre = document.querySelector("#nombre").value;
  data[i].apellidop = document.querySelector("#apellidopat").value;
  data[i].apellidom = document.querySelector("#apellidomat").value;
  data[i].pokemon = document.querySelector("#pokemon").value;
  renderItem();
}
function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = data[i].nombre;
  document.querySelector("#apellidopat").value = data[i].apellidop;
  document.querySelector("#apellidomat").value = data[i].apellidom;
  document.querySelector("#pokemon").value = data[i].pokemon;
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}


 renderItem();
