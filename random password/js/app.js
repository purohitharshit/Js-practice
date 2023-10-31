const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&_*/?";

const areaAnswer = document.getElementById("area");
const maxCharPass = document.getElementById("max-char");
const upperCaseInput = document.getElementById("upper-case");
const lowerCaseInput = document.getElementById("lower-case");
const numbersInput = document.getElementById("number-case");
const symbolInput = document.getElementById("symbol-case");

const getRandomData = (dataSet) => {

    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatePass = (password = "") => {
    if (upperCaseInput.checked) {
        password += getRandomData(upperSet);
    }
    if (lowerCaseInput.checked) {
        password += getRandomData(lowerSet);
    }
    if (numbersInput.checked) {
        password += getRandomData(numberSet);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet);
    }
    // console.log(password);
    if (password.length < maxCharPass.value) {
        return generatePass(password);
    }

    areaAnswer.innerText = truncateString(password, maxCharPass.value);

}

// generatePass();

document.getElementById("btn").addEventListener("click", function () {
    generatePass();

})


function truncateString(str, num) {

    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}


