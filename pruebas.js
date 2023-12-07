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


function MiConstructor(imagenURL) {
    this.imagen = new Image( );
    this.imagen.src = imagenURL
    }



     code// Crea un nuevo elemento de imagen 
    var img = document.createElement('img'); 
     
    // Establece la ubicación de la imagen 
    img.src = 'ruta/a/mi/imagen.jpg'; 
     
    // Agrega la imagen al documento 
    document.body.appendChild(img); 