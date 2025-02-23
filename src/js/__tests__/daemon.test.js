import Daemon from "../daemon.js";


test('Testing Daemon class: check the className field.', () => {
  const daemon = new Daemon();
  expect(daemon.className).toBe('daemon');
});


// const character_1 = {name: 'Ivan', lastName: 'Kish'};
// const character_2 = {name: 'Vova', lastName: 'Serg'};
//
// test('Testing method "add" of Daemon\'s class: add an existing character.', () => {
//   const team = new Daemon();
//
//   function addExistingCharacter() {
//     team.add(character_1);
//     team.add(character_1);
//   }
//
//   expect(addExistingCharacter).toThrow('персонаж уже в командe');
// });
//
// test('Testing "add" and "toArray" methods of Daemon\'s class: add a non-existing character.', () => {
//   const team = new Daemon();
//   team.add(character_1);
//   expect(team.toArray()).toEqual([character_1]);
// });
//
// test('Testing "addAll" methods of Daemon\'s class', () => {
//   const team = new Daemon();
//   team.addAll(character_1, character_2);
//   expect(team.toArray()).toEqual([character_1, character_2]);
// });
