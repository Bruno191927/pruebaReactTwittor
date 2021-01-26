import React,{useState} from 'react';
import { Row,Col,Form,Button} from "react-bootstrap";
import "./SignUpForm.scss";
export default function SignUpForm(props) {
    const {setShowModal} = props;
    const [formData, setFormData] = useState(initialFormValue());
    const onSubmit= e =>{
        e.preventDefault();
        setShowModal(false);
        console.log(formData);
    }

    const onChange = e =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    return (
        <div className="sign-up-form">
            <h2>Crea tu cuenta</h2>
            <Form onSubmit={onSubmit} onChange={onChange}>

                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="Nombre" 
                                name="firstName"
                                defaultValue={formData.firstName}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                type="text" 
                                placeholder="Apellido" 
                                name="lastName"
                                defaultValue={formData.lastName}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        defaultValue={formData.email}
                    />
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Control 
                                type="password" 
                                placeholder="Contraseña" 
                                name ="password"
                                defaultValue={formData.password}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                type="password" 
                                placeholder="Repetir Contraseña" 
                                name="repeatPassword"
                                defaultValue={formData.repeatPassword}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Regístrate
                </Button>

            </Form>
        </div>
    )
}

function initialFormValue(){
    return {
        firstName :"",
        lastName:"",
        email:"",
        password:"",
        repeatPassword:""
    }
}
