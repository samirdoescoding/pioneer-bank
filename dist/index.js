//login btn
const loginBtn = document.getElementById('login');
const loginArea = document.getElementById('login-area');
const transactionArea = document.getElementById('transaction-area');
//display
const depositDisplay = document.getElementById('deposit-display');
const withdrawDisplay = document.getElementById('withdraw-display');
const balanceDisplay = document.getElementById('balance-display');
//deposit and withdraw btn
const depositBtn = document.getElementById('deposit');
const withdrawBtn = document.getElementById('withdraw');
//deposit and withdraw input
const depositAmount = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
//login btn event handler
loginBtn.addEventListener('click', () => {
      loginArea.style.display = 'none';
      transactionArea.style.display = 'block';
      console.log("kkkk")
})
//total balance
let totalBalance = Number(balanceDisplay.innerHTML);
//deposit btn event handler
depositBtn.addEventListener('click', () => {
  let totalDeposit = Number(depositDisplay.innerHTML);
  let newDeposit = Number(depositAmount.value);
  totalDeposit += newDeposit;
  depositDisplay.innerHTML = totalDeposit;

  totalBalance += newDeposit;
  balanceDisplay.innerHTML = totalBalance;
  depositAmount.value = "";
})
//withdraw btn event handler
withdrawBtn.addEventListener('click', () => {
  let totalBalance = Number(balanceDisplay.innerHTML);
  let totalWithdraw = Number(withdrawDisplay.innerHTML);
  let newWithdraw = Number(withdrawAmount.value);

  if(totalBalance > 0 && newWithdraw <= totalBalance) {
      totalWithdraw += newWithdraw;
      withdrawDisplay.innerHTML = totalWithdraw;
      totalBalance -= newWithdraw;
      balanceDisplay.innerHTML = totalBalance;
      withdrawAmount.setAttribute("placeholder", "$ amount you want to withdraw");
      withdrawAmount.classList.remove("placeholder:text-red-500");
  } else if (newWithdraw > totalBalance) {
      withdrawAmount.setAttribute("placeholder", "Insufficient balance");
      withdrawAmount.classList.add("placeholder:text-red-500");
      withdrawAmount.value = "";
    }
    withdrawAmount.value = ""; 
})