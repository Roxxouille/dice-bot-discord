module.exports.run  = (client, message, args) => {
  message.channel.send('¯\\_(ツ)_/¯');
};

module.exports.help = {
  name: 'jdr',
  aliases: ['date', 'datejdr'],
  description: 'Envoie la prochaine date de jdr',
  args: false,
};