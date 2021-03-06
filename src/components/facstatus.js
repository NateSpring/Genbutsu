import React, { useEffect, useState } from 'react'
import FacFeed from './facfeed';
import Goals from './goals';
import socketIOClient from 'socket.io-client';
import { Link } from 'react-router-dom';
import { statusBehind } from '../utils';
var axios = require('axios');



const FacStatus = () => {

    const socket = socketIOClient('http://192.168.1.222:5000');


    const [departments, setStatus] = useState([]);

    useEffect(() => {
        async function getSql() {
            await axios.get('http://192.168.1.222:5000/depts')
                .then(function (response) {
                    const sql_res = response.data
                    setStatus(sql_res)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getSql();
        return () => { };
    }, []);

    useEffect(() => {
        socket.on('outgoing status', function (data) {
            setStatus(departments.map(dept =>
                dept.id === data.index ? { ...dept, status: data.status, time: data.time } : dept
            ))
        });

        return () => {
            socket.off('outgoing status');
        }
    })


    return (
        <div className="app-container">
            <p className="page-title">Facility View</p>
            <h1>Facility Status</h1>
            <div className="dept-tile-container">


                {departments.map((dept, index) => (
                    <Link to={dept.link} className={`dept-tile ${dept.status}`} key={dept.id} value={dept.id}>
                        <h1 key={dept.id} className="dept-title">{dept.name}</h1>
                        <h4 onClick={statusBehind(index)}>{dept.status}</h4>
                        <h4>Last Logged Time: {dept.time}</h4>
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