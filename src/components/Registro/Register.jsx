import React, { useState, useEffect } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import RegisterVehicle from "./RegisterVehicle";
import RegisterCliente from "./RegisterCliente";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import transporteCargaAPI from "../../services/transporteCargaAPI";

const options = [
  { key: 1, text: "Pick up", value: "Pick up" },
  { key: 2, text: "Camión", value: "Camión" },
  { key: 3, text: "Van", value: "Van" },
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Register = () => {

  const history = useNavigate();
  const [error, setError] = useState();
  
  const [errorp, setErrorp] = useState();
  const [success,setSucess] = useState();
  const [statusHidden,setStatusHidden] = useState();
  const [disabled,setDisabled] = useState();
  const [vehiculo, setVehiculo] = useState({
    email: "",
    anio: 0,
    capacidad: 0,
    placal: "",
    placan: "",
    marca: "",
    tipo: ""
  });
  const [cliente, setCliente] = useState({
    id: 0,
    edad: 0,
    celular: "",
    nombre: "",
    correo: "",
    contraseña: "",
    confirmcontraseña: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    if (name === "correo") {
      setVehiculo({ ...vehiculo, email: value });
    }
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleDrown = (e, result) => {
    setVehiculo({
      ...vehiculo,
      tipo: result.value,
    });
  };
  const handleChangeV = ({ target: { name, value } }) => {
    setVehiculo({
      ...vehiculo,
      [name]: value,
    });
  };



  const onRegister = () => {
    var caract = new RegExp(
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );
    var pass = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    var fecha = new Date();
    var anio = fecha.getFullYear();
    console.log(cliente.id < 2147483647);
    if (cliente.nombre === "" || !/[A-z]{3,}[ ][A-z]{3,}/.test(cliente.nombre)) {
      setError("Ingrese 1 nombre y por lo menos 1 apellido");
      
    } else if (cliente.id === "" || !/[0-9]{10}/.test(cliente.id) || cliente.id > 2147483647) {
      setError("Ingrese un ID válido");
    } else if (cliente.edad === "" || cliente.edad < 18 || cliente.edad > 66) {
      setError("Ingrese una edad correcta > 17 < 66");
    } else if (cliente.celular === "" || !/[0-9]{10}/.test(cliente.celular)) {
      setError("Ingrese un numero de contacto válido");
    } else if (cliente.correo === "" || caract.test(cliente.correo) === false) {
      setError("Ingrese un correo correcto");
    } else if (
      cliente.contraseña === "" ||
      !pass.test(cliente.contraseña) ||
      cliente.contraseña.length < 8
    ) {
      setError(
        "Ingrese contraseña correcta. Al menos una mayuscula y minimo 8 caracteres"
      );
    } else if (cliente.contraseña !== cliente.confirmcontraseña) {
      setError("Confirmar contraseña correcta");
    } else if (vehiculo.placal === "" || vehiculo.placal.length < 3 || vehiculo.placal.match(/[a-z]/)) {
      setError("Ingrese Letras de placa correctamente: Mínimo 3 y en mayúsculas");
    } else if (vehiculo.placan === "" || vehiculo.placan.length < 3) {
      setError("Ingrese numero de placa correcto");
    } else if (vehiculo.marca === "") {
      setError("Ingrese marca del vehiculo");
    } else if (
      vehiculo.anio < 1980 ||
      vehiculo.anio > anio + 1
    ) {
      setError("Ingrese año correcto de vehiculo");
    } else if (
      vehiculo.capacidad === "" ||
      vehiculo.capacidad < 1 ||
      vehiculo.capacidad > 99999
    ) {
      setError("Ingrese una capacidad correcta");
    } else if (vehiculo.tipo === "") {
      setError("Seleccione tipo de vehiculo");
    } else {

      const usuario = createUserWithEmailAndPassword(
        auth,
        cliente.correo,
        cliente.contraseña
      )
        .then((usuarioFirebase) => {
          const request = {
            placa: vehiculo.placal+vehiculo.placan,
            marca: vehiculo.marca,
            anio: vehiculo.anio,
            capacidad: vehiculo.capacidad,
            tipo: vehiculo.tipo,
            conductor: {
                id: cliente.id,
                nombre: cliente.nombre,
                edad: cliente.edad,
                celular: cliente.celular,
                correo: cliente.correo
            }

          }
          const data = transporteCargaAPI.postDriverInfo(request);
          setSucess("¡Ingreso exitoso! Regresando a la página principal...");
          setStatusHidden(false);
          setDisabled(true);
          sleep(5000).then(() =>  history("/"));
         
          return usuarioFirebase;
        })
        .catch((err) => {
          console.log(err);
          switch (err.code) {
            case "auth/internal-error":
              setError("Error verifique correo");
              break;
            case "auth/weak-password":
              setError("Contraseña debil");
              break;
            case "auth/email-already-in-use":
              setError("Este correo ya está en uso");
              break;
            default:
          }
        });
    }
  };
  useEffect(() => {
    setError("");
    setSucess("");
    setStatusHidden(true);
    setDisabled(false);
  }, []);
  const hidenError = () => {
    setError("");
    setErrorp("");
  };
  
  const stylesErr = { color: "red" };
  const stylesOk = { color: "green" };

  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Registro"} />
        </Segment>

        <Grid.Row centered columns={4}>
          <RegisterCliente
            handleChange={handleChange}
            styles={stylesErr}
            error={error}
            hidenError={hidenError}
          />
          <RegisterVehicle
            handleChangeV={handleChangeV}
            options={options}
            handleDrown={handleDrown}
            hidenError={hidenError}
          />

          <span className="error" style={stylesErr}>
            {errorp}
          </span>
        </Grid.Row>

        <Grid.Row centered>
          <Segment basic>
          <span className="success" style={stylesOk} hidden={statusHidden}>
            {success}
          </span>
          </Segment>
          <Button primary id="Text" onClick={onRegister} disabled={disabled}>
            Registrarse
          </Button>
          
          
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Register;
