import React, { useEffect, useState } from 'react'
import FacFeed from './facfeed';
import Goals from './goals';
import socketIOClient from 'socket.io-client';


const FacStatus = () => {

    const socket = socketIOClient('http://localhost:5000');

    const [departments, setStatus] = useState([
        { id: 0, name: 'S', status: 'idle' },
        { id: 1, name: 'N', status: 'idle' },
        { id: 2, name: 'L', status: 'idle' },
        { id: 3, name: 'PB', status: 'idle' },
        { id: 4, name: 'MS', status: 'idle' },
        { id: 5, name: 'TF', status: 'idle' },
        { id: 6, name: 'W', status: 'idle' },
        { id: 7, name: 'PC', status: 'idle' },
        { id: 8, name: 'FA', status: 'idle' },
        { id: 9, name: 'SH', status: 'idle' }
    ]
    );

    const statusOnSchedule = index => (e) => {
        socket.emit('incoming status', { index: index, status: 'on-schedule' })

    }
    const statusBehind = index => (e) => {
        socket.emit('incoming status', { index: index, status: 'behind' })

    }
    const statusWaiting = index => (e) => {
        socket.emit('incoming status', { index: index, status: 'waiting' })

    }
    const statusIdle = index => (e) => {
        socket.emit('incoming status', { index: index, status: 'idle' })

    }



    useEffect(() => {
        //NEED INITIAL EMIT IN HERE!!!!!
        //socket.emit('incoming status')

        socket.on('outgoing status', function (data) {
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
                    <div className={`dept-tile ${dept.status}`} key={dept.id} value={dept.id}>
                        <h1 key={dept.id} className="dept-title">{dept.name}</h1>
                        <h4>{dept.status}</h4>
                        <div>
                            <hr />
                            <div className="status-buttons">
                                <button onClick={statusOnSchedule(index)}>On Schedule</button>
                                <button onClick={statusBehind(index)}>Behind</button>
                                <button onClick={statusWaiting(index)}>Waiting</button>
                                <button onClick={statusIdle(index)}>Idle</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className="App-Footer">
                <FacFeed />
                <Goals />
            </div>
        </div>


    );

}

export default FacStatus;
