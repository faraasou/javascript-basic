const text =
  "our eyes can still see the beautiful sky our ears can still hear the voices of our loved ones Keep your nose out the sky keep your heart to god and keep your face to the raising sun clouds come floating into my life no longer to carry rain or usher storm but to add color to my sunset sky";
const letter = text.split("");
let letterCount = [];
for (let i = 0; i < letter.length; i++) {
  const currentLetter = letter[i];
  if (letterCount[currentLetter]) {
    letterCount[currentLetter] += 1;
  } else {
    letterCount[currentLetter] = 1;
  }
  letterCount.push(currentLetter);
}
let max = -1;
let letterMax = "";

for (let i = 0; i < letterCount.length; i++) {
  const targetLetter = letterCount[i];

  if (max < letterCount[targetLetter] && targetLetter !== " ") {
    max = letterCount[targetLetter];
    letterMax = targetLetter
  }
}
console.log(letterMax, ":" , max);
