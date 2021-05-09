import {Form , Col, Button, Row} from "react-bootstrap"
import {useState, useContext} from "react"
import React from 'react'
import {UserContext} from "../context/userContext";

const RegisterUserPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {registerUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
            const newuser={
                name,
                email,
                password
            }
            registerUser(newuser);
    }
    return (
        <div>
            <Row className="justify-content-md-center">
         <Col xs= {12} sm={12} md={6} lg={6}
         className="justify-center border border-green mt-5 p-3"
         >
         <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label> name </Form.Label>
          <Form.Control placeholder = "enter name" value ={name} 
          onChange={(text)=>setName(text.target.value)}/>
          </Form.Group>
         
          <Form.Group>
          <Form.Label> email </Form.Label>
          <Form.Control placeholder = "enter email" value ={email} 
          onChange={(text)=>setEmail(text.target.value)}/>

          </Form.Group>
          <Form.Group>
          <Form.Label> password </Form.Label>
          <Form.Control placeholder = "enter password" value ={password} 
          onChange={(text)=>setPassword(text.target.value)}/>
          </Form.Group>
          <Button type="submit">SIGN UP</Button>
         </Form>
         </Col>   
         </Row>
        </div>
    )
}
export default RegisterUserPage;