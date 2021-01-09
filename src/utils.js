import socketIOClient from 'socket.io-client';



//Functions for emiting state through socket.io//
const socket = socketIOClient('http://192.168.1.222:5000');


// Date time function
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}


export const statusOnSchedule = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'on-schedule', time: getDateTime() })
    console.log(index, ' is On Schedule');
    console.log(getDateTime());
}
export const statusBehind = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'behind', time: getDateTime() })
    console.log(index, ' is Behind')

}
export const statusWaiting = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'waiting', time: getDateTime() })
    console.log(index, ' is Waiting')

}
export const statusIdle = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'idle', time: getDateTime() })
    console.log(index, ' is Idle')

}
