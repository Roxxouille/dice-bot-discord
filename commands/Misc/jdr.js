module.exports.run  = (client, message, args) => {
  message.reply('@everyone Prochain jdr le 09/05/2020 à 20h45 !');
};

module.exports.help = {
  name: 'jdr',
  description: 'Envoie la prochaine date de jdr',
  args: false,
};