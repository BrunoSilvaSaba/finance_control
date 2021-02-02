const modal = {
  //adicionar class active
  open() {
    //adicionar class active
    document.querySelector(".modal-overlay").classList.add("active");
  }, //remove class active
  close() {
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

//========================================== table =============================================================//

const transactions = [
  { id: 1, description: "Software", amount: 350000, date: "23/01/2021" },

  { id: 1, description: "aluguel", amount: -75000, date: "23/01/2021" },

  { id: 1, description: "faculdade", amount: -10000, date: "23/01/2021" },

  { id: 1, description: "Contabilidade", amount: -50000, date: "23/01/2021" },

  { id: 1, description: "Escritório", amount: -7600, date: "23/01/2021" },

  { id: 1, description: "Carro", amount: -80000, date: "23/01/2021" },

  { id: 1, description: "Mercado", amount: -50000, date: "23/01/2021" },

  { id: 1, description: "Academia", amount: -10000, date: "23/01/2021" },
];

const Transaction = {
  incomes() {
    let income = 0;
    //pegar todas as transações 
    transactions.forEach((transaction) => {
      if(transaction.amount > 0 ) {
        income += transaction.amount;
      }
    })
    return income;
  },
  expenses() {
    let expense = 0;

    transactions.forEach((transaction) => {
      if(transaction.amount < 0 ) {
        expense += transaction.amount;
      }
    })
    return expense;
  },
  total() {

    return Transaction.incomes() + Transaction.expenses();

  },
};


const structureTable = {
  transactionContainer: document.querySelector('#data_table tbody'),

  addTransaction(transaction, index) {

    const tr = document.createElement('tr')
    tr.innerHTML = structureTable.innerHTMLTransaction(transaction)

    structureTable.transactionContainer.appendChild(tr)

  },



  innerHTMLTransaction(transactions) {
    const CSSclass = transactions.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(transactions.amount)  

    const html = `
    <tr>
    <td class="description">${transactions.description}</td>
    <td class="${CSSclass}">${amount}</td>
    <td class="date">${transactions.date}</td>
    <td>
        <a href="">C</a>
    </td>
    </tr>
    `


    return html
  }, 

  updateBalance() {
    document.getElementById('incomeDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.incomes())

    document.getElementById('expenseDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.expenses())

    document.getElementById('totalDisplay')
    .innerHTML = Utils.formatCurrency(Transaction.total())
  }

}


//============================formatação de real========================================//   

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, "")  

    value = Number(value) / 100



    value = value.toLocaleString("pt-br", {    // funcionalidade propria de formatação local do javascript 
      style: "currency", 
      currency: "BRL"
    })

    return signal + value
  }
}

transactions.forEach(function(transaction) {
  structureTable.addTransaction(transaction)
}) 



//===================================Chamada de fuções ===================================================//

structureTable.updateBalance()
