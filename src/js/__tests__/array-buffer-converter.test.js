import ArrayBufferConverter, {getBuffer} from "../array-buffer-converter.js";


test('Testing ArrayBufferConverter class: load and convert to string.', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer())
  expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
