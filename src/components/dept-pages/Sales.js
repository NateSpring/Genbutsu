import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle, getTakt } from '../../utils';

const Sales = () => {
    const socket = socketIOClient('http://192.168.1.222:5000');


    useEffect(() => {
    }, [])


    return (
        <div>
            <h1 className="page-title">Sales</h1>

            <div className="app-container">



                <div className="cycle-times">

                </div>


            </div>

            <h3>Current Status</h3>
            <div>
                <button onClick={statusOnSchedule(0)}>On Schedule</button>
                <button onClick={statusBehind(0)}>Behind</button>
                <button onClick={statusWaiting(0)}>Waiting</button>
                <button onClick={statusIdle(0)}>Idle</button>
            </div>

        </div >
    )
}
export default Sales;
