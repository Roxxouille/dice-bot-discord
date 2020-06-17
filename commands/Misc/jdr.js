module.exports.run  = (client, message, args) => {
  message.channel.send('¯\\_(ツ)_/¯');
};

module.exports.help = {
  name: 'jdr',
  aliases: ['date', 'datejdr'],
  category: 'misc',
  description: 'Renvoie la prochaine date de jeu de rôles',
  args: false,
};