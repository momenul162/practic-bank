function getInputField(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const inputValue = parseFloat(inputFieldText);
  inputField.value = "";
  return inputValue;
}

function updateAmountField(amountFieldId, amount) {
  const amountField = document.getElementById(amountFieldId);
  const amountFieldText = amountField.innerText;
  const amountFieldValue = parseFloat(amountFieldText);
  amountField.innerText = amountFieldValue + amount;
}

function currentBalance() {
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceText = totalBalance.innerText;
  const totalBalanceValue = parseFloat(totalBalanceText);
  return totalBalanceValue;
}

function updateBalance(amount, isAdd) {
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceValue = currentBalance();
  if (isAdd == true) {
    totalBalance.innerText = totalBalanceValue + amount;
  } else {
    totalBalance.innerText = totalBalanceValue - amount;
  }
}

document.getElementById("deposit-button").addEventListener("click", function () {
  const depositAmount = getInputField("deposit-amount");
  if (depositAmount > 0) {
    updateAmountField("total-deposit", depositAmount);
    updateBalance(depositAmount, true);
  }
});
document.getElementById("withdraw-button").addEventListener("click", function () {
  const withdrawAmount = getInputField("withdraw-amount");
  const balance = currentBalance();
  if (withdrawAmount > 0 && withdrawAmount < balance) {
    updateAmountField("total-withdraw", withdrawAmount);
    updateBalance(withdrawAmount, false);
  }
  if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
  }
});
