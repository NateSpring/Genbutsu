import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';

const Sales = () => {
    return (
        <div>
            <h1 className="page-title">Sales</h1>

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
                <button onClick={statusOnSchedule(0)}>On Schedule</button>
                <button onClick={statusBehind(0)}>Behind</button>
                <button onClick={statusWaiting(0)}>Waiting</button>
                <button onClick={statusIdle(0)}>Idle</button>
            </div>
        </div>
    )
}
export default Sales;
