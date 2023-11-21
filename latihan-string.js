// Q1. Buatlah sebuah function untuk mengecek apakah sebuah `string` kosong (blank) atau tidak
const is_Blank = (str) => {return str == "" ? true : false};

console.log(is_Blank(''));
console.log(is_Blank('abc'));

/*Q2. Buatlah sebuah function yang menerima 2 input yaitu: 
sebuah teks string dan number sebagai jumlah character yang akan di tampilkan.*/

const truncate_string = (str, number) => {
    for (let i = 0; i < str.length; i++) {
        return str.length > number ? str.slice(0, number) : str;
    }
}
console.log(truncate_string("Terra Skilvul",5));

/* Q3. Buatlah sebuah function yang menerima 1 inputan nama lengkap (fullname) berupa `string` 
dan akan menampilkan nama depan (firstname) + awal karakter dari nama belakang (lastname) + . (dot).
*/

const firstNameOnly = (fullname) => {
    let firstName = fullname.split(" ", 1);
    let lastName = fullname.split(" ").pop().split('', 1);
    return `${firstName} ${lastName}.`
};

console.log(firstNameOnly("David Winalda"));

/* Q4. Buatlah sebuah function yang menerima 1 inputan sebuah kalimat/frase berupa `string` dan akan menjadikan 
huruf pertama pada kalimat tersebut menjadi huruf Kapital.
*/

const capitalize = (phrase) => {return phrase.charAt(0).toUpperCase() + phrase.slice(1)};
console.log(capitalize('javascript adalah sebuah bahasa pemrograman yang sangat powerful'));

/* Q5. Buatlah sebuah function yang menerima 3 buah input.
- `str` (required) => Sebuah kalimat/frase berupa `string`
- `length` (`default = 100`) => Jumlah batasan sebuah teks ditampilkan. Nilai `default` akan dijalankan jika user tidak memasukkan argumen ini pada function.
- `ending` (`default = ...`) => Karakter `string` yang digunakan untuk menandakan bahwa kalimat/frtase tersebut dihide karena melebihi batas maksimal teks yang ditampilkan.
*/

const text_truncate = (str, length = 100, ending = '...') => {
    for (let i = 0; i < str.length; i++) {
        return str.length > length ? `${str.slice(0, length)} ${ending}` : str;
    }
};

console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))