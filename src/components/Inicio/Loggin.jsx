import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Header, Icon, Input, Segment } from "semantic-ui-react";

const Loggin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorc, setError] = useState();
  const [errorp, setErrorp] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setErrorp("");
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    ).catch((err) => {
      console.log(err);
      switch (err.code) {
        case "auth/invalid-email":
          setError("Correo no valido");
          break;
        case "auth/user-disabled":
          setError("Usuario no habilitado");
          break;
        case "auth/user-not-found":
          setError("Usuario no funciona");
          break;
        case "auth/wrong-password":
          setErrorp("Password equivocado");
          break;
        case "auth/too-many-requests":
          setErrorp("Cuenta temporalmente inactiva");
          break;
        default:
      }
    });
    console.log(userCredential);
  };
  const hidenError = () => {
    setError("");
    setErrorp("");
  };
  const styles = { color: "red" };

  return (
    <>
      <Segment basic>
        <Icon name="user" size="huge" />
      </Segment>
      <Header as="h1" id="Header">
        Iniciar Sesión
      </Header>
      <Segment basic>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          onClick={hidenError}
        />
        <span className="error" style={styles}>
          {errorc}
        </span>
      </Segment>
      <Segment basic>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleChange}
          onClick={hidenError}
        />
        <span className="error" style={styles}>
          {errorp}
        </span>
      </Segment>
      <Segment basic>
        <Button primary id="Text" onClick={handleSubmit}>
          Iniciar sesión
        </Button>
      </Segment>
      <Segment basic>
        <Header as="h5">
          {" "}
          <Link to={"/registro"} id="HiperText">
            No tengo una cuenta
          </Link>
        </Header>
      </Segment>
    </>
  );
};

export default Loggin;
