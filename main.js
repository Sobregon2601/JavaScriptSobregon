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

if (localStorage.getItem("Campeon")) {
    lista = JSON.parse(localStorage.getItem("Campeon"))
} else {
    lista = lista;
}


function agregarcampeon(){

    const form = document.createElement("form")  
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" >
    
    <label for="linea-input">Linea:</label>
    <input id= "linea-input" type="text" step="0.01" >

    <label for="rol-input">Rol:</label>
    <input id= "rol-input" type="text" step="0.01" >

    "Nuestro equipo de diseño trabajara en la imagen"

    <button type="submit">Agregar</button>
    `

    form.classList.add("containeragregar")

    form.addEventListener("submit", function (e){ 
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const lineaInput = document.getElementById("linea-input").value.trim()
        const rolInput = document.getElementById("rol-input").value.trim()

        if( nombreInput === "" || lineaInput === "" || rolInput === ""){
            Swal.fire({
                title: "No has agregado ningun campeon",
                text: "¿Vas a usar un campeon ya creado?",
                icon: "question"
            });
            return
        }

        const campeon = new Campeon (nombreInput, lineaInput, rolInput)

        if (lista.some( (elemento)=> elemento.nombre === Campeon.nombre)){ 
            alert("el campeon ya existe")
            return
        }

        lista.push(campeon) 
        localStorage.setItem("campeon", JSON.stringify(lista))
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
            didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "El campeon fue agregado"
        });
        alert(`Se agrego el producto ${campeon.nombre} a la lista`)  

        const container =  document.createElement("div")
        
        lista.forEach((campeon)=>{
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${campeon.nombre}`
        card.appendChild(nombre)

        const linea = document.createElement("p")
        linea.textContent = `linea: ${campeon.linea}`
        card.appendChild(linea)

        const rol = document.createElement("p")
        rol.textContent = `rol: ${campeon.rol}`
        card.appendChild(rol)
        container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container) 

        form.reset() 

    })

    const body = document.querySelector("body")
    body.appendChild(form)

}





function filtrarCampeon() {
    const body = document.querySelector("body");
    const input = document.getElementById("seleccionchamp").value;
    const seleccionfinal = input.trim().toLowerCase();
    const resultado = lista.filter((campeon) => campeon.nombre.toLowerCase().includes(seleccionfinal));

    if (resultado.length > 0) {
        const container = document.createElement("div");
        container.classList.add("container")

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
        let pregunta = confirm("Este campeon no existe, ¿Deseas agregarlo?")
        if (pregunta==true){
            agregarcampeon()
        }
        
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

const agregarBtn = document.getElementById("agregarcampeon")
agregarBtn.addEventListener("click",agregarcampeon)