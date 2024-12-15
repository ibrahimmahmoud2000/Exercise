const text = "The quick brown fox jumps over the lazy dog";
document.getElementById("original").innerHTML = text;

function removeDuplicates(string) {
  return string
    .split("")
    .filter((char, index) => string.indexOf(char) === index)
    .join("");
}

document.getElementById("result").innerHTML = removeDuplicates(text);
