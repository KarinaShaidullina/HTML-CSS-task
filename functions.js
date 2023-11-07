// Функция №1
function Palindrom(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            return false;
        }
    }
    return true;
}

console.log(Palindrom('А роза упала на лапу Азора'));

//Функция №2
function extractDigits(str) {
    const digits = str.match(/\d/g); 
    if (digits === null) {
      return NaN;
    }
    return parseInt(digits.join(''), 10);
}

console.log(extractDigits('what the 12 the hell 1')); // 123456

//Функция №3
function AddSymbols(str, minLenght, symbols) {
    if (str.length >= minLenght) {
      return str;
    } else {
      const symbolsLenght = minLenght - str.length;
      const slicedSymbols = symbols.slice(0, symbolsLenght);
      return slicedSymbols + str;
    }
}

console.log(AddSymbols('apple', 10, 'pine'));

// Функция №4
function StingLenght(str, maxLenght) {
    if(str.length <= maxLenght){
        return true;
    } else{
        return false;
    }
}

console.log(StingLenght('проверяемая строка',18));

