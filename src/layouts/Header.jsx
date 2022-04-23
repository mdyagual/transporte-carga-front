import React from "react";
import { Header } from "semantic-ui-react";

const HeaderDinamic = ({title}) => {
    return (
    <Header as='h2' floated='left' id="Header">
    {title}
  </Header>)
}

export default HeaderDinamic;