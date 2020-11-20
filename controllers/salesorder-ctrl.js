// const SalesOrder = require('../models/salesorder-model')

// createSalesOrder = (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a salesorder',
//         })
//     }

//     const salesorder = new SalesOrder(body)

//     if (!salesorder) {
//         return res.status(400).json({ success: false, error: err })
//     }

//     salesorder
//         .save()
//         .then(() => {
//             return res.status(201).json({
//                 success: true,
//                 id: salesorder._id,
//                 message: 'SalesOrder created!',
//             })
//         })
//         .catch(error => {
//             return res.status(400).json({
//                 error,
//                 message: 'SalesOrder not created!',
//             })
//         })
// }

// updateSalesOrder = async (req, res) => {
//     const body = req.body

//     if (!body) {
//         return res.status(400).json({
//             success: false,
//             error: 'You must provide a body to update',
//         })
//     }

//     SalesOrder.findOne({ _id: req.params.id }, (err, salesorder) => {
//         if (err) {
//             return res.status(404).json({
//                 err,
//                 message: 'salesorder not found!',
//             })
//         }
//         salesorder.order = body.order
//         salesorder.partnumber = body.partnumber
//         salesorder.quantity = body.quantity
//         salesorder.location = body.location
//         salesorder
//             .save()
//             .then(() => {
//                 return res.status(200).json({
//                     success: true,
//                     id: salesorder._id,
//                     message: 'salesorder updated!',
//                 })
//             })
//             .catch(error => {
//                 return res.status(404).json({
//                     error,
//                     message: 'salesorder not updated!',
//                 })
//             })
//     })
// }

// deleteSalesOrder = async (req, res) => {
//     await SalesOrder.findOneAndDelete({ _id: req.params.id }, (err, salesorder) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!salesorder) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `salesorder not found` })
//         }

//         return res.status(200).json({ success: true, data: salesorder })
//     }).catch(err => console.log(err))
// }

// getSalesOrderById = async (req, res) => {
//     await SalesOrder.findOne({ _id: req.params.id }, (err, salesorder) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!salesorder) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `salesorder not found` })
//         }
//         return res.status(200).json({ success: true, data: salesorder })
//     }).catch(err => console.log(err))
// }

// getSalesOrders = async (req, res) => {
//     await SalesOrder.find({}, (err, salesorder) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!salesorder.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `salesorder not found` })
//         }
//         return res.status(200).json({ success: true, data: salesorder })
//     }).catch(err => console.log(err))
// }

// module.exports = {
//     createSalesOrder,
//     updateSalesOrder,
//     deleteSalesOrder,
//     getSalesOrders,
//     getSalesOrderById,
// }