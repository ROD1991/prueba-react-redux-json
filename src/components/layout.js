import React from 'react';
import { Card ,Button,Col } from 'react-bootstrap';
import Fecha from './DateComponent';
import FilterListIcon from '@material-ui/icons/FilterList';


const Layout = (props) => {

    const { children } = props;

    return(


<Card align="center" style={{ height:'150px',width: '1000px' ,marginTop:'10px',marginLeft:'150px'}}>
  
  <Card.Header><h2 align="left" style={{ marginTop:'-10px'}}>Cosas por Hacer</h2> <Fecha/>    </Card.Header>
  <Card.Body>



    
  <Button variant="primary" size="50px" style={{ marginLeft:'-750px',marginTop:'-10px'}}>
     LIBERAR SELECCIONAS
    </Button>
<Col>
<Button aling="left" variant="primary" size="50px" style={{ marginTop:'-65px',marginLeft:"750px"}}>
     <FilterListIcon></FilterListIcon>
    </Button>
</Col>
  
  </Card.Body>

</Card>

    );

}

export default Layout;