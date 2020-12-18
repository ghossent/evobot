module.exports = {
  name: "ping",
  cooldown: 10,
  description: "Muestra el ping promedio del bot",
  execute(message) {
    message.reply(`📈 Ping promedio a API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
