import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AuthInfo } from '../../Context/AuthContext/Authcontext';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {

    const { signIn, setLoader } = useContext(AuthInfo);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Email address is not varified. Please varify.');
                }
            })

            .catch(e => {
                console.error(e);
                setError(e.message);
            })

            .finally(() => {
                setLoader(false);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" name='email' placeholder="Email" required />
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
                        <Button type="submit" variant='outline-dark'>Sign in</Button>
                        <p className='text-danger my-2'>{error}</p>
                    </Col>
                </Form.Group>

            </Form>
        </div>
    );
};

export default Login;