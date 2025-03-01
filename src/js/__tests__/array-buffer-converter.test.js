import ArrayBufferConverter from "../array-buffer-converter.js";


test('Testing ArrayBufferConverter class: load and convert to string.', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const bufferView = new Uint16Array(new ArrayBuffer(data.length * 2));
  data.split('').forEach((v, i) => bufferView[i] = v.charCodeAt(0));

  const converter = new ArrayBufferConverter();
  converter.load(bufferView)
  expect(converter.toString()).toBe(data);
});
