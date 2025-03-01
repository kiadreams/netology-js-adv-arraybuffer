export default class ArrayBufferConverter {

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    return String.fromCharCode(...this.bufferView);
  }
}
