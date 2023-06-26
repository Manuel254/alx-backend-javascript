export default function appendToEachArrayValue(array, appendString) {
  for (let [key, value] of array.entries()) {
    array[key] = appendString + value;
  }

  return array;
}
