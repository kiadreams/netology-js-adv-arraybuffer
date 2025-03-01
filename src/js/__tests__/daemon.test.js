import Daemon from "../daemon.js";


test('Testing Daemon class: check the className field.', () => {
  const daemon = new Daemon();
  expect(daemon.className).toBe('daemon');
});


test.each([
  ['the distance is 1 square', 1, 100],
  ['the distance is 2 square', 2, 90],
  ['the distance is 3 square', 3, 80],
  ['the distance is 4 square', 4, 70],
  ['the distance is 5 square', 5, 60],
])("Testing distance modifier of characters' attack: %s.", (test, distance, expected) => {
  const character = new Daemon(distance);
  character.attack = 100
  expect(character.attack).toBe(expected);
});


test.each([
  ['drug is true', true, true],
  ['drug is false', false, false],
])('Testing "drug" method of characters: %s.', (test, drug, expected) => {
  const character = new Daemon(2);
  character.drug = drug
  expect(character.drug).toBe(expected);
});


test.each([
  ['the distance is 1', 1, 100 - Math.log2(1) * 5],
  ['the distance is 2', 2, 90 - Math.log2(2) * 5],
  ['the distance is 3', 3, 80 - Math.log2(3) * 5],
  ['the distance is 4', 4, 70 - Math.log2(4) * 5],
  ['the distance is 5', 5, 60 - Math.log2(5) * 5],
])("Testing attack method of characters with drug: %s.", (test, distance, expected) => {
  const character = new Daemon(distance);
  character.drug = true;
  character.attack = 100;
  expect(character.attack).toBe(expected);
});
