// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function () {
    modal[0].style.display = "block";
}

btn[1].onclick = function () {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function () {
    modal[0].style.display = "none";
}

span[1].onclick = function () {
    modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
}


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
