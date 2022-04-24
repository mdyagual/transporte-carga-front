
const postPersona = (cliente) => {
    fetch(`http://localhost:8080/cliente`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id : cliente.id,
            edad : cliente.edad,
            celular : cliente.celular,
            nombre:cliente.nombre,
            correo:cliente.correo,
            contraseña : cliente.contraseña,
        })
        

    }).then(data => data).catch(error=>window.alert("Error Post "+error))
    .then(window.alert("La persona se guardo con exito")); 
}

export default postPersona;