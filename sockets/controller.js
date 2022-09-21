const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketController = (socket) => {
  // console.log('Cliente conectado', socket.id );

  //   socket.on("disconnect", () => {
  //     console.log("Cliente desconectado", socket.id);
  //   });

  socket.emit("ultimo-ticket", ticketControl.ultimo);

  socket.on("siguiente-ticket", (payload, callback) => {
    const siguiente = ticketControl.siguiente();
    callback(siguiente);

    //TODO: Notificar que hay un nuevo ticket oendiente de asignar
  });
};

module.exports = {
  socketController,
};
