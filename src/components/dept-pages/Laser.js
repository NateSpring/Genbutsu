import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';

const Laser = () => {
    return (
        <div>
            <h1 className="page-title">Laser</h1>

            <div className="app-container">
                <div className="dept-tile">
                    <h3>Cell 1</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 2</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 3</h3>
                </div>
            </div>
            <h3>Current Status</h3>
            <div>
                <button onClick={statusOnSchedule(2)}>On Schedule</button>
                <button onClick={statusBehind(2)}>Behind</button>
                <button onClick={statusWaiting(2)}>Waiting</button>
                <button onClick={statusIdle(2)}>Idle</button>
            </div>
        </div>
    )
}
export default Laser;