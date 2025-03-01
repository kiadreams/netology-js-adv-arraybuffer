import MagicalCharacter from "../magical-character.js";


test('Testing MagivalCharacter class.', () => {
  const character = new MagicalCharacter();
  expect(character.distance).toBe(1);
});
