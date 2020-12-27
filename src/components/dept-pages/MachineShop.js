import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';

const MachineShop = () => {
    return (
        <div>
            <h1 className="page-title">Machine Shop</h1>

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
                <button onClick={statusOnSchedule(4)}>On Schedule</button>
                <button onClick={statusBehind(4)}>Behind</button>
                <button onClick={statusWaiting(4)}>Waiting</button>
                <button onClick={statusIdle(4)}>Idle</button>
            </div>
        </div>
    )
}
export default MachineShop;
