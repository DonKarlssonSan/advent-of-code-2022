export function findStartOfMessage(stream, lengthOfSequence = 4) {
  const offset = lengthOfSequence - 1;
  for(let i = offset; i < stream.length; i++) {
    let set = new Set();
    for(let j = -offset; j < 1; j++) {
      set.add(stream[i + j]);
    }
    if(set.size === lengthOfSequence) {
      return i + 1;
    }
  }

  return undefined;
}