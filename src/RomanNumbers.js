const ROMAN_SYMBOLS = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'CX',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
}

class RomanNumbers {
  convertToRomanNumber(arabicNumber){
    const keysRomanSymbols =  Object.keys(ROMAN_SYMBOLS).reverse()
    
    return this.operate(keysRomanSymbols, arabicNumber)
  }
  
  // Private
  
  operate(keysRomanSymbols, arabicNumber) {
    let romanNumberString = ''

    keysRomanSymbols.forEach(element => {
      while (this.thereIsNumberToSubstract(arabicNumber, element)) {
        arabicNumber -= Number(element)
        romanNumberString += (ROMAN_SYMBOLS[element])
      }
    })
    return romanNumberString
  }

  thereIsNumberToSubstract(arabicNumber, element) {
    return arabicNumber >= Number(element)
  }
}