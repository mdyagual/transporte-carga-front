import React, { useState, useEffect } from "react";
import { Button, Grid, Header, Icon, Input, Segment } from "semantic-ui-react";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import HeaderDinamic from "../../layouts/Header";
import { useNavigate } from "react-router-dom";

const ConsultaPerfil = ({ user }) => {
  console.log("Usuario " + user);
  const history = useNavigate();
  const [conductor, setConductor] = useState({
    id: 0,
    edad: 0,
    celular: 0,
    nombre: "",
    correo: "",
  });
  const [vehiculo, setVehiculo] = useState({
    conductor: { conductor },
    año: 0,
    capacidad: 0,
    placa: "",
    marca: "",
    tipo: "",
  });
  useEffect(async () => {
    const url = `http://localhost:8080/vehiculo/cliente/${user}`;
    const ve = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setVehiculo(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Registro"} />
        </Segment>

        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Header as="h5" id="Text">
              <Icon name="user plus" />
              Datos del conductor
            </Header>
            <Input
              style={{ width: "280px" }}
              name="nombre"
              value={"Nombre : " + vehiculo.conductor.nombre}
              disabled
            />
            <br />
            <Input
              name="id"
              value={"ID : " + vehiculo.conductor.id}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="email"
              value={"Email : " + vehiculo.conductor.correo}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="edad"
              value={"Edad : " + vehiculo.conductor.edad}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="celular"
              value={"Contacto : " + vehiculo.conductor.celular}
              disabled
            />
            <br />
          </Grid.Column>

          <Grid.Column>
            <Header as="h5" id="Text">
              <Icon name="truck" />
              Datos del vehículo
            </Header>
            <Input
              style={{ width: "280px" }}
              name="placa"
              value={"Placa : " + vehiculo.placa}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="marca"
              value={"Marca : " + vehiculo.marca}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="modelo"
              value={"Modelo : " + vehiculo.modelo}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="capacidad"
              value={"Capacidad : " + vehiculo.capacidad}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="tipo"
              value={"Tipo : " + vehiculo.tipo}
              disabled
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Button
            primary
            id="Text"
            onClick={() => {
              signOut(auth);
              history("/");
            }}
          >
            Cerrar sesión
          </Button>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ConsultaPerfil;
