const numbers = [40, 12, 34, 42,76,75, 65, 15, 80, 10, 20, 30, 50, 60, 70, 80, 90, 100];

function findLargestNumber(array) {
  return Math.max(...array);
}

document.getElementById("result").innerHTML = findLargestNumber(numbers);