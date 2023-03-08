import React from 'react';
import { Container, Row, Col, Card, Nav, Button } from 'react-bootstrap';
import Topbar from '../components/Navbar';
import "../pages/Admin.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdCategory, MdDashboard } from "react-icons/md";

const AdminPanel = () => {
  return (
    <Container fluid>
      <Topbar />
    <div className="d-flex h-100">
      <Row className=" border-right dashboard" style={{width: '250px', position: "absolute", top: "0", bottom: "0", left: "0", background:"black"}}>
        <Col className="d-flex flex-column justify-content-between">
          <div className="p-4">
            <h3 className='text-center'><MdDashboard size="40" /> LOGO</h3>
            <Nav className="nav flex-column" style={{marginTop: "3rem"}}>
              <Nav.Link className="active-link" href="#"><AiOutlineUser size="30" /> Users</Nav.Link>
              <Nav.Link className="link" href="#"><MdCategory size="30" /> Categories</Nav.Link>
              
            </Nav>
          </div>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col>
        <Container>
          <br /><br />
          <Row>
            <Col>
              <h1 className="display-6 posts-text">Posts</h1>
            </Col>
            <Col>
              <a href="/addpost"><Button className="addBtn">Add Posts</Button></a>
            </Col>
          </Row>
          
          <table className="table mt-4">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>10 Ways to Kill A Cat</td>
                <td>johndoe@example.com</td>
                <td>
                  <Button className="edit-btn">Edit</Button>
                  <Button className="delete-btn">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>5 Ways to Write Poem</td>
                <td>janedoe@example.com</td>
                <td>
                  <Button className="edit-btn">Edit</Button>
                  <Button className="delete-btn">Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
          </Container>
        </Col>
      </Row>
    </div>
    </Container>
  );
};

export default AdminPanel;
