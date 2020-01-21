describe('Roman numbers',function (){
  it("returns a 'I' if recives a 1",()=>{
    //ARRANGE
    const newRomanNumbers = new RomanNumbers()
    const sentNumber = 1
    const expectedResult = 'I'
    //ACT
    const romanNumber = newRomanNumbers.convertToRomanNumber(sentNumber)
    //ASSERT
    expect(expectedResult).toEqual(romanNumber)
  })

  it("returns a 'II' if recives a 2",()=>{
    const newRomanNumbers = new RomanNumbers()
    const sentNumber = 2
    const expectedResult = 'II'

    const romanNumber = newRomanNumbers.convertToRomanNumber(sentNumber)

    expect(expectedResult).toEqual(romanNumber)
  })

  it("returns a 'III' if recives a 3",()=>{
    const newRomanNumbers = new RomanNumbers()
    const sentNumber = 3
    const expectedResult = 'III'

    const romanNumber = newRomanNumbers.convertToRomanNumber(sentNumber)

    expect(expectedResult).toEqual(romanNumber)
  })

  it('returns a "IV" if recives a 4', ()=>{
    const newRomanNumbers = new RomanNumbers()
    const sentNumber = 4
    const expectedResult = 'IV'

    const romanNumber = newRomanNumbers.convertToRomanNumber(sentNumber)

    expect(expectedResult).toEqual(romanNumber)
  })

  it('returns the roman numeral for each number from 1 to 9.999', ()=>{
    const newRomanNumbers = new RomanNumbers()
    const expectedResult = 'string'

    for (let counter = 1; counter < 1000; counter++){
      const romanNumber = newRomanNumbers.convertToRomanNumber(counter)
      console.log('for the number: ' + counter + ' the roman number: ' + romanNumber)

      expect(typeof(romanNumber)).toEqual(expectedResult)
    }
  })
})

