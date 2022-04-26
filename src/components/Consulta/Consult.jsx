import React, {useState} from "react";
import {
  Dropdown,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";


const Consult = ({vehiculos}) => {
  const [selectModel, setSelectModel] = useState('');
  return (
    <>
      <Grid stackable container divided="vertically">
        <Segment basic>
          <HeaderDinamic title={"Consulta"} />
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
              <Dropdown selection options={vehiculos} placeholder="Selecione..."  onChange={(e,data) =>  setSelectModel(data.value)} value={selectModel}/>
              
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
