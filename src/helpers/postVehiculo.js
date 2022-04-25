
const postVehiculo = (vehiculo) => {
    console.log(vehiculo)
    fetch(`http://localhost:8080/vehiculo`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            idCliente : vehiculo.idCliente,
            modelo : vehiculo.modelo,
            capacidad : vehiculo.capacidad,
            placa : vehiculo.placal+vehiculo.placan,
            marca : vehiculo.marca,
            tipo : vehiculo.tipo,
        })
        

    }).then(data => data)
    .catch(error=>window.alert("Error Post "+error));
    
}

export default postVehiculo;