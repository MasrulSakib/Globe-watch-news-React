import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';
import RightCarousal from '../RightCarousal/RightCarousal';
import { AuthInfo } from '../../../Context/AuthContext/Authcontext';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const RightItems = () => {
    const { providerLogin, setLoader } = useContext(AuthInfo)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
            .finally(() => { setLoader(false) })
    }

    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleLogin} className='btn btn-outline-primary mb-2' variant="light"><FcGoogle /> Login Via Google</Button>
                    <Button className='btn btn-outline-dark' variant="light"><FaGithub /> Login Via GitHub</Button>
                </ButtonGroup>
            </div>
            <div className='mt-4'>
                <h5 className='fw-bold'>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> YouTube</ListGroup.Item>
                </ListGroup>
            </div>
            <RightCarousal></RightCarousal>
        </div>
    );
};

export default RightItems;