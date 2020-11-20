//Required server packages// 
const express = require('express');
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

//Port//
const port = 5000;

//Express setup and socket middleware//
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    }
})

//CORS and BodyParser setup//
app.use(cors());
app.use(bodyParser.json());

//Socket.IO setup//
io.on("connection", socket => {
    console.log("New User Connected");

    //Listen for emission of changing data//
    socket.on("incoming status", (data) => {
        //Broadcast to other sockets//
        io.sockets.emit("outgoing status", data);
        console.log('INCOMING FIRED', data)
    });

    //Log when user disconnects//
    socket.on('disconnect', () => console.log('User Disconnected'));
})

//MySQL Get request and setup//
let con = mysql.createConnection({
    host: "192.168.1.222",
    user: "nate",
    password: "Ditch1234!",
    database: "gem"
});
app.get('/somethingunreasonable', (req, res) => {
    con.query('SELECT * from gem', (err, results, fields) => {
        if (!err) {
            res.send(results)
        } else {
            console.log('Error with DB Query');
        }
    });
});
// END MySQL Stuffs//


server.listen(port, () => console.log(`Server Ready on Port: ${port}`));


































// For launching ELECTRON: && electron .



/////////////////// MONGO DB SETUP //////////////////////////////

// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const db = require('./db')
// const salesorderRouter = require('./routes/salesorder-router')


// const app = express()
// const apiPort = 4000

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.use('/api', salesorderRouter)


// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


