import React, { useState, useEffect } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import RegisterVehicle from "./RegisterVehicle";
import RegisterCliente from "./RegisterCliente";
import postVehiculo from "../../helpers/postVehiculo";
import postCliente from "../../helpers/postCliente";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const options = [
  { key: 1, text: "pick up", value: "pick up" },
  { key: 2, text: "Camion", value: "Camion" },
  { key: 3, text: "Van", value: "Van" },
];

const Register = () => {
  const history = useNavigate();
  const [error, setError] = useState();
  const [errorp, setErrorp] = useState();

  const [conductor, setConductor] = useState({
    id: 0,
    nombre: "",
    edad: 0,
    celular: 0,
    correo: "",
    contraseña: "",
    confirmcontraseña: "",
  });
  const [vehiculo, setVehiculo] = useState({
    conductor: conductor,
    año: 0,
    capacidad: 0,
    placal: "",
    placan: "",
    marca: "",
    tipo: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setConductor({
      ...conductor,
      [name]: value,
    });
    console.log(name);
    if (name === "confirmcontraseña") {
      setVehiculo({ ...vehiculo, conductor });
    }
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
    var anios = fecha.getFullYear();
    if (conductor.nombre === "") {
      setError("Ingrese nombre completo");
    } else if (conductor.id === "") {
      setError("Ingrese su ID");
    } else if (
      conductor.edad === "" ||
      conductor.edad < 18 ||
      conductor.edad > 66
    ) {
      setError("Ingrese una edad correcta >17 <66");
    } else if (conductor.celular === "") {
      setError("Ingrese un numero de contacto");
    } else if (
      conductor.correo === "" ||
      caract.test(conductor.correo) === false
    ) {
      setError("Ingrese un correo correcto");
    } else if (
      conductor.contraseña === "" ||
      !pass.test(conductor.contraseña) ||
      conductor.contraseña.length < 8
    ) {
      setError(
        "Ingrese contraseña correcta. Al menos una mayuscula, una minuscula y minimo 8 caracteres"
      );
    } else if (conductor.contraseña !== conductor.confirmcontraseña) {
      setError("Confirmar contraseña correcta");
    } else if (vehiculo.placal === "" || vehiculo.placal.length < 3) {
      setError("Ingrese Letras de placa correctas");
    } else if (vehiculo.placan === "" || vehiculo.placan.length < 3) {
      setError("Ingrese numero de placa correcto");
    } else if (vehiculo.marca === "") {
      setError("Ingrese marca del vehiculo");
    } else if (
      vehiculo.anio === "" ||
      vehiculo.anio < 1980 ||
      vehiculo.anio > anios + 1
    ) {
      setError("Ingrese modelo correcto de vehiculo");
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
        conductor.correo,
        conductor.contraseña
      )
        .then((usuarioFirebase) => {
          postVehiculo(vehiculo);
          history("/perfil");
          return usuarioFirebase;
        })
        .catch((err) => {
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
  }, []);
  const hidenError = () => {
    setError("");
    setErrorp("");
  };
  const styles = { color: "red" };

  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Registro"} />
        </Segment>

        <Grid.Row centered columns={4}>
          <RegisterCliente
            handleChange={handleChange}
            styles={styles}
            error={error}
            hidenError={hidenError}
          />
          <RegisterVehicle
            handleChangeV={handleChangeV}
            options={options}
            handleDrown={handleDrown}
            hidenError={hidenError}
          />

          <span className="error" style={styles}>
            {errorp}
          </span>
        </Grid.Row>

        <Grid.Row centered>
          <Button primary id="Text" onClick={onRegister}>
            Registrarse
          </Button>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Register;
