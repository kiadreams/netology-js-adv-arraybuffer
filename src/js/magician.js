import MagicalCharacter from "./magical-character.js";


export default class Magician extends MagicalCharacter {

  constructor() {
    super('magician');
    this.health = 170;
  }
}

const magician = new Magician();
console.log(magician.className);
console.log(magician.health);
