const WEEKDAY_DICTIONARY: { [key: number]:string } = {
  0: 'Sunday', 
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const getCurrentDateWithFormat = () : void => {
  const date: Date = new Date();
  let hours: string|number = date.getHours();
  let minutes: string|number = date.getMinutes();
  let seconds: string|number = date.getSeconds();
  const meridiem = hours >= 12 ? 'PM' : 'AM'; 
  if(hours < 10){
    hours = `0${hours}`
  }
  if(minutes < 10){
    minutes = `0${minutes}`
  }
  if(seconds < 10){
    seconds = `0${seconds}`
  }
  return console.log(`
    Today Is: ${WEEKDAY_DICTIONARY[date.getDay()]}.
    Current time is : ${hours} ${meridiem} : ${minutes} : ${seconds}
  `)
};

getCurrentDateWithFormat();