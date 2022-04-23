import React from 'react';
import { Header, Icon, Image, Segment } from 'semantic-ui-react';
import transportImage from '../../assets/transportImage.png' ;

const ImageTransport = () => {
    return(
        <>
        <Segment basic/>
            <Image src = {transportImage} size='small'/>
       
        </>
    );
}

export default ImageTransport;