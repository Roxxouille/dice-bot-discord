module.exports = {
  name: 'sroll',
  description: 'shadowrun roll',
  execute(message, args) {
    
    let dice = args;
    let diceNumber = parseInt(dice[0], 10);
    let succesNumber = parseInt(dice[1], 10);
    let complicationNumber = diceNumber/2
    let roll = [];
    let succesCount = 0;  
    let complicationCount = 0;
    for(let i = 1; i <= diceNumber; i++ ){
      let diceRoll = Math.floor( Math.random() * 6 ) + 1;
      roll.push(diceRoll);
    }
    for(let ii = 0; ii <= roll.length; ii++){
      if(roll[ii] >= 5) {
        succesCount++;
      }
      else if (roll[ii] === 1) {
        complicationCount++
      }
    }
    if(succesCount >= succesNumber && complicationCount < complicationNumber){
      message.reply(`Vous avez réussi ! ${roll.join(', ')}`);
      return;
    }
    if(succesCount >= succesNumber && complicationCount > complicationNumber) {
      message.reply(`Vous avez réussi ! Mais il y a une complication... ${roll.join(', ')}`);
      return;
    }
    if(succesCount < succesNumber && complicationCount < complicationNumber) {
      message.reply(`Vous avez échoué ! ${roll.join(', ')}`);
      return;
    }
    if(succesCount < succesNumber && complicationCount > complicationNumber) {
      message.reply(`Vous avez échoué ! Et il y a une complication... ${roll.join(', ')}`);
      return;
    }
  }
}