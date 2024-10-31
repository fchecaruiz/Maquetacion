
let solicitudes = [];

function solicitar_informacion() {
    
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
   
    solicitudes.push(solicitud);
    console.log(solicitudes);
}



   

function filtrar_informacion(){

    let solicitudes_filtradas = []

    for (let i = 0; i < solicitudes.length; i++){
         let solicitud = solicitudes[i];

         if (solicitud.ciudades_destino.toLowerCase() == "mallorca" || solicitud.ciudades_destino.toLowerCase() == "canarias" || 
             solicitud.ciudades_destino.toLowerCase() == "galicia") {
        
            solicitudes_filtradas.push(solicitud);
            }
        }
    


    //      if (solicitud.ciudades_destino == "mallorca") {
    //         solicitudes_filtradas.push(solicitud);

    //     } else if (solicitud.ciudades_destino == "canarias") {
    //         solicitudes_filtradas.push(solicitud);

    //     } else if (solicitud.ciudades_destino == "galicia") {
    //         solicitudes_filtradas.push(solicitud);
    //     } 
    // }
    // console.log(solicitudes_filtradas);

    let section_mostrar = document.getElementById("mostrar");
    solicitudes_filtradas.forEach((solicitud)=>{
        section_mostrar.innerHTML += 
        `<p>
            NOMBRE: "${solicitud.nombre}
            <br>
            CIUDAD DE SALIDA: ${solicitud.ciudades_salidas}
            <br> 
            CIUDAD DE DESTINO: ${solicitud.ciudades_destino} 
            <br>
            NUMERO DE PERSONAS: ${solicitud.numero_personas}
            <br>
            FECHA DE SALIDA: ${solicitud.fecha_salida}
            <br>
            FECHA DE LLEGADA: ${solicitud.fecha_llegada}
            <br>
        </p>`    
    })
    console.log(section_mostrar)
}
  


    

            


    

         











