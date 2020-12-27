import socketIOClient from 'socket.io-client';



//Functions for emiting state through socket.io//
const socket = socketIOClient('http://localhost:5000');

export const statusOnSchedule = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'on-schedule' })
    console.log(index, ' is On Schedule')

}
export const statusBehind = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'behind' })
    console.log(index, ' is Behind')

}
export const statusWaiting = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'waiting' })
    console.log(index, ' is Waiting')

}
export const statusIdle = index => (e) => {
    socket.emit('incoming status', { index: index, status: 'idle' })
    console.log(index, ' is Idle')

}