// io.on('connection', (socket) => {
//     console.log('Connection established');
   
//   getApiAndEmit(socket);
//     socket.on('disconnect', () => {
//       console.log('Disconnected');
//     });
//   });
  
  
//   const getApiAndEmit = (socket) => {
//     const response = 'response you need';
//     socket.emit('FromAPI', response);
//   };

function socketModule(io) {
    io.on('connection', function (socket) {
        console.log('A user connected');
      
        //Whenever someone disconnects this piece of code executed
        socket.on('disconnect', function () {
          console.log('A user disconnected');
        });
      });
      io.emit("hello", "world");
}
export default socketModule;
