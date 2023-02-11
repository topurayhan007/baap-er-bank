// step 1: add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2: get the deposit amount form the withdraw input field
  // for the input field use .value to get the value inside the field
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = withdrawField.value;

  if (isNaN(parseFloat(withdrawAmount))) {
    alert("Please provide an amount!");
    return;
  }

  // step 3: get the current deposit total
  // for non-input (element other than input, textarea) use innerText to get the text
  const withdrawTotalELement = document.getElementById("withdraw-total");
  const withdrawTotal = withdrawTotalELement.innerText;

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotal = balanceTotalElement.innerText;

  if (withdrawAmount <= balanceTotal) {
    const totalWithdraw =
      parseFloat(withdrawTotal) + parseFloat(withdrawAmount);

    const totalBalance = parseFloat(balanceTotal) - parseFloat(withdrawAmount);

    withdrawTotalELement.innerText = totalWithdraw;
    balanceTotalElement.innerHTML = totalBalance;
  } else {
    alert("You don't have enough money!");
    withdrawField.value = "";
    return;
  }

  withdrawField.value = "";
});
