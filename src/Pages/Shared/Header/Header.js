import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftItems from '../LeftItems/LeftItems';
import { Link } from 'react-router-dom';
import { AuthInfo } from '../../../Context/AuthContext/Authcontext';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthInfo);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className='mb-4'>
            <Container>
                <Navbar.Brand><Link className='text-decoration-none' to='/'><h4>Globe Watch News</h4></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link >
                            {
                                user?.uid ?
                                    <>
                                        <Button className='mx-2' variant='light' onClick={handleLogOut}>Log out</Button>
                                        <span>{user?.displayName}</span>
                                    </>
                                    :
                                    <div className='d-flex  gap-2'>
                                        <Button variant="light"><Link to={`/login`} className='text-decoration-none text-black'>Login</Link></Button>
                                        <Button variant="light"><Link to={`/register`} className='text-decoration-none text-black'>Register</Link></Button>
                                    </div>
                            }

                        </Nav.Link>
                        <Nav.Link href="#link">
                            {
                                user?.photoURL ?
                                    <Image
                                        roundedCircle
                                        style={{ height: '30px' }}
                                        src={user?.photoURL}
                                    ></Image>
                                    : <FaUser
                                        style={{ height: '30px' }}
                                    ></FaUser>
                            }
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none d-block'>
                        <LeftItems></LeftItems>
                    </div>
                </Navbar.Collapse >
            </Container >
        </Navbar >
    );
};

export default Header;