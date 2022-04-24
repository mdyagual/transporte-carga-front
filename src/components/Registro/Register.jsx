import React, { useState } from "react";
import {
  Button,
  Dropdown,
  Grid,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import { useAuth } from "../../context/authContext";

const options = [
  { key: 1, text: "pick up", value: 1 },
  { key: 2, text: "Camion", value: 2 },
  { key: 3, text: "Van", value: 3 },
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

  const { signup } = useAuth();
  const [error, setError] = useState();
  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Registro"} />
        </Segment>

        <Grid.Row centered columns={4}>
          <Grid.Column>
            <Header as="h5" id="Text">
              <Icon name="user plus" />
              Datos del conductor
            </Header>
            <Input
              placeholder="Nombre y Apellido"
              type="text"
              name="nombre"
              id="nombre"
            />
            <br />
            <Input
              placeholder="ID"
              type="number"
              name="id"
              id="id"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <br />
            <Input
              placeholder="Edad"
              type="text"
              name="edad"
              id="edad"
              maxLength="2"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <br />
            <Input
              placeholder="Celular"
              type="text"
              name="celular"
              id="celular"
              maxLength="10"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <br />
          </Grid.Column>

          <Grid.Column>
            <br />
            <br />
            <Input
              placeholder="Correo electrónico"
              type="email"
              name="email"
              id="email"
            />
            <br />
            <Input
              placeholder="Contraseña"
              type="password"
              name="password"
              id="password"
            />
            <br />
            <Input
              placeholder="Confirmar contraseña"
              type="password"
              name="confirmpassword"
              id="confirmpassword"
            />
            <br />
          </Grid.Column>

          <Grid.Column>
            <Header as="h5" id="Text">
              <Icon name="truck" />
              Datos del vehículo
            </Header>
            <Input placeholder="Placa" />
            <br />
            <Input placeholder="Marca" />
            <br />
            <Input placeholder="Modelo" />
            <br />
            <Input placeholder="Capacidad" />
            <br />
          </Grid.Column>

          <Grid.Column>
            <br />
            <br />
            <div>
              <Dropdown
                text="Tipo de vehículo"
                id="Text"
                options={options}
                item
                button
              />
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <Button primary id="Text">
            Registrarse
          </Button>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Register;
