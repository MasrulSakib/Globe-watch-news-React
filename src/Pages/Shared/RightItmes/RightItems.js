import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';
import RightCarousal from '../RightCarousal/RightCarousal';

const RightItems = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='btn btn-outline-primary mb-2' variant="light"><FcGoogle /> Login Via Google</Button>
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