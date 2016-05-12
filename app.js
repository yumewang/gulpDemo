'use strict';

let app = require('http').createServer(handler);
let io = require('socket.io')(app);

app.listen(3002);
function handler (req, res) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.writeHead(200);
  res.end('11');
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('chat mounted', function(user) {
    console.log(user);
    console.log(socket.id);
    // TODO: Does the server need to know the user?
    socket.emit('receive socket', socket.id)
  })
  socket.on('add message', function(user) {
    console.log(user);
    // TODO: Does the server need to know the user?
    
    let receiveMessage = {
      id: randomInt(1, 1000),
      username: 'Default',
      text: socket.id + ': I am a Rabbit. I am from socket.io. Can you see this?',
      type: '2',
      time: '2016-08-02'
    }

    setTimeout(function(){ socket.emit('new message', receiveMessage); }, 1000);
  })
});

function randomInt (low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}