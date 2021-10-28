const TEXTTS: string = `Science (from Latin scientia 'knowledge') is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the world. The earliest roots of science can be traced to Ancient Egypt and Mesopotamia in around 3000 to 1200 BCE. Their contributions to mathematics, astronomy, and medicine entered and shaped Greek natural philosophy of classical antiquity, whereby formal attempts were made to provide explanations of events in the physical world based on natural causes. After the fall of the Western Roman Empire, knowledge of Greek conceptions of the world deteriorated in Western Europe during the early centuries (400 to 1000 CE) of the Middle Ages, but was preserved in the Muslim world during the Islamic Golden Age. The recovery and assimilation of Greek works and Islamic inquiries into Western Europe from the 10th to 13th century revived "natural philosophy", which was later transformed by the Scientific Revolution that began in the 16th century as new ideas and discoveries departed from previous Greek conceptions and traditions. The scientific method soon played a greater role in knowledge creation and it was not until the 19th century that many of the institutional and professional features of science began to take shape; along with the changing of "natural philosophy" to "natural science."`
const wordsCounterTS = (text: string) => {
  const DICTIONARY: { [key: string]: number }  = {};
  const wordsArray: Array<string> = text.split(" ");
  wordsArray.forEach(word => {
    const formatedWord = 
      word
      .toLowerCase()
      // .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\'\"\)\(\;)]+/g, "");
    if(DICTIONARY[formatedWord]){
      DICTIONARY[formatedWord]++
    }
    if(!DICTIONARY[formatedWord]){
      DICTIONARY[formatedWord] = 1;
    }
  });
  const response = {
    DICTIONARY: DICTIONARY,
    "Total Times Word To: ": DICTIONARY.to
  };
  return response;
};
wordsCounterTS(TEXTTS);

export default wordsCounterTS;
