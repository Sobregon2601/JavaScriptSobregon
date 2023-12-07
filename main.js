const Campeon = function(nombre, linea, rol, imagen) {
    this.nombre = nombre,
    this.linea = linea;
    this.rol = rol;
    this.imagen = imagen;
}

function saludar() {
    console.log("Bienvenido campeon")
}

const campeon1 = new Campeon("Warwick", "Jungla", "Asesino", 'assets/warwick.jpg');
const campeon2 = new Campeon("Varus", "Adc", "Mago", 'assets/varus.jpg');
const campeon3 = new Campeon("Akali", "Mid", "Asesino", 'assets/sion.jpg');
const campeon4 = new Campeon("Sion", "Adc", "Tanque", 'assets/sion.jpg');
const campeon5 = new Campeon("Leona", "Jungla", "Tanque", 'assets/leona.jpg');

let lista = [campeon1, campeon2, campeon3, campeon4, campeon5];

if (localStorage.getItem("campeon")) {
    lista = JSON.parse(localStorage.getItem("campeon"));
} else {
    lista = lista;
}

function filtrarCampeon() {
    const body = document.querySelector("body");
    const input = document.getElementById("seleccionchamp").value;
    const seleccionfinal = input.trim().toLowerCase();
    const resultado = lista.filter((campeon) => campeon.nombre.toLowerCase().includes(seleccionfinal));

    if (resultado.length > 0) {
        const container = document.createElement("div");

        resultado.forEach((campeon) => {
            const card = document.createElement("div");

            const nombre = document.createElement("h3");
            nombre.textContent = ("Nombre:" + " " + campeon.nombre);
            card.appendChild(nombre);

            const linea = document.createElement("h3");
            linea.textContent = ("Linea:" + " " + campeon.linea);
            card.appendChild(linea);

            const rol = document.createElement("h3");
            rol.textContent = ("Rol:" + " " + campeon.rol);
            card.appendChild(rol);

            const imagen = document.createElement('img');
            imagen.src = (campeon.imagen);
            card.appendChild(imagen);

            container.appendChild(card);
        });
        body.appendChild(container);

    } else {
        alert("Campeon no disponible");
    }
}

const inputCampo = document.getElementById("seleccionchamp");
const filtrarboton = document.getElementById("seleccion");


inputCampo.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        filtrarCampeon();
    }
});

filtrarboton.addEventListener("click", () => {filtrarCampeon();
});