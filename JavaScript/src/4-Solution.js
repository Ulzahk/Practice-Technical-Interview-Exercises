const yearsList = [
  2000, 
  2004, 
  2008, 
  2012, 
  2016, 
  2020,
  2021,
  2057,
  1800,
  100,
  300,
  400,
  700,
  800,
  17500,
  18000,
];

const leapYearExaminator = year => {
  if(year % 4 === 0){
    if(year % 100 === 0){
      if(year % 400 === 0){
        console.log(`${year} is a leap year`);
        return `${year} is a leap year`;
      }
      if(year % 400 !== 0){
        console.log(`${year} isn't a leap year`);
        return `${year} isn't a leap year`;
      }
    }
    console.log(`${year} is a leap year`);
    return `${year} is a leap year`;
  }
  if(year % 4 !== 0){
    console.log(`${year} isn't a leap year`);
    return `${year} isn't a leap year`;
  }
}

yearsList.forEach(year => {
  leapYearExaminator(year);
});

module.exports = {
  leapYearExaminator
};
