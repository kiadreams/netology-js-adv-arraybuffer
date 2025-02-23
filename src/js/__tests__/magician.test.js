import Magician from "../magician.js";


test('Testing Magician class: check the className field.', () => {
  const magician = new Magician();
  expect(magician.className).toBe('magician');
});
