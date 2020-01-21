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
  convertToRomanNumberSegu(arabicNumber)
  {
    const maximumSingleLetterNumber = 3
    const palito = "I"
    if(arabicNumber <= maximumSingleLetterNumber) {
      let romanNumber = ""
      for(var i = 1; i <= arabicNumber; i++){
        romanNumber += palito
      }
      return romanNumber
    }
  }

  convertToRomanNumber(arabicNumber){
    const keysRomanSymbols =  Object.keys(ROMAN_SYMBOLS).reverse()
    let romanNumberString = ''
    keysRomanSymbols.forEach(element => {
      while (arabicNumber >= Number(element)){
        arabicNumber -= Number(element)
        romanNumberString += (ROMAN_SYMBOLS[element])
      }
    })
    return romanNumberString
  }


}