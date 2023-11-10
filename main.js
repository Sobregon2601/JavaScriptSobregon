


///nicks usuarios que acceden : profesor1 , tutor1 y tutor 2///

//debugger//

let ingreso = true
let intentos = 1

do{
    let usuarioPagina = prompt("ingresa tu nick de usuario").toLowerCase()
    if(usuarioPagina === null){
        break
    }
    if(usuarioPagina == "profesor1" && intentos <=5){
        alert ("bienvenido "+ " " + "lautaro")
        ingreso = false
    }else if(usuarioPagina == "tutor1" && intentos <=5){
        alert ("bienvenido" + " " + "ramiro")
        ingreso = false
    }else if(usuarioPagina == "tutor2" && intentos <=5){
        alert ("bienvenido" + " " + "profe")
        ingreso = false
    }else{
        alert("no esta registrado señor"+ " " + usuarioPagina)
        intentos++
        if(intentos >5){
            alert("6 veces fallo en su ingreso, pruebe otro dia")
            console.error("Este usuario no esta registrado")
            break
        }
    }
}while(ingreso)
