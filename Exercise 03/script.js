const string = ("hello world");
document.getElementById("original").innerHTML = string;
function reverseString(string) {
  return string.split("").reverse().join("");
}

document.getElementById("result").innerHTML = reverseString(string);