import React from "react";
import Topbar from "../components/Navbar";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../pages/Add.css";    

const AddPost = () => {
    return ( 
        <>
        <Topbar />
        <br />
        <br />
        <Container className="form-container">
            <div>
            <br />
            <Form.Control className="input" placeholder="Title" />
            <br />
            
            <Form.Control className="input" placeholder="Description" />
            <br />
            <Form.Control className="textarea" as="textarea" placeholder="Leave a comment here" />
            </div>
            <br /><Button className="saveBtn">
                Save
            </Button> 
        </Container>
        </>
     );
}
 
export default AddPost;