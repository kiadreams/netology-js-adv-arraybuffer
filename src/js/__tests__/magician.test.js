import Magician from "../magician.js";


test('Testing Magician class: check the className field.', () => {
  const magician = new Magician();
  expect(magician.className).toBe('magician');
});
// test('Testing "get settings" method of Magician\' class.', () => {
//   const settings = new Magician();
//   const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy'],]);
//   expect(settings.settings).toEqual(expected);
// });
//
//
// test('Testing "set theme" method of Magician\' class: correct theme.', () => {
//   const settings = new Magician();
//   settings.theme = 'light';
//   const expected = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy'],]);
//   expect(settings.settings).toEqual(expected);
// });
//
// test('Testing "set theme" method of Magician\' class: a non-existent theme.', () => {
//   const settings = new Magician();
//   expect(() => {settings.theme = 'Simple'}).toThrow('Неправильно указана тема');
// });
//
//
// test('Testing "set music" method of Magician\' class: correct music.', () => {
//   const settings = new Magician();
//   settings.music = 'pop';
//   const expected = new Map([['theme', 'dark'], ['music', 'pop'], ['difficulty', 'easy'],]);
//   expect(settings.settings).toEqual(expected);
// });
//
// test('Testing "set theme" method of Magician\' class: a non-existent music.', () => {
//   const settings = new Magician();
//   expect(() => {settings.music = 'Simple'}).toThrow('Не правильно указана музыкальная композиция');
// });
//
//
// test('Testing "set music" method of Magician\' class: correct difficulty.', () => {
//   const settings = new Magician();
//   settings.difficulty = 'normal';
//   const expected = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'normal'],]);
//   expect(settings.settings).toEqual(expected);
// });
//
// test('Testing "set theme" method of Magician\' class: a non-existent difficulty.', () => {
//   const settings = new Magician();
//   expect(() => {settings.difficulty = 'Simple'}).toThrow('Не правильно указана сложность');
// });