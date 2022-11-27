const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
//  totalBalance;
 let current_name =localStorage.getItem("currentname")
 let Account_balance = localStorage.getItem("currentamount");
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const btnSign= document.getElementById('btnSignout');
const btnAccount= document.getElementById('btnAccount');
 const message=document.getElementById('inputs')
    //window.localStorage.getItem(key,JSON.stringify(Newuser));
// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnDeposit.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        
        Account_balance = (parseFloat (Account_balance) +(Number(userDeposit.value)));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(Account_balance);
        acctBalanceLbl.innerHTML = `  ${totalBalanceFormatted}`;
        message.style="position:relative; right:80%";
        acctBalanceLbl.style.color="blue"
        
        
        

    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw.value > Account_balance - 5) {
            alert("Your account balance cannot drop below $5.");
            return userWithdraw.value = '';
        } else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        // calculate Total Balance
        Account_balance = (parseFloat( Account_balance)-(Number(userWithdraw.value)) )

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(Account_balance);
        // document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
        acctBalanceLbl.innerHTML = `  ${totalBalanceFormatted}`;
        message.style="position:relative; right:80%";
        acctBalanceLbl.style.color="blue"
        
    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

// format TotalBalance to show $ XX.XX (2 decimal places)

// let totalBalanceFormatted = formatter.format(totalBalance);
// document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

btnSign.addEventListener('click', () => {
alert("click on ok to sign out")
    location.href= "form.html"
     
    localStorage.setItem("currentname")
 totalBalanceFormatted =   localStorage.getItem(`${Newuser.amount}`, JSON.stringify(Newuser))
}

)
btnAccount.addEventListener('click',()=> {
    // let account= totalBalance + Account_balance
    // 
    // alert (`Hi ${current_name}, your current balance is ${Account_balance} Naira.`)
    // acctBalanceLbl.innerHTML = ` your current balance is ${Account_balance}`;
    
 acctBalanceLbl.innerHTML=   ` your avail. bal is $${Account_balance} `;
 acctBalanceLbl.style.color="blue"
 message.style="position:relative; right:50%;"
})

