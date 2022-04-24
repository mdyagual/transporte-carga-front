import React from "react";
import { Dropdown, Grid, Header, Icon, Input } from "semantic-ui-react";

const RegisterVehicle = ({ handleChangeV, options, handleDrown }) => {
  return (
    <>
      {" "}
      <Grid.Column>
        <Header as="h5" id="Text">
          <Icon name="truck" />
          Datos del vehículo
        </Header>
        <Input
          placeholder="Placa"
          type="text"
          name="placa"
          id="placa"
          onChange={handleChangeV}
        />
        <br />
        <Input
          placeholder="Marca"
          type="text"
          name="marca"
          id="marca"
          onChange={handleChangeV}
        />
        <br />
        <Input
          placeholder="Modelo"
          type="text"
          name="modelo"
          id="modelo"
          onChange={handleChangeV}
        />
        <br />
        <Input
          placeholder="Capacidad"
          type="text"
          name="capacidad"
          id="capacidad"
          onChange={handleChangeV}
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
          />
        </div>
      </Grid.Column>
    </>
  );
};

export default RegisterVehicle;
