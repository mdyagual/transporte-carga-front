import React, {useState} from "react";
import {
  Dropdown,
  Grid,
  Header,
  Icon,
  Segment,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Consult = ({vehiculos}) => {
  const [selectModel, setSelectModel] = useState();
  const ddHandler = (e) => {
    vehiculos.map((o) => o.text==e.target.outerText
                      ? setSelectModel(o.value)
                      : ""); 
    
  }
  const history = useNavigate();
  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Consulta"} />
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
        </Segment>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Segment basic>
              <Header as="h5" className="Text">
                <Icon name="check square outline" /> Vehículos registrados
              </Header>{" "}
            </Segment>
            <Segment basic>
              {" "}
              <Dropdown selection options={vehiculos} placeholder="Selecione..."  onChange={ddHandler} />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Header as="h5" className="Text">
                <Icon name="info circle" /> Información
              </Header>
            </Segment>
            <Segment basic>
              <Segment secondary ><pre>{selectModel}</pre></Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Consult;
