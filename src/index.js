const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const code = expr.match(/.{1,10}/g);
  const arr = [];
  let res = '';

  for (let i = 0; i < code.length; i += 1) {
    const el = code[i];
    if (el === '**********') arr.push(' ');
    else arr.push(el.match(/.{1,2}/g));
  }

  const symbols = arr.map((el) => {
    let string = '';
    if (el === ' ') return ' ';
    el.forEach((element) => {
      if (element === '10') string += '.';
      if (element === '11') string += '-';
    });
    return string;
  });

  symbols.forEach((el) => {
    if (el in MORSE_TABLE) {
      res += MORSE_TABLE[el];
    } else if (el === ' ') {
      res += ' ';
    }
  });
  return res;
};
