let str = "   salam   ";
let result = "";
for (let i = 0; i < str.length; i += 1) {
  if (str[i] !== " ") {
    result += str[i];
  }
}
console.log(result);
