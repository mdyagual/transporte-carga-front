import React, { useState, useEffect } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import { useAuth } from "../../context/authContext";
import RegisterVehicle from "./RegisterVehicle";
import RegisterCliente from "./RegisterCliente";
import postVehiculo from "../../helpers/postVehiculo";
import postCliente from "../../helpers/postCliente";

const options = [
  { key: 1, text: "pick up", value: "pick up" },
  { key: 2, text: "Camion", value: "Camion" },
  { key: 3, text: "Van", value: "Van" },
];

const Register = () => {
  const [error, setError] = useState();
  const [errorp, setErrorp] = useState();
  const [vehiculo, setVehiculo] = useState({
    idCliente: 0,
    modelo: 0,
    capacidad: 0,
    placal: "",
    placan: "",
    marca: "",
    tipo: "",
  });
  const [cliente, setCliente] = useState({
    id: 0,
    edad: 0,
    celular: 0,
    nombre: "",
    correo: "",
    contraseña: "",
    confirmcontraseña: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    if (name === "id") {
      setVehiculo({ ...vehiculo, idCliente: value });
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
    if (cliente.nombre === "") {
      setError("Ingrese nombre completo");
    } else if (cliente.id === "") {
      setError("Ingrese su ID");
    } else if (cliente.edad === "" || cliente.edad < 18 || cliente.edad > 66) {
      setError("Ingrese una edad correcta >17 <66");
    } else if (cliente.contraseña !== cliente.confirmcontraseña) {
      setError("Confirmar contraseña correcta");
    } else if (vehiculo.tipo === "") {
      setError("Seleccione tipo de vehiculo");
    } else if (vehiculo.tipo === "") {
      setError("Seleccione tipo de vehiculo");
    } else {
      postCliente(cliente);
      postVehiculo(vehiculo);
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
