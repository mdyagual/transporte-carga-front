import React from "react";
import { Grid, Header, Icon, Input } from "semantic-ui-react";
const RegisterCliente = (handleChange, styles, error) => {
  return (
    <>
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
        />
        <br />
        <Input
          placeholder="Contraseña"
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <br />
        <Input
          placeholder="Confirmar contraseña"
          type="password"
          name="confirmpassword"
          id="confirmpassword"
        />
        <br />
        <span className="error" style={styles}>
          {error}
        </span>
      </Grid.Column>
    </>
  );
};

export default RegisterCliente;
