import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Button, Header, Icon, Input, Segment } from "semantic-ui-react";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Loggin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();
  const [logeado, setLogeado] = useState();
  const [success,setSucess] = useState();
  const [disabled,setDisabled] = useState();
  const [statusHidden,setStatusHidden] = useState();
  const [errorc, setError] = useState();
  const [errorp, setErrorp] = useState();
  const stylesOk = { color: "green" };

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    if (user.email === "") {
      setError("El correo no puede ser vacio");
    } else if (user.password === "") {
      setErrorp("La contraseña no puede ser vacia");
    } else {
      e.preventDefault();
      setError("");
      setErrorp("");
      const userLogeado = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
        .then((usuarioFirebase) => {
          return usuarioFirebase;
        })
        .catch((err) => {
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
      if (userLogeado) {
        setSucess("Iniciando sesión...");
        setStatusHidden(false);
        setDisabled(true);
        sleep(5000).then(() => { 

          history("/perfil");
          setLogeado(userLogeado);
        
        });
        
        
      }
    }
  };
  useEffect(() => {
    setSucess("");
    setStatusHidden(true);
    setDisabled(false);
  }, []);
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
      <br/>
        <span className="success" style={stylesOk} hidden={statusHidden}>
            {success}
          </span>
      <Segment basic>
          
        {logeado ? (
          <Button primary id="Text"  onClick={() => signOut(auth)}>
            Cerrar sesión
          </Button>
        ) : (
          
          <Button primary id="Text" onClick={handleSubmit}>
            Iniciar sesión
          </Button>
          
        )}
        
         
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
