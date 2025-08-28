/** Shared Code / Reusable Function */

const transactionData = [];
function setTransactionData(data) {
    const tData = {
        icon : data[0],
        name : data[1],
        amount : data[2],
        date : new Date().toLocaleTimeString()
    };

    transactionData.push(tData);
}

function getTextNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}

function getInputValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function removeFieldValue(fieldValue) {
    for (const field of fieldValue) {
        document.getElementById(field).value = '';
    }
}

function displayNone(elements) {
    for (const element of elements) {
        document.getElementById(element).style.display = 'none';
    }
}

function removeStyle(card_form) {
    for (const card in card_form) {
        document.getElementById(card).classList.remove('bg-[#0874f20d]', 'border-[#0874F2]');
        document.getElementById(card).classList.add('border-gray-300');
        document.getElementById(card).children[1].classList.remove('text-blue-500', 'font-semibold');
    }
}

function getForm(id) {
    displayNone(['add-money-form', 'cash-out-form', 'transfer-money-form', 'get-bonus-form', 'pay-bill-form', 'transaction-data']);

    if (id === 'transaction-data') {
        const transactionContainer = document.getElementById('transaction-container');
        transactionContainer.innerText = '';

        for (let i = transactionData.length - 1; i >= 0 && i > transactionData.length - 1 - 4; i--) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="flex justify-between items-center bg-white rounded-lg p-3 mb-3">
                    <div class="flex items-center">
                        <div class="rounded-full p-3 bg-[#f4f5f7]">
                            <img src="${transactionData[i].icon}" alt="" class="mx-auto">
                        </div>
                        <div class="ml-3">
                            <h1>${transactionData[i].name} : ${transactionData[i].amount} Tk</h1>
                            <p>${transactionData[i].date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            `;
            transactionContainer.appendChild(div);
        }
    }
    
    document.getElementById(id).style.display = 'block';
}

function dynamicCardStyle(card) {
    removeStyle(card_form);
    document.getElementById(card).classList.remove('border-gray-300');
    document.getElementById(card).classList.add('bg-[#0874f20d]', 'border-[#0874F2]');
    document.getElementById(card).children[1].classList.add('text-blue-500', 'font-semibold');
}

/** Card Click Functionality */
const card_form = {'add-money-card' : 'add-money-form', 'cashout-card' : 'cash-out-form', 'transfer-money-card' : 'transfer-money-form', 'get-bonus-card' : 'get-bonus-form', 'paybill-card' : 'pay-bill-form', 'transaction-card' : 'transaction-data'};
for (const card in card_form) {
    document.getElementById(card).addEventListener('click', function() {
        getForm(card_form[card]);
        dynamicCardStyle(card);
    });
}

/** Button Click Functionality */
document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = getTextNumber('current-balance');
    const bank = getInputValue('bank');
    const accountNumber = getInputValueNumber('account-number');
    const addMoney = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('pin-number');

    if (bank === 'Select a back') {
        alert('Select a bank');
        return;
    } else if (accountNumber !== 1643496398 || pin !== 2244) {
        alert('invalid credentials');
        return;        
    } else if (addMoney < 0) {
        alert('Invalid Amount');
        return;
    } else {
        document.getElementById('current-balance').innerText = currentBalance + addMoney;
        document.getElementById('bank').innerHTML = `
        <option disabled selected>Select a back</option>
        <option>Dutch Bangla Bank</option>
        <option>Brac Bank </option>
        <option>Midland Bank</option>
        `;
        removeFieldValue(['account-number', 'add-amount', 'pin-number']);
    }

    setTransactionData(['./assets/wallet1.png', 'Money Added', addMoney]);
});

document.getElementById('withdraw-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = getTextNumber('current-balance');
    const agentNumber = getInputValueNumber('agent-number');
    const cashoutAmount = getInputValueNumber('cashout-amount');
    const pin = getInputValueNumber('pin-number-cashout');

    if (agentNumber !== 1643496398 || pin !== 2244) {
        alert('invalid credentials');
        return;        
    } else if (cashoutAmount < 0 || cashoutAmount > currentBalance) {
        alert('Invalid Amount');
        return;
    } else {
        document.getElementById('current-balance').innerText = currentBalance - cashoutAmount;
        removeFieldValue(['agent-number', 'cashout-amount', 'pin-number-cashout']);
    }

    setTransactionData(['./assets/send1.png', 'Cash Out', cashoutAmount]);
});