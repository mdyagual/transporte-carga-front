import React from "react";
import { Grid, Header, Icon, Input } from "semantic-ui-react";

const RegisterCliente = ({ handleChange, styles, error, hidenError }) => {
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
          onClick={hidenError}
         
        />
        <br />
        <Input
          placeholder="ID"
          type="text"
          name="id"
          id="id"
          maxLength="10"
          onChange={handleChange}
          onClick={hidenError}
        />
        <br />
        <Input
          placeholder="Edad"
          type="text"
          name="edad"
          id="edad"
          minLength="2"
          maxLength="2"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={handleChange}
          onClick={hidenError}
        />
        <br />
        <Input
          placeholder="Celular"
          type="text"
          name="celular"
          id="celular"          
          maxLength="10"
          onChange={handleChange}
          onClick={hidenError}
        />
        <br />
      </Grid.Column>

      <Grid.Column>
        <br />
        <br />
        <Input
          placeholder="Correo electrónico"
          type="email"
          name="correo"
          id="correo"
          onChange={handleChange}
          onClick={hidenError}
        />
        <br />
        <Input
          placeholder="Contraseña"
          type="password"
          name="contraseña"
          id="contraseña"
          pattern="(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*"
          onChange={handleChange}
          onClick={hidenError}
        />
        <br />
        <Input
          placeholder="Confirmar contraseña"
          type="password"
          name="confirmcontraseña"
          id="confirmcontraseña"
          pattern="(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ].*"
          onChange={handleChange}
          onClick={hidenError}
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
