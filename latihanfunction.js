// Q1
const tokoOnline = (buyer, product) => {
    return `Terima kasih ${buyer} sudah membeli ${product} di toko kami` 
}
console.log(tokoOnline("Garcy", "Laptop"))

// Q2
const multipleByNineFifths = (number) => {return number * (9/5)}
const multipleByFifthNine = (number) => {return number * (5/9)}
const getFahrenheit = (celcius) => {return multipleByNineFifths(celcius) + 32}
const getCelcius = (fahrenheit) => {return multipleByFifthNine(fahrenheit - 32)}
console.log(getFahrenheit(32))
console.log(getCelcius(89.6))

// Q3
function usiaKucing(usia) {
    if(usia === 1) {
        return `usia kucing 15 tahun`
    } else if (usia === 2) {
        return `usia kucing 24 tahun` 
    } else if (usia >= 3){
        return `usia kucing ${24 + ((usia-2)*4)} tahun`
    }
}
console.log(usiaKucing(1))
console.log(usiaKucing(2))
console.log(usiaKucing(3))

// Q4
const myLowerCase = (str) => {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const currentCharCode = str.charCodeAt(i);
        if (currentCharCode >= 65 && currentCharCode <= 90) {
            result += String.fromCharCode(currentCharCode + 32);
        } else {
            result += str[i];
        }
    }

    return result;
};
console.log(myLowerCase('Hello World'));
