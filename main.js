
class campeon{
    constructor ( nombre , linea, rol){
        this.nombre = nombre,
        this.linea = linea;
        this.rol = rol;
    }
    saludar(){
        console.log( "Bienvenido campeon")
    }
    /*rechazar(){
        console.log( this.nombre + " " + "no es un invocador")
    }*/
}

const mathias = new campeon ("warwick", "jungla", "asesino");
const ivan = new campeon ("varus", "adc" , "mago");
const alicia = new campeon ("akali", "mid", "asesina");
const juan = new campeon ("sion", "top", "tanque");
const nicolas = new campeon ("leona", "support", "tanque");


let lista = [mathias, ivan, alicia, juan, nicolas]


//debugger//

function ingresar(){

let ingreso = true
let intentos = 1

do{
    let usuarioPagina = prompt("ingresa tu nick de usuario").toLowerCase()
    if(usuarioPagina === null){
        continue
    }
    if(usuarioPagina == "mathias" && intentos <=5){
        alert ("Bienvenido "+ mathias.nombre + " el " + mathias.rol)
        mathias.saludar();
        ingreso = false
    }else if(usuarioPagina == "ivan" && intentos <=5){
        alert ("Bienvenido " + ivan.nombre + " el " + ivan.rol)
        ivan.saludar();
        ingreso = false
    }else if(usuarioPagina == "alicia" && intentos <=5){
        alert ("Bienvenido " + alicia.nombre + " la " + alicia.rol)
        alicia.saludar();
        ingreso = false
    }else if(usuarioPagina == "juan" && intentos <=5){
        alert ("Bienvenido " + juan.nombre + " el " + juan.rol)
        juan.saludar();
        ingreso = false
    }else if(usuarioPagina == "nicolas" && intentos <=5){
        alert ("Bienvenido " + nicolas.nombre + " la " + nicolas.rol)
        nicolas.saludar();
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
