import React, { Component } from 'react';
import { Card ,Row,Col,Form ,Button} from 'react-bootstrap';
import 'react-responsive-modal/styles.css';


class PostAdmin extends Component {

  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
   
     
    render(){
      const  { createPost } = this.props;
      const { open } = this.state;
        return(

                <form
                onSubmit={(e) => {
                        
                  e.preventDefault();
                  createPost({
                      content: this.contentRef.value,
                      time:  this.timeRef.value,
                      status:'pending',
                      

                  });

                  this.contentRef.value='';
                  this.timeRef.value='';
                
                
                }}
                >
                   <Card style={{ height:'100px',width: '1000px' ,marginTop:'10px',marginLeft:'150px'}}>
  <Card.Body><Form>
  <Row>
    <Col>
      <Form.Control placeholder="Ingrese Tarea" 
      ref={ref => this.contentRef = ref}
      />
    </Col>
    <Col>
    
      <input type="date" ref={ref => this.timeRef = ref}></input>
    
     
    </Col>
    <Col><Button type="submit" variant="primary">Primary</Button></Col>
    
  </Row>
</Form></Card.Body>
</Card>

                </form>
        );
    }

}
export default PostAdmin;