import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import photo from "../images/card.jpg";

const Item = (props) => {
    return ( 
        <Col md={6} lg={4} sm={12}>
            <Card className="mt-4">
                <img className="card-image" alt="img" src={photo} />
            <Card.Body>
                <h5 className="card-title">This is My Post</h5>
                <p>lorem ipsum dolor sit amet</p>
            </Card.Body>
            </Card>
        </Col>
     );
}

const Posts = () => {
    return(
        <Container className="mt-4">
            <Row>
                <Item />
                <Item />
                <Item />
            </Row>
        </Container>
    )
}
 
export default Posts;