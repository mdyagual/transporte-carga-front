import React from "react";
import { Button, Dropdown, Grid, Header, Icon, Input, Segment } from "semantic-ui-react";
import HeaderDinamic from "../../layouts/Header";

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

 const Register = () => {
     return (
        <>        
        <Grid stackable container divided="vertically">
            <Segment basic>
            <HeaderDinamic title={"Registro"}  />
            </Segment>
        
            <Grid.Row centered columns={4} >
           
                <Grid.Column >
                
                <Header as='h5' id="Text">
                    <Icon name='user plus'/>Datos del conductor
                </Header>                    
                 <Input placeholder="Nombre y Apellido"/><br/>
                <Input placeholder="ID"/><br/>
                <Input placeholder="Edad"/><br/>
                <Input placeholder="Celular"/><br/>
                </Grid.Column>
                
                <Grid.Column>
                <br/><br/>
                <Input placeholder="Correo electrónico"/><br/>
                <Input placeholder="Contraseña"/><br/>
                <Input placeholder="Confirmar contraseña"/><br/>
                </Grid.Column>

                <Grid.Column>
                <Header as='h5' id="Text">
                    <Icon name='truck'/>Datos del vehículo
                </Header>                    
                 <Input placeholder="Placa"/><br/>
                <Input placeholder="Marca"/><br/>
                <Input placeholder="Modelo"/><br/>
                <Input placeholder="Capacidad"/><br/>
                </Grid.Column>
                
                <Grid.Column>
                <br/><br/>
                <div><Dropdown text='Tipo de vehículo' id="Text" options={options} item button /></div>
                </Grid.Column>
            </Grid.Row>                  
           
           
            
            
            <Grid.Row centered>
                <Button primary id="Text">Registrarse</Button>
            </Grid.Row>
        </Grid>
        </>
     )
 }

 export default Register;