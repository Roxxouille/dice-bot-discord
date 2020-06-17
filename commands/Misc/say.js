module.exports.run = (client, message, args) => {
  message.channel.send(args.join(" "));
};

module.exports.help = {
  name: 'say',
  aliases: ['repeat', 'rep'],
  category: 'misc',
  description: "Répète le message d'un utilisateur",
  usage: '<votre_message>',
  args: true,
};
