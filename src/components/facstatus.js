import React, { useEffect, useState } from 'react'
import FacFeed from './facfeed';
import Goals from './goals';
import socketIOClient, { io } from 'socket.io-client';
import { Link } from 'react-router-dom';


const FacStatus = () => {

    const socket = socketIOClient('http://192.168.1.222:5000');

    const [departments, setStatus] = useState([
        { id: 0, name: 'S', status: 'idle', link: '/sales' },
        { id: 1, name: 'N', status: 'idle', link: '/nesting' },
        { id: 2, name: 'L', status: 'idle', link: '/laser' },
        { id: 3, name: 'PB', status: 'idle', link: '/pressbrake' },
        { id: 4, name: 'MS', status: 'idle', link: '/machineshop' },
        { id: 5, name: 'TF', status: 'idle', link: '/tubefab' },
        { id: 6, name: 'W', status: 'idle', link: '/welding' },
        { id: 7, name: 'PC', status: 'idle', link: '/powdercoat' },
        { id: 8, name: 'FA', status: 'idle', link: '/finalassembly' },
        { id: 9, name: 'SH', status: 'idle', link: '/shipping' }
    ]
    );


    useEffect(() => {
        socket.on('outgoing status', function (data) {
            console.log("useEffect Outgoing: ", data);
            setStatus(departments.map(dept =>
                dept.id === data.index ? { ...dept, status: data.status } : dept
            ))
        });
    })

    return (
        <div className="app-container">
            <p className="page-title">Facility View</p>
            <h1>Facility Status</h1>
            <div className="dept-tile-container">


                {departments.map((dept, index) => (
                    <Link to={dept.link} className={`dept-tile ${dept.status}`} key={dept.id} value={dept.id}>
                        <h1 key={dept.id} className="dept-title">{dept.name}</h1>
                        <h4>{dept.status}</h4>
                    </Link>
                ))}


            </div>
            <div className="App-Footer">
                <FacFeed />
                <Goals />
            </div>
        </div >


    );

}

export default FacStatus;