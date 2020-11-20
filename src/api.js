// import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3000/api',
// })

// export const insertSalesOrder = payload => api.post(`/salesorder`, payload)
// export const getAllSalesOrders = () => api.get(`/salesorder`)
// export const updateSalesOrderById = (id, payload) => api.put(`/salesorder/${id}`, payload)
// export const deleteSalesOrderById = id => api.delete(`/salesorder/${id}`)
// export const getSalesOrderById = id => api.get(`/salesorder/${id}`)

// const apis = {
//     insertSalesOrder,
//     getAllSalesOrders,
//     updateSalesOrderById,
//     deleteSalesOrderById,
//     getSalesOrderById,
// }

// export default apis


let socket = require('socket.io-client')('http://localhost:5000')
//100ms Interval for reading data//
setInterval(function () {
    let test_string = "HELLO, IM DATA";
    socket.emit('incoming data', test_string);
}, 100)
