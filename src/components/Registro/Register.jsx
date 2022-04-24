import React, { useState } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import { useAuth } from "../../context/authContext";
import RegisterVehicle from "./RegisterVehicle";
import RegisterCliente from "./RegisterCliente";

const options = [
  { key: 1, text: "pick up", value: "pick up" },
  { key: 2, text: "Camion", value: "Camion" },
  { key: 3, text: "Van", value: "Van" },
];

const Register = () => {
  const [vehiculo, setVehiculo] = useState({
    idCliente: 0,
    modelo: 0,
    capacidad: 0,
    placa: "",
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
  });
  const handleChange = ({ target: { name, value } }) => {
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleDrown = (e, result) => {
    // result.value is the selected value from the Dropdown
    setVehiculo({
      ...vehiculo,
      tipo: result.value,
    });
  };
  const handleChangeV = ({ target: { name, value } }) => {
    console.log(name, value);
    setVehiculo({
      ...vehiculo,
      [name]: value,
    });
  };
  const ver = () => {
    console.log(vehiculo);
  };
  const styles = { color: "red" };
  const [error, setError] = useState();
  const [errorp, setErrorp] = useState();
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
          />
          <RegisterVehicle
            handleChangeV={handleChangeV}
            options={options}
            handleDrown={handleDrown}
          />

          <span className="error" style={styles}>
            {errorp}
          </span>
        </Grid.Row>

        <Grid.Row centered>
          <Button primary id="Text" onClick={ver}>
            Registrarse
          </Button>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Register;
