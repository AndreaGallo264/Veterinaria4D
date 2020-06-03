import React, { useState } from 'react';
import CreateNewAdmin from './../CreateNewAdmin/CreateNewAdmin';
import { Button } from 'react-bootstrap';

const ListAdmins = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Create new admin
        </Button>

        <CreateNewAdmin
            show = {show}
            handleClose = {handleClose}
        />
    </div>
    );
}
 
export default ListAdmins;