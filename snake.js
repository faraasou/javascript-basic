let str = "salam chetori? khoobi? che khabar?";
let result = " ";
for (let i = 0; i < str.length; i += 1) {
  result += str[i];
  if (str[i] === " ") {
    result += str[i].replace("", "_");
  }
}
console.log(result);
