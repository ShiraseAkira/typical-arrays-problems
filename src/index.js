
exports.min = function min (array) {
  if (!arguments.length || !array.length)
  return 0;

  let minElem = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minElem) {
      minElem = array[i];
    }
  }
  return minElem
}

exports.max = function max (array) {
  if (!arguments.length || !array.length)
  return 0;

  let maxElem = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElem) {
      maxElem = array[i];
    }
  }
  return maxElem
}

exports.avg = function avg (array) {
  if (!arguments.length || !array.length)
  return 0;

  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}
