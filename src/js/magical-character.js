export default class MagicalCharacter {
  constructor(className = undefined, distance = 1) {
    this.className = className;
    this.distance = distance;
    this._attack = 100;
    this._isDrugged = false;
  }

  get attack() {
    const currentAttack = this._attack - this._attack / 10 * (this.distance - 1);
    return this._isDrugged ? currentAttack - Math.log2(this.distance) * 5 : currentAttack;
  }

  set attack(valueOfAttack) {
    this._attack = valueOfAttack;
  }

  get drug() {
    return this._isDrugged;
  }

  set drug(value) {
    this._isDrugged = value;
  }
}
