import React from 'react';
import { statusOnSchedule, statusBehind, statusWaiting, statusIdle } from '../../utils';
import { Scheduler } from '../../gsheet';

const Laser = () => {
    //Get sheet for laser dept
    Scheduler(964006289)
    return (
        <Scheduler />
    )
}
export default Laser;