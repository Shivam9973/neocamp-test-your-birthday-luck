const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function comperValues(sum, luckyNumber) {
    if (sum % luckyNumber == 0) {
        outputBox.innerText = "Wow!!! 🥳Your Birthday is luckey🥳";
    } else {
        outputBox.innerText = "Oh No! 😔Your birthday is not luckey😔";
    }
}

function checkBirthdayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob)
        comperValues(sum, luckyNumber.value);
    else
        outputBox.innerText = "Please enter both the fields";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", (""));
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky);