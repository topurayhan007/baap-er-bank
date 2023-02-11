// step 1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // step 2: get the deposit amount form the deposit input field
  // for the input field use .value to get the value inside the field
  const depostField = document.getElementById("deposit-field");
  const depositAmount = depostField.value;

  // step 3: get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const depositTotalELement = document.getElementById("deposit-total");
  const depositTotal = depositTotalELement.innerText;
  const totalDeposit = parseFloat(depositTotal) + parseFloat(depositAmount);

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotal = balanceTotalElement.innerText;
  const totalBalance = parseFloat(balanceTotal) + totalDeposit;

  depositTotalELement.innerText = totalDeposit;
  balanceTotalElement.innerHTML = totalBalance;

  depostField.value = "";
});
