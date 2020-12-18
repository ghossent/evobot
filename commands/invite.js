module.exports = {
  name: "invite",
  description: "Enviar enlace de invitación al bot",
  execute(message) {
    return message.member
      .send(
        `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot
   aqui tienes el link de invitacion espero que lo invites nwn `)
      .catch(console.error);
  }
};
