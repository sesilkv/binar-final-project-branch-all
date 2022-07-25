import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Unprotected = () => {

    const user = useSelector(store => store.user.data)

    if (user === null) {
        return (
            <Outlet />
        )
    } else {
        return (
            <Navigate to='/' />
        )
    }
}


export default Unprotected