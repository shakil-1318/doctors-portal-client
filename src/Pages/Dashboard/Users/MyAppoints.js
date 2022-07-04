import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Calender from '../../../Pages/Shared/Calendar/Calendars'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyAppoints = () => {
    const { user } = useAuth();
    const [appointments, setAppointment] = useState([]);

    const [date, setDate] = useState(new Date());



    useEffect(() => {
        const url = `http://localhost:5000/appointment?email=${user.email}&&date=${date}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppointment(data)
                console.log(data);
            }
            )
    }, [date])
    return (
        <section className="appointment">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6">
                        <Calender
                            date={date}
                            setDate={setDate}
                        ></Calender>
                    </div>
                    <div className="col-lg-6">
                        <h2>Appointments: {appointments.length}</h2>
                        <TableContainer component={Paper}>
                            <Table sx={{}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell >Time</TableCell>
                                        <TableCell >Status</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {appointments.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.patientName}
                                            </TableCell>
                                            <TableCell>{row.time}</TableCell>
                                            <TableCell>{row.status}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAppoints;