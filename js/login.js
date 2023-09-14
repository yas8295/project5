const userName = document.querySelector(".username");
const userPassword = document.querySelector(".password");
const loginBtn = document.querySelector(".login-btn");
const accountContent = document.querySelector(".account");
const currentBalance = document.querySelector(".current-balance");
const transitionContent = document.querySelector(".transitions-content");
const transferTo = document.querySelector(".transfer-to");
const transferAmount = document.querySelector(".transfer-amount");
const transferBtn = document.querySelector(".transfer-btn");
const loanAmount = document.querySelector(".loan-amount");
const loanBtn = document.querySelector(".loan-btn");
const closeUser = document.querySelector(".close-account-user");
const closePassword = document.querySelector(".close-account-passoword");
const closeBtn = document.querySelector(".close-btn");

// add accounts

let account1 = {
  firstname: "Alex",
  lastname: "Smith",
  movements: [250, 400, -500, 900],
  pass: 1234,
};

let account2 = {
  firstname: "John",
  lastname: "Adams",
  movements: [-300, 600, -100, 200],
  pass: 4321,
};

let accounts = [account1, account2];

const makeUserName = function (acc) {
  let user = [acc.firstname, acc.lastname]
    .map((e) => e[0])
    .join("")
    .toLowerCase();
  acc.username = user;
};

accounts.forEach((e) => makeUserName(e));

//  end accounts

// operations

let activeAccount;

let addTransitions = function () {
  transitionContent.innerHTML = "";
  activeAccount.movements.forEach(function (e, i) {
    let cond = e > 0 ? "deposit" : "withdrawal";
    let transitionsBox = `<div class="transitions-box p-4 d-flex justify-content-between align-items-center">
            <div>
              <div class="${cond}">${i + 1} ${cond}</div>
            </div>
            <div class="trans-balance">
              ${e}$
            </div>
          </div>`;
    transitionContent.insertAdjacentHTML("afterbegin", transitionsBox);
  });
  currentBalance.textContent =
    activeAccount.movements.reduce((acc, e) => acc + e) + "$";
  activeAccount.balance = activeAccount.movements.reduce((acc, e) => acc + e);
};

loginBtn.addEventListener("click", function (b) {
  b.preventDefault();

  for (let acc of accounts) {
    if (
      userName.value === acc.username &&
      Number(userPassword.value) === acc.pass
    ) {
      activeAccount = accounts.find((e) => e.username === userName.value);
      accountContent.classList.toggle("show");
      addTransitions();
      userName.value = "";
      userPassword.value = "";
    }
  }
});

transferBtn.addEventListener("click", function (b) {
  b.preventDefault();

  for (let acc of accounts) {
    if (
      transferTo.value === acc.username &&
      acc.username !== activeAccount.username &&
      activeAccount.balance >= transferAmount.value &&
      transferAmount.value > 0
    ) {
      activeAccount.movements.push(Number(`${-transferAmount.value}`));
      let Reciver = accounts.find((e) => e.username === transferTo.value);
      Reciver.movements.push(Number(`${transferAmount.value}`));
      addTransitions();
      transferTo.value = "";
      transferAmount.value = "";
    }
  }
});

loanBtn.addEventListener("click", function (b) {
  b.preventDefault();

  if (loanAmount.value < activeAccount.balance * 1.25 && loanAmount.value > 0) {
    activeAccount.movements.push(Number(loanAmount.value));
    addTransitions();
  }
});

closeBtn.addEventListener("click", function (b) {
  b.preventDefault();

  if (
    closeUser.value === activeAccount.username &&
    Number(closePassword.value) === activeAccount.pass
  ) {
    accountContent.classList.toggle("show");
    closeUser.value = "";
    closePassword.value = "";
  }
});
