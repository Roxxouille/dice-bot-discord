const reducer = (accumulator, currentValue) => accumulator + currentValue;
const rollTheDice = (maxDiceValue) => Math.floor( Math.random() * maxDiceValue ) + 1;

module.exports.run = (client, message, args) => {
  const error = () => message.channel.send('Mauvaise utilisation de la commande')
  let dice = args;
  let firstNumber = /[^d]*/; //capture données avant 'd'
  let lastNumber = /(?<=d).*/; //capture données après 'd'
  let dTest = /d/; // test si il y a un 'd'
  let firstPart = firstNumber.exec(dice);
  let lastPart = lastNumber.exec(dice);
  let firstPartInt = parseInt(firstPart, 10);
  let lastPartInt = parseInt(lastPart, 10);


  // Si il y a un 'd' dans la commande : 
  if(dTest.test(dice)){

    if (isNaN(firstPartInt)  || isNaN(lastPartInt) || firstPartInt <= 0 || lastPartInt <= 0){
      error();
      return;
    }

    if(firstPartInt === 1 && lastPartInt === 100){
      let diceRoll = rollTheDice(lastPartInt);

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
        let diceRoll = rollTheDice(lastPartInt);
        roll.push(diceRoll);
      }
      message.reply(`Résultats : ${roll.join(' + ')} = ${roll.reduce(reducer)}`);
    }
  }
  // Si il n'y a pas de 'd' dans la commande :
  else {

    if(isNaN(dice) || dice <= 0){
      error();
      return;
    }
    
    let diceRoll = rollTheDice(dice);

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
        return;
      }
    }
    if (dice == 20) {
      if(diceRoll <= 3) {
        message.reply(`WOAWWWW Tu as fait une réussite critique ! ${diceRoll}`);
        return;
      }
      if(diceRoll >= 18) {
        message.reply(`OOF tu as fait un échec critique ! ${diceRoll}`);
        return;
      }
      else 
      {
        message.reply(`Alors ça passe ? ${diceRoll}`);
        return;
      }
    }
  }
};

module.exports.help = {
  name: 'roll',
  description: 'roll a dice',
  usage: '<nombre de dès + d + valeur du dès> exemple : !roll 1d6',
  args: true,
};
