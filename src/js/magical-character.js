export default class MagicalCharacter {
  constructor(className= undefined) {
    this.className = className;
    this.health = 200;
    this._attack = 100;
    this._attackModifier = 0;
    this.isDaturaApplied = false;
  }

  get attack() {
    return this._attack > this._attackModifier ? this._attack - this._attackModifier : 0;
  }

  set attack(cell) {
    if (cell > 0) {
      const cellModifier = this._attack / 10 * (cell - 1);
      const daturaModifier = this.isDaturaApplied ? Math.log2(cell) * 5 : 0;
      this._attackModifier = cellModifier + daturaModifier;
    }
  }
}
