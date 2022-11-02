const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "@","#","$","%","&","_","-"
];

let passwordOne = document.getElementById("password-1")
let passwordTwo = document.getElementById("password-2")
let passwordLength = document.getElementById("select-length")
passwordLength.setAttribute("type", "range")
let useSymbols = document.getElementById("select-symbols")
useSymbols.setAttribute("type", "checkbox")
let useNumbers = document.getElementById("select-numbers")
useNumbers.setAttribute("type", "checkbox")

// ---------- Get a Random Password ----------
function getRandomPassword() {
    let password = ""
    for(i = 0; i < passwordLength.value; i++) {
        // Use Only characters
        if(useSymbols.checked === false && useNumbers.checked === false) {
            let char = Math.floor( Math.random() * 52)
            password += characters[char]
        }
        // Use characters and Symbols. No numbers
        else if(useSymbols.checked === true && useNumbers.checked === false) {
            let char = Math.floor( Math.random() * 69)
            if(char < 52 || char > 62) {
                password += characters[char]
            } else {
                password += characters[char - 30]
            }
        }
        // Use characters and Numbers. No symbols
        else if(useSymbols.checked === false && useNumbers.checked === true) {
            let char = Math.floor( Math.random() * 62)
            password += characters[char]
        }
        // Use characters, Numbers and Symbols.
        else {
            let char = Math.floor( Math.random() * 69)
            password += characters[char]
        }
    }
    return password
}

// ---------- Generate The Passwords ----------
function genrate() {
    passwordOne.textContent = getRandomPassword()
    passwordTwo.textContent = getRandomPassword()
}

// ---------- Click To Copy Password 1 ----------
function copyPasswordOne() {
    if(passwordOne.innerHTML !== "<br>") {
        // Copy the password inside the text field
        navigator.clipboard.writeText(passwordOne.textContent);

        // Alert the copied password
        alert(passwordOne.textContent + " Copied!");
    }
    
}
// ---------- Click To Copy Password 2 ----------
function copyPasswordTwo() {
    if(passwordTwo.innerHTML !== "<br>") {
        // Copy the password inside the text field
        navigator.clipboard.writeText(passwordTwo.textContent);

        // Alert the copied password
        alert(passwordTwo.textContent + " Copied!");
    }
}