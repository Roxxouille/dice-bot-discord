const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'embed',
  description: 'Renvoie un embed!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setColor("#dc143c")
      .setTitle("Titre de l'embed")
      .setURL("https://google.com")
      .setDescription("Description de l'embed")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("Je suis un champ", "et je suis la valeur:")
      .addField('\u200b', '\u200b')
      .addFields(
        { name: 'Je suis le champ 1', value: 'et je suis sa valeur'},
        { name: 'Je suis le champ 2', value: 'et en plus on est aligné!'}
      )
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter("Je suis le pied du footer");
    
   message.channel.send(embed);

  }
}