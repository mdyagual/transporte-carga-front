
const postVehiculo = (vehiculo) => {
    fetch(`http://localhost:8080/vehiculo/`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            idCliente : cliente.id,
            modelo : cliente.edad,
            capacidad : cliente.celular,
            placa:cliente.nombre,
            marca:cliente.correo,
            tipo : cliente.contraseña,
        })
        

    }).then(data => data).catch(error=>window.alert("Error Post "+error))
    .then(window.alert("El vehiculo se guardo con exito")); 
}