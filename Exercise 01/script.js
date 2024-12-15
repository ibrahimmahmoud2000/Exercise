let numbers = [
  12, 23, 34, 45, 56, 67, 78, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
];

function filterEvenNumbers(array) {
  return array.filter((num) => num % 2 === 0);
}
document.getElementById("result").innerHTML = filterEvenNumbers(numbers).join(", ");

console.log(filterEvenNumbers(numbers));
