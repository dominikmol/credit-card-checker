//  Checking the checksum
function checkSum(number, length) {
    let sum = 0;
    let counter = 1;
    
    for (let i = length - 1; i >= 0; i--) {
        //  Getting a single digit from number
        let digit = parseInt(number[i]);

        if (counter % 2 == 0) {
            digit *= 2;

            if (digit > 9) {
                digit %= 10;
                sum += 1 + digit;
            } else {
                sum += digit;
            }
        } else {
            sum += digit;
        }

        counter++;
    }

    //  Final test if checksum is good
    if ((sum % 10) == 0) {
        return 1;
    } else {
        return 0;
    }
}

//  Checking for type of card
function checkCard(sum, number, length) {
    //  Checking if checksum is good
    if (sum == 1) {
        //  Checking different lengths of card number
        switch (length) {
            case 13:
                if (parseInt(number[0]) == 4) {
                    alert("VISA");
                } else {
                    alert("INVALID");
                }
                break;
            case 15:
                if (parseInt(number[0]) == 3 && (parseInt(number[1]) == 4 || parseInt(number[1]) == 7)) {
                    alert("AMEX");
                } else {
                    alert("INVALID");
                }
                break;
            case 16:
                if (parseInt(number[0]) == 4) {
                    alert("VISA");
                } else if (parseInt(number[0]) == 5 && parseInt(number[1]) <= 5) {
                    alert("MASTERCARD");
                } else {
                    alert("INVALID");
                }
                break;
            default:
                alert("INVALID");
                break;
        }
    } else {
        alert("INVALID");
    }
}

function getCard() {
    //  taking number from the input
    let cardNumber = document.getElementById("number").value;
    let numberLength = cardNumber.length;
    let sum = checkSum(cardNumber, numberLength);
    checkCard(sum, cardNumber, numberLength);
}