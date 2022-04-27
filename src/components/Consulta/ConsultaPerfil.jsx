import React, { useEffect} from "react";
import { Button, Grid, Header, Icon, Input, Segment } from "semantic-ui-react";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import HeaderDinamic from "../../layouts/Header";
import { useNavigate } from "react-router-dom";
import { getDriverInfoAction } from '../../actions/actionsRegister';
import transporteCargaAPI from '../../services/transporteCargaAPI';
import { useDispatch, useSelector } from "react-redux";


const ConsultaPerfil = ({ user }) => {
  
  /*const [vehiculo, setVehiculo] = useState({
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
  });*/

  /*useEffect(async () => {
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
  }, []);*/

  const dispatch = useDispatch();
  const history = useNavigate();

  const info = useSelector( (state) => state.register.vehiculo);
  const cond = useSelector( (state) => state.register.conductor);

  const getDriverInfo = async (correo) => {
      try {
          const data = await transporteCargaAPI.getDriverInfo(correo);            
          dispatch(getDriverInfoAction(data));          
      }catch (error){
          console.log(error);
      }
  };

  useEffect(() => {   
      getDriverInfo(user);
  },[]);




  //------------------------------------------
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
              value={"Nombre : " + cond.nombre}
              disabled
            />
            <br />
            <Input
              name="id"
              value={"ID : " + cond.id}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="email"
              value={"Email : " + cond.correo}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              name="edad"
              value={"Edad : " + cond.edad}
              style={{ width: "280px" }}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="celular"
              value={"Contacto : " + cond.celular}
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
              value={"Placa : " + info.placa}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="marca"
              value={"Marca : " + info.marca}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="modelo"
              value={"Año : " + info.anio}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="capacidad"
              value={"Capacidad : " + info.capacidad}
              disabled
            />
            <br />
            <Input
              style={{ width: "280px" }}
              name="tipo"
              value={"Tipo : " + info.tipo}
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
