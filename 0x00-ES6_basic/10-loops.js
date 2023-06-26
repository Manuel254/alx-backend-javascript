export default function appendToEachArrayValue(array, appendString) {
  const newArr = array;
  for (const [key, value] of newArr.entries()) {
    newArr[key] = appendString + value;
  }

  return newArr;
}
