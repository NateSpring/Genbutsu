import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';

const Shipping = () => {
    return (
        <div>
            <h1 className="page-title">Shipping</h1>

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
                <button onClick={statusOnSchedule(9)}>On Schedule</button>
                <button onClick={statusBehind(9)}>Behind</button>
                <button onClick={statusWaiting(9)}>Waiting</button>
                <button onClick={statusIdle(9)}>Idle</button>
            </div>
        </div>
    )
}
export default Shipping;