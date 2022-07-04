import React from 'react';
import './ManageOrder.css'
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageOrder = () => {
    const [appointments, setAppointment] = useState([]);
    const [status, setStatus] = useState('');

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }



    useEffect(() => {
        fetch('https://lit-ocean-74625.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
                console.log(data);
            }
            )
    }, [])

    // handleApproved
    const handleUpdate = (id) => {
        fetch(`https://lit-ocean-74625.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        alert('approved successfully');
    };

    return (
        <section className="appointment">
            <div className="container">
                <div className="row ">

                    <h2>Appointments: {appointments.length}</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">ServiceName</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Time</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row?.patientName}
                                        </TableCell>
                                        <TableCell align="right">{row?.email}</TableCell>
                                        <TableCell align="right">{row?.serviceName}</TableCell>
                                        <TableCell align="right">{row?.date}</TableCell>
                                        <TableCell align="right">{row?.time}</TableCell>
                                        <TableCell align="right">
                                            <input onChange={handleStatus} type="text" name="" id="" defaultValue={row?.status} />
                                            <input className='update-btn' type="submit" onClick={() => handleUpdate(row._id)} value="update" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div>
        </section>
    );
};

export default ManageOrder;
