function throwDice(size) {
  return Math.floor(Math.random() * size) + 1;
}

console.log(throwDice(20));