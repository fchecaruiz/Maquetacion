
let solicitud_informacion = [];

function solicitar_informacion() {
    
    let nombre = document.getElementById("nombre").value;
    let ciudades_salidas = document.getElementById("ciudad_salida").value;
    let ciudades_destino = document.getElementById("ciudad_destino").value;
    let numero_personas = document.getElementById("numero_personas").value;
    let fecha_salida = document.getElementById("fecha_salida").value;
    let fecha_llegada = document.getElementById("fecha_llegada").value;

    alert(nombre);
    alert(ciudades_salidas);
    alert(ciudades_destino);
    alert(numero_personas);
    alert(fecha_salida);
    alert(fecha_llegada)

    let solicitud_array = {
        nombre : nombre,
        ciudades_salidas : ciudades_salidas,
        ciudades_destino : ciudades_destino,
        numero_personas : numero_personas,
        fecha_salida :fecha_salida,
        fecha_llegada : fecha_llegada
    };

    solicitud_informacion.push(solicitud_array);
};
console.log(solicitud_informacion);



   


let solicitud_filtrado = []
function filtrar_informacion(){

    let nombre = document.getElementById("nombre").value;
    let ciudades_salidas = document.getElementById("ciudad_salida").value;
    let ciudades_destino = document.getElementById("ciudad_destino").value;
    let numero_personas = document.getElementById("numero_personas").value;
    let fecha_salida = document.getElementById("fecha_salida").value;
    let fecha_llegada = document.getElementById("fecha_llegada").value;

    let solicitud = {
        nombre : nombre,
        ciudades_salidas : ciudades_salidas,
        ciudades_destino : ciudades_destino,
        numero_personas : numero_personas,
        fecha_salida :fecha_salida,
        fecha_llegada : fecha_llegada
    };
   

    for (let i = 0; i < solicitud_filtrado.length; i++) {
         let resultado = solicitud_filtrado[i];

         if (resultado.ciudades_destino == "mallorca") {
            console.log("Solicitud a mallorca:", resultado);
        } else if (resultado.ciudades_destino == "canarias") {
            console.log("Solicitud a canarias:",resultado );
        } else if (resultado.ciudades_destino == "galicia") {
            console.log("Solicitud a galicia:", resultado);
        } else {
            console.log("No hay solicitudes a destinos solicitads.");
        }
    }
        solicitud_filtrado.push(solicitud);

    alert(nombre);
    alert(ciudades_salidas);
    alert(ciudades_destino);
    alert(numero_personas);
    alert(fecha_salida);
    alert(fecha_llegada);
  
    console.log(solicitud_filtrado);
}

console.log(solicitud_filtrado);