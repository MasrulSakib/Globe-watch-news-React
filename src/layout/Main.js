import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftItems from '../Pages/Shared/LeftItems/LeftItems';
import RightItems from '../Pages/Shared/RightItmes/RightItems';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftItems></LeftItems>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>

                    <Col lg="3">
                        <RightItems></RightItems>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;