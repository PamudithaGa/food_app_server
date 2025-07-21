module.exports = (socket) => {
  console.log("🔌 A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("🚪 User disconnected:", socket.id);
  });

  // Add more socket handlers here
};
