const socket = new WebSocket('ws://localhost:3000/fopix');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({ tag: 'login', username: 'qsedrtyuio' }));
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});