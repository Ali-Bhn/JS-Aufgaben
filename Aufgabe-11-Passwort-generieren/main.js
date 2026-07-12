const passwordBox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖß";
const lowerCase = "abcdefghijklmnopqrstuvwxyzäöüß";
const number = "0123456789"
const symbol ="!$%&/()=?@><+#_]{}[";
const allChars = uppercase + lowerCase + number + symbol;


function createPassword (){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword (){
    passwordBox.select();
    document.execCommand("copy");

}