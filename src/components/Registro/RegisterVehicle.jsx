import React from "react";
import { Dropdown, Grid, Header, Icon, Input } from "semantic-ui-react";

const RegisterVehicle = ({
  handleChangeV,
  options,
  handleDrown,
  hidenError,
}) => {
  return (
    <>
      {" "}
      <Grid.Column>
        <Header as="h5" id="Text">
          <Icon name="truck" />
          Datos del vehículo
        </Header>
        <Input
          placeholder="Placa Letra"
          type="text"
          name="placal"
          maxLength="3"
          id="placal"
          onChange={handleChangeV}
          onClick={hidenError}
          onKeyPress={(event) => {
            if (!/[A-Z]/.test(event.key)) {
              window.alert("Solo letras mayusculas");
              event.preventDefault();
            }
          }}
          style={{ width: "91px" }}
        />
        <Input
          placeholder="Numeros"
          type="text"
          name="placan"
          maxLength="3"
          id="placan"
          onClick={hidenError}
          onChange={handleChangeV}
          style={{ width: "90px" }}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <br />
        <Input
          placeholder="Marca"
          type="text"
          name="marca"
          id="marca"
          onChange={handleChangeV}
          onClick={hidenError}
        />
        <br />
        <Input
          placeholder="Modelo"
          type="text"
          name="modelo"
          id="modelo"
          onClick={hidenError}
          onChange={handleChangeV}
          maxLength="4"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <br />
        <Input
          placeholder="Capacidad"
          type="text"
          name="capacidad"
          id="capacidad"
          onClick={hidenError}
          onChange={handleChangeV}
          maxLength="5"
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
        <div>
          <Dropdown
            id="tipo"
            name="tipo"
            options={options}
            item
            button
            search
            selection
            placeholder="Tipo de Vehiculo"
            onChange={handleDrown}
            onClick={hidenError}
          />
        </div>
      </Grid.Column>
    </>
  );
};

export default RegisterVehicle;
