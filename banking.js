//  Deposit handler
const dpositButton = document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmountText= document.getElementById('input-deposit').value;
    const newDepositAmountValue= parseFloat(newDepositAmountText);

    //  Deposite Add
    const depositText = document.getElementById('depoisit-amount').innerText;
    const depositValue = parseFloat(depositText);
    const totalDepositAmount = depositValue + newDepositAmountValue
   document.getElementById('depoisit-amount').innerText =  totalDepositAmount;

//    Balance Add
const balanceText= document.getElementById('balance-amount').innerText
const balanceValue = parseFloat(balanceText);
const totalBalance = balanceValue + newDepositAmountValue;
document.getElementById('balance-amount').innerText = totalBalance;

//  clear deposit input
document.getElementById('input-deposit').value ='';

})

//  Withdraw handler
const WithdrawButton = document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmountText = document.getElementById('input-withdraw').value;
    const newWithdrawAmountValue = parseFloat(newWithdrawAmountText);

    //  Withdraw add
    const preWithdrawAmountText = document.getElementById('withdraw-amount').innerText;
    const preWithdrawAmountValue = parseFloat(preWithdrawAmountText);
    const totalWithdrawAmount = preWithdrawAmountValue + newWithdrawAmountValue;
    console.log(totalWithdrawAmount)
    document.getElementById('withdraw-amount').innerText = totalWithdrawAmount;

    // Balance subtruct

    const preBlanceText = document.getElementById('balance-amount').innerText;
    const preBlanceValue = parseFloat(preBlanceText);
    const totalBalance =preBlanceValue - newWithdrawAmountValue;
    document.getElementById('balance-amount').innerText = totalBalance;

    // Clear input-withdraw

    document.getElementById('input-withdraw').value='';



})