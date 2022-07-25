import React from 'react';
import './AlertSellerJual.css';
import { Alert } from "react-bootstrap";

const AlertSellerJual = (props) => {
    return (
        <>
            <Alert
                {...props}
                className='cust-alert'
                variant="success"
                dismissible>
                <p>
                    Harga tawarmu berhasil dikirim ke penjual
                </p>
            </Alert>
        </>
    )
}

export default AlertSellerJual