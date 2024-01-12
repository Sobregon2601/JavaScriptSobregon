    /*saludar(){
        console.log( "Bienvenido campeon")
    }
    /*rechazar(){
        console.log( this.nombre + " " + "no es un invocador")
    }*/     


    
/*
//debugger//

function ingresar(){

let ingreso = true
let intentos = 1

do{
    let usuarioPagina = prompt( "¿Quien desea entrar a la grieta del invodador?" ).toLowerCase()
    if(usuarioPagina === null){
        continue
    }
    if(usuarioPagina == "mathias" && intentos <=5){
        alert ("Bienvenido "+ campeon1.nombre + " el " + campeon1.rol),
        saludar();
        ingreso = false
    }else if(usuarioPagina == "ivan" && intentos <=5){
        alert ("Bienvenido " + campeon2.nombre + " el " + campeon2.rol),
        saludar();
        ingreso = false
    }else if(usuarioPagina == "alicia" && intentos <=5){
        alert ("Bienvenido " + campeon3.nombre + " la " + campeon3.rol),
        saludar();
        ingreso = false
    }else if(usuarioPagina == "juan" && intentos <=5){
        alert ("Bienvenido " + campeon4.nombre + " el " + campeon4.rol),
        saludar();
        ingreso = false
    }else if(usuarioPagina == "nicolas" && intentos <=5){
        alert ("Bienvenido " + campeon5.nombre + " la " + campeon5.rol),
        saludar();
        ingreso = false
    }else{
        alert("No esta registrado señor"+ " " + usuarioPagina)
        intentos++
        if(intentos >5){
            alert("6 veces fallo en su ingreso, pruebe otro dia")
            console.error("Este invocador no esta registrado")
            break;
        }
    }
}while(ingreso)

}

ingresar()
*/

/*
function MiConstructor(imagenURL) {
    this.imagen = new Image( );
    this.imagen.src = imagenURL
    }




    var img = document.createElement('img'); 

    img.src = 'ruta/a/mi/imagen.jpg'; 

    document.body.appendChild(img); 

    function limpiarFormulario() {
        document.getElementById("miForm").reset();
}
*/


//agregar productos
function agregarcampeon(){

    const form = document.createElement("form")  //creo el formulario desde js
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" >
    
    <label for="linea-input">Linea:</label>
    <input id= "linea-input" type="text" step="0.01" >

    <label for="rol-input">Rol:</label>
    <input id= "rol-input" type="text" step="0.01" >

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e){ //prevengo el envio del formulario para poder validarlo antes
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const lineaInput = document.getElementById("linea-input".value)
        const rolInput = document.getElementById("rol-input".value)

        if(lineaInput === "" || rolInput === "" || nombreInput === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingresa correctamente los datos",
                footer: '<a href="#">Why do I have this issue?</a>'
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
        alert(`se agrego el producto ${campeon.nombre} a la lista`)  

        const container =  document.createElement("div")
        
        lista.forEach((Campeon)=>{
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


const agregarBtn = document.getElementById("agregarProducto")
agregarBtn.addEventListener("click",agregarProducto)


let link = "https://www.leagueofgraphs.com/es/"


fetch(link)
    .then((originales)=> originales.json())
    .then(()=> console.table())
    .catch((invalido)=>console.log("No disponibles") )

    //RGAPI-7800471a-3b33-474b-acd3-789dbda90b26//
/// api de 24 hs//





/*fetch("campeones.json")
    .then((originales)=> originales.json())
    .then( data=>{

        const campeonesoriginales = data.campeonesoriginales
        const campeonesContainer = document.getElementById("campeones-container")
    
        campeonesoriginales.forEach( campeonoriginal => {
            const campeonesElement = document.createElement("p")
            campeonesElement.textcontent = `Nombre: ${campeonoriginal.nombre}, Rol: ${campeonoriginal.linea},Nombre: ${campeonoriginal.rol} `
            campeonesContainer.appendChild(campeonesElement)
        })
    
    
    
    })
    .catch((error)=>console.log("No disponibles") )*/





    
fetch("campeones.json")
.then((originales)=> originales.json())
.then( data=>{

    const campeonesoriginales = data.campeonesoriginales
    const campeonesContainer = document.getElementById("campeones-container")

    campeonesoriginales.forEach( campeonoriginal => {
        const campeonesElement = document.createElement("p")
        campeonesElement.textcontent = `nombre: ${campeonoriginal.nombre}, linea: ${campeonoriginal.linea}, rol: ${campeonoriginal.rol} `
        campeonesContainer.appendChild(campeonesElement)
    })



})
.catch(error =>{
    console.error("No disponibles") 
})
