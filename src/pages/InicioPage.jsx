import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ImageTransport from '../components/Inicio/Image';
import Loggin from '../components/Inicio/Loggin';
import Service from '../components/Inicio/Service';

const InicioPage = () => {
  return (
    <Grid stackable columns={2} textAlign="center" container divided="vertically">
      <Grid.Column>
        <Loggin/>
      </Grid.Column>
      <Grid.Column>
        <Service/>
      </Grid.Column>
    
  </Grid>

);

}

export default InicioPage;