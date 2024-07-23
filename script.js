const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");


const checkPalindrome = (input) => {
    
    if (input === "") {
        alert("Please input a value");
        return;
    }
    
    const regex = /[^a-zA-Z0-9]/g; //\W -> caratteri non alfanumerici
    const inputLowerCase = input.replace(regex, "").toLowerCase();
    let palindrome = isPalindrome(inputLowerCase);
    
    if (palindrome) {
        //console.log(`${input} is a palindrome`);
        resultDiv.innerHTML = `<strong>${input}</strong> is a palindrome`;
        resultDiv.style.display = "block";
    } else {
        //console.log(`${input} is not a palindrome`);
        resultDiv.innerHTML = `<strong>${input}</strong> is not a palindrome`;
        resultDiv.style.display = "block";
    }
}

const isPalindrome = (str) => {
    
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] != str[str.length - 1 - i]) {
                return false;
            } 
        }
    return true;
    }  
    
checkButton.addEventListener("click", () => {
	console.log("ciao pirla");
        checkPalindrome(inputText.value);
	inputText.value = ""; 
});