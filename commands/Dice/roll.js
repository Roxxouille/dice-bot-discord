module.exports.run = (client, message, args) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let dice = args;
  let firstNumber = /[^d]*/; //capture données avant 'd'
  let lastNumber = /(?<=d).*/; //capture données après 'd'
  let dTest = /d/; // test si il y a un 'd'
  let firstPart = firstNumber.exec(dice);
  let lastPart = lastNumber.exec(dice);
  let firstPartInt = parseInt(firstPart, 10);
  let lastPartInt = parseInt(lastPart, 10);
  if(dTest.test(dice)){
    if(firstPartInt === 1 && lastPartInt === 100){
    let diceRoll = Math.floor( Math.random() * lastPartInt ) + 1;

    if(diceRoll <= 5) {
      message.reply(`WOAWWWW Tu as fait une réussite critique ! ${diceRoll}`);
      return;
    }
    if(diceRoll >= 96) {
      message.reply(`OOF tu as fait un échec critique ! ${diceRoll}`);
      return;
    }
    else {
      message.reply(`Alors ça passe ? ${diceRoll}`);
    }
    }
    else {
      let roll = [];
      for(let i = 1; i <= firstPartInt; i++ ){
        let diceRoll = Math.floor( Math.random() * lastPartInt ) + 1;
        roll.push(diceRoll);
      }
      message.reply(`Résultats : ${roll.join(' + ')} = ${roll.reduce(reducer)}`);
    }
  }
  else {
    let diceRoll = Math.floor( Math.random() * dice ) + 1;
    if (dice == 100){
        

      if(diceRoll <= 5) {
        message.reply(`WOAWWWW Tu as fait une réussite critique ! ${diceRoll}`);
        return;
      }
      if(diceRoll >= 96) {
        message.reply(`OOF tu as fait un échec critique ! ${diceRoll}`);
        return;
      }
      else {
        message.reply(`Alors ça passe ? ${diceRoll}`);
      }
    }
    if (dice == 20) {
      if(diceRoll <= 5) {
        message.reply(`WOAWWWW Tu as fait une réussite critique ! ${diceRoll}`);
        return;
      }
      if(diceRoll >= 96) {
        message.reply(`OOF tu as fait un échec critique ! ${diceRoll}`);
        return;
      }
      else {
        message.reply(`Alors ça passe ? ${diceRoll}`);
      }
    }
    else {
      message.reply(`Alors ça passe ? ${diceRoll}`);
    }
    }
};

module.exports.help = {
  name: 'roll',
  description: 'roll a dice',
  usage: '<nombre de dès + d + valeur du dès> exemple : !roll 1d6',
  args: true,
};
