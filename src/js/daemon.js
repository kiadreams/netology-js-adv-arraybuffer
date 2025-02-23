import MagicalCharacter from "./magical-character.js";


export default class Daemon extends MagicalCharacter {

  constructor() {
    super('daemon');
    this.health = 220;
  }
}
