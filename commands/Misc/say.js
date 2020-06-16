module.exports.run = (client, message, args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: 'say',
  description: "Répète le message d'un utilisateur",
  usage: '<votre_message>',
  args: true,
};
