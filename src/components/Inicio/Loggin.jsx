import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Input,Segment } from 'semantic-ui-react';

const Loggin = () => {
    return (
        <>
        <Segment basic><Icon name='user' size='huge'/></Segment>
        <Header as='h1' id="Header">            
            Iniciar Sesión
        </Header>
        <Segment basic>
            <Input placeholder="Correo electrónico"/>
        </Segment>
        <Segment basic>
            <Input placeholder="Contraseña"/>
        </Segment>
        <Segment basic>
            <Button primary id="Text">Iniciar sesión</Button>
        </Segment>
        <Segment basic>
            <Header as='h5' > <Link to={"/registro"}  id="HiperText">No tengo una cuenta</Link></Header>
        </Segment>
        
        
        
        
        </>
    )
}

export default Loggin;