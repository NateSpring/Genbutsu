import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';

const Welding = () => {
    return (
        <div>
            <h1 className="page-title">Welding</h1>

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
                <button onClick={statusOnSchedule(6)}>On Schedule</button>
                <button onClick={statusBehind(6)}>Behind</button>
                <button onClick={statusWaiting(6)}>Waiting</button>
                <button onClick={statusIdle(6)}>Idle</button>
            </div>
        </div>
    )
}
export default Welding;