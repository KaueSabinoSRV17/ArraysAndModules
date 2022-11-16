const validFormats = ['F', 'C']
const regexForNonNumbers = /\D/g 

const testValityOfString = string => validFormats.some(format => string.toUpperCase().includes(format))
const extractNumberFromString = string => Number(string.replace(regexForNonNumbers, ''))
const extractFormatFromString = string => string.at(string.length - 1)

function convertTemperatureNumberFromString(string) {
    const stringIsValid = testValityOfString(string)
    if (!stringIsValid) {
       throw new Error('Type a number in the right format: Ending with F or C!') 
    }

    const format = extractFormatFromString(string)
    const number = extractNumberFromString(string)

    switch (format) {
        case 'F':
           return `${(number - 32) * 5 / 9}C`
        case 'C':
            return `${number * 9 / 5 + 32}F`
    }
}

console.log(convertTemperatureNumberFromString('30F'))