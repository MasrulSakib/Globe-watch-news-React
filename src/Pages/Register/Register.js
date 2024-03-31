import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AuthInfo } from '../../Context/AuthContext/Authcontext';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const { signUp, updateUserProfile, varifyEmail } = useContext(AuthInfo);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageurl = form.imageurl.value;
        // console.log(username, email, password, imageurl);


        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUser(username, imageurl);
                handleVarifyUser();
                toast.success("Please varify your email address");
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

    }


    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleUpdateUser = (username, imageurl) => {
        const profile = {
            displayName: username,
            photoURL: imageurl
        }
        updateUserProfile(profile)

            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleVarifyUser = () => {
        varifyEmail()
            .then(() => { })
            .catch(e => console.error(e))
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
                    <Form.Check
                        onClick={handleAccepted}
                        className='ms-2'
                        required
                        label={<>Accept <Link to={'/terms'}>Terms and Conditions</Link></>}

                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10 }}>
                        <Button type="submit" variant='outline-dark' disabled={!accepted}>Register</Button>
                        <p className='my-2 text-danger'>{error}</p>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;