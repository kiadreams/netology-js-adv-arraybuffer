import Daemon from "../daemon.js";


test('Testing Daemon class: check the className field.', () => {
  const daemon = new Daemon();
  expect(daemon.className).toBe('daemon');
});
