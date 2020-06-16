module.exports.run  = (client, message, args) => {
  message.reply('/shrug');
};

module.exports.help = {
  name: 'jdr',
  description: 'Envoie la prochaine date de jdr',
  args: false,
};