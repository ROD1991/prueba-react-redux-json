import React, {Component } from 'react';
import { Card ,Row,Col,Form ,Button} from 'react-bootstrap';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import "react-datepicker/dist/react-datepicker.css";





class Post extends Component { 
  state = { 
    select:'false'
}  

render(){


  console.log(this.props.status);
        const { 
            content,
            time,
            status,
        } = this.props;
    return(

        <Card  style={{ height:'150px',width: '1000px' ,marginTop:'10px',marginLeft:'150px'}}>
        <Card.Body   style={ status == 'pending' ? { background: "yellow"} :  { background: "green" }}><Form>
        <Row>
          <Col>
          <input type="checkbox" onClick={this.state.select} /> {content} 
          </Col>
          <Col>
          
          <input type="date" ref={ref => this.timeRef = ref} value={this.props.time} ></input>
           
          </Col>
          <Col><AccessTimeIcon style={{ fontSize: 40, marginLeft:'190px' }}></AccessTimeIcon></Col>
        </Row>
      </Form></Card.Body>
      </Card>

    );
}




}

export default Post;