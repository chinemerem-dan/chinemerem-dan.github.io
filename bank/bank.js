let password = 1234;
let accountBalance = 10000;
let counter = 1;
​
let sign_in = document.getElementById('signin-ui');
let Name = document.getElementById('name');
let transcation = document.getElementById('transcation-ui')
let incorrect = document.getElementById('incorrect-ui')
let banned = document.getElementById('banned-ui');
let transactionMessage = document.getElementById('transactionMessage-ui');
let exitMessage = document.getElementById('exit-ui');
​
​
let passwordInput = document.getElementById('password')//Password inputed by client
​
sign_in.addEventListener('submit', ((e) =>{
    e.preventDefault();
    //If you want to redirect to another page
    // window.location.href = "https://google.com"
    // window.location = "https://google.com"
    // window.location.replace("https://google.com")
    // location.replace("https://google.com")
    //  location.href = "https://google.com"
    // location = "https://google.com"
    if (passwordInput.value == password){
        transcation.style.display = 'block'
        sign_in.style.display = 'none'
        incorrect.style.display = 'none'
        passwordInput.value = ''
        exitMessage.style.display = 'none'
        counter = 0;
    }
    else if (passwordInput.value != password && counter < 4){
        incorrect.style.display = 'block'
        counter++
    }
    else if (passwordInput.value != password && counter >= 4){
        sign_in.style.display = 'none'
        incorrect.style.display = 'none'
        banned.style.display = 'block'
        counter++
    }
​
}))
​
transcation.addEventListener('submit' , ((e) =>{
    e.preventDefault();
        let inputElements = document.getElementsByName('transaction')
        
        for (let element of inputElements){
            if (element.checked){
               transcationFunction(element, element.id)
            }
        }
}))
​
function transcationFunction(element, transaction){ // Function for performing transaction
    if (transaction == 'checkBalance'){
        sign_in.style.display = 'none'
        transactionMessage.innerHTML = `<p>${Name.value}, Your transcation was successful</p>
                                        <p>Your Account Balance is ${accountBalance} Naira  </p>
                                        <p><b>Select A Transaction Above for another transaction</b></p>
                                            `
        element.checked = false
    }
​
    else if (transaction == 'withdraw'){
        sign_in.style.display = 'none'
        let withdraw = parseFloat(prompt('Enter Amount you want to withdraw'));
        if (withdraw <= accountBalance){
        accountBalance = accountBalance - withdraw;
        transactionMessage.innerHTML = `<p>${Name.value}, Your transcation was successful</p>
                                        <p>Your Account Balance is ${accountBalance} Naira  </p>
                                        <p><b>Select A Transaction Above for another transaction</b></p>
                                            `
        element.checked = false
        }
}
​
​
else if (transaction == 'deposit'){
    sign_in.style.display = 'none'
    let deposit = parseFloat(prompt('Enter Amount you want to deposit'));
    if (deposit <= 100000){
    accountBalance = accountBalance + deposit;
    transactionMessage.innerHTML = `<p>${Name.value}, Your transcation was successful</p>
                                    <p>Your Account Balance is ${accountBalance} Naira  </p>
                                    <p><b>Select A Transaction Above for another transaction</b></p>
                                        `
    element.checked = false
    }
}
​
else if (transaction == 'sign-out'){
    sign_in.style.display = 'block'
    exitMessage.style.display = 'block'
    transcation.style.display = 'none'
    transactionMessage.style.display = 'none'
    element.checked = false
}
​
}