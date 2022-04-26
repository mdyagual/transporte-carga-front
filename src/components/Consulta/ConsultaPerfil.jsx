import React, { useState, useEffect } from "react";
import { Button, Grid, Header, Icon, Input, Segment } from "semantic-ui-react";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import HeaderDinamic from "../../layouts/Header";
import { useNavigate } from "react-router-dom";

const ConsultaPerfil = ({ user }) => {
  const history = useNavigate();
  const [vehiculo, setVehiculo] = useState({
    id: 0,
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
  });

  useEffect(async () => {
    const urlc = "http://localhost:8080/cliente/email/" + user;
    const cli = await fetch(urlc)
      .then((resc) => {
        return resc.json();
      })
      .then((datac) => setCliente(datac))
      .catch((error) => console.log(error));

    const ve = await fetch("http://localhost:8080/vehiculo/cliente/" + user)
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
              value={"Nombre : " + cliente.nombre}
              disabled
            />
            <br />
            <Input
              name="id"
              value={"ID : " + cliente.id}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="email"
              value={"Email : " + cliente.correo}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="edad"
              value={"Edad : " + cliente.edad}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="celular"
              value={"Contacto : " + cliente.celular}
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
