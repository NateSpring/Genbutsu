//Required server packages// 
const express = require('express');
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const { connection } = require('mongoose');
const { connected } = require('process');

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
    // console.log("New User Connected");
    socket.setMaxListeners(0)
    //Listen for emission of changing data//
    socket.on("incoming status", (data) => {

        //Broadcast to other sockets//
        io.sockets.emit("outgoing status", data);
        console.log('INCOMING DATA:', data);
        // let data = { status: data.status, id: data.id }
        let sql_query = `UPDATE dept SET status = '${data.status}' WHERE id = ${data.index}`;
        console.log("SQL Change Made: ", sql_query);
        con.query(sql_query, (err, res) => {
            if (err) {
                console.log(err);
            }
        });
        socket.on('disconnect', () => {
            console.log('User Disconnected')
        })
    })
    return () => {
        socket.off('incoming status')
    }
})

//MySQL Get request and setup//
const config = {
    host: "127.0.0.1",
    user: "root",
    database: "dept_status"
};
const con = mysql.createPool(config);

app.get('/depts', (req, res) => {
    con.query("SELECT * from dept", (error, result) => {
        res.send(result);
    });
});

// app.post('/update_depts', (req, res) => {

// })


// END MySQL Stuffs//


server.listen(port, () => console.log(`Server Ready on Port: ${port}`));


