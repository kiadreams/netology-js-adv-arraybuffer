import MagicalCharacter from "../magical-character.js";


test.each([
  ['the distance is 1 square', 1, 100],
  ['the distance is 2 square', 2, 90],
  ['the distance is 3 square', 3, 80],
  ['the distance is 4 square', 4, 70],
  ['the distance is 5 square', 5, 60],
  ['the distance is 0 square', 0, 100],
  ['the distance is -1 square', -1, 100],
])("Testing cell modifier of characters' attack: %s.", (test, cell, expected) => {
  const character = new MagicalCharacter();
  character.attack = cell
  expect(character.attack).toBe(expected);
});

test.each([
  ['the distance is 1 square', 1, 100 - Math.log2(1) * 5],
  ['the distance is 2 square', 2, 90 - Math.log2(2) * 5],
  ['the distance is 3 square', 3, 80 - Math.log2(3) * 5],
  ['the distance is 4 square', 4, 70 - Math.log2(4) * 5],
  ['the distance is 5 square', 5, 60 - Math.log2(5) * 5],
])("Testing attack modifier of characters' attack: %s.", (test, cell, expected) => {
  const character = new MagicalCharacter();
  character.isDaturaApplied = true;
  character.attack = cell
  expect(character.attack).toBe(expected);
});

test.each([
  ['the distance is 1 square', 1, 100 - Math.log2(1) * 5],
  ['the distance is 4 square', 4, 70 - Math.log2(4) * 5],
  ['the distance is 10 square', 10, 0],
])("Testing get attack method of characters' class: %s.", (test, cell, expected) => {
  const character = new MagicalCharacter();
  character.isDaturaApplied = true;
  character.attack = cell
  expect(character.attack).toBe(expected);
});