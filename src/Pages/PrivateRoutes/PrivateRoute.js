import React, { useContext } from 'react';
import { AuthInfo } from '../../Context/AuthContext/Authcontext';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthInfo);
    const location = useLocation();

    if (loader) {
        return <p className='d-flex justify-content-center'><Spinner animation="border" variant="dark" /></p>
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;