import MagicalCharacter from "./magical-character.js";


export default class Daemon extends MagicalCharacter {

  constructor() {
    super('daemon');
    this.health = 220;
  }
}

const daemon = new Daemon();
console.log(daemon.className);
console.log(daemon.health);