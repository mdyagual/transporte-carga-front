
const postVehiculo = (vehiculo) => {
    console.log(vehiculo.cliente)
    fetch(`http://localhost:8080/vehiculo`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            placa : vehiculo.placal+vehiculo.placan,
            marca : vehiculo.marca,
            anio : vehiculo.modelo,
            capacidad : vehiculo.capacidad,
            tipo : vehiculo.tipo,
            conductor : vehiculo.conductor,
        })
        

    }).then(data => data)
    .catch(error=>window.alert("Error Post "+error));
    
}

export default postVehiculo;