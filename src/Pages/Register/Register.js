import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AuthInfo } from '../../Context/AuthContext/Authcontext';

const Register = () => {
    const { signUp } = useContext(AuthInfo)

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageurl = form.imageurl.value;
        console.log(username, email, password, imageurl);


        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => console.error(e));

    }

    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Username
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='username' placeholder="Username" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" name='email' placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        ImageURL
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" name='imageurl' placeholder="ImageURL" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" variant='outline-dark'>Register</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;