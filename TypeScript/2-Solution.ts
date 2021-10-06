const INTEGERS_ARRAY = [];
for (let index = 0; index < 10000; index++) {
  INTEGERS_ARRAY.push(index + 1)
};

const primeNumberFinder = (array: number[]) => {
  const primeNumbersArray = array.map((number: number) => {
    if(number === 1){
      return undefined;
    }
    if(number === 2){
      return number;
    }
    for (let index = 2; index < number; index++) {
      if(number % index === 0){
        return undefined;
      }
    }
    return number;
  })
  .filter(number => number !== undefined);
  return console.log({
    primeNumbersArray
  });
};

primeNumberFinder(INTEGERS_ARRAY);