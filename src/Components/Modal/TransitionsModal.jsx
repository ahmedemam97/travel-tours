import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal({ open, handleClose, status }) {

    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-title" variant="h6" component="h2">
                    {status === 'success' ? 'Booking Confirmed!' : 'Incomplete Data'}
                </Typography>
                <Typography id="modal-description" sx={{ mt: 2 }}>
                    {status === 'success'
                        ? 'Thank you for your booking. We have sent a confirmation email to you.'
                        : 'Please fill in all required fields before booking.'}
                </Typography>
                <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
}