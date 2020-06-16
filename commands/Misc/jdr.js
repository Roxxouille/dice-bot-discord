module.exports.run  = (client, message, args) => {
  message.channel.send('/shrug');
};

module.exports.help = {
  name: 'jdr',
  description: 'Envoie la prochaine date de jdr',
  args: false,
};