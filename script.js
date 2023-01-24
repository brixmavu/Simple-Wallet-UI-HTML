// Initialize variables for balance and transaction history
let balance = 0;
let transactionHistory = [];

// Add funds function
function addFunds(amount) {
  balance += amount;
  transactionHistory.push({type: "add", amount: amount});
  updateBalance();
  updateTransactionHistory();
}

// Withdraw funds function
function withdrawFunds(amount) {
  if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    balance -= amount;
    transactionHistory.push({type: "withdraw", amount: amount});
    updateBalance();
    updateTransactionHistory();
  }
}

// Update balance function
function updateBalance() {
  document.getElementById("balance").innerHTML = "$" + Number(balance).toFixed(2);
}

// Update transaction history function
function updateTransactionHistory() {
  let transactionList = document.getElementById("transactions");
  transactionList.innerHTML = "";

  for (let i = 0; i < transactionHistory.length; i++) {
    let transaction = transactionHistory[i];
    let transactionElement = document.createElement("li");
    let transactionText = document.createTextNode(transaction.type + " - $" + transaction.amount.toFixed(2));
    transactionElement.appendChild(transactionText);
    transactionList.appendChild(transactionElement);
  }
  if (transactionHistory.length > 10) {
    createNewPage();
  }
}

// Create new page for transaction history
function createNewPage() {
  // code to create new page with transaction history
}

// Add event listeners for add funds form and withdraw funds form
document.getElementById("add-funds-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let amount = document.getElementById("add-amount").value;
  addFunds(Number(amount));
});

document.getElementById("withdraw-funds-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let amount = document.getElementById("withdraw-amount").value;
  withdrawFunds(Number(amount));
});

