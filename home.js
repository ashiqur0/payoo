/** Shared Code / Reusable Function */
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
    displayNone(['add-money-form', 'cash-out-form', 'transfer-money-form', 'get-bonus-form', 'pay-bill-form', 'transaction-form']);
    document.getElementById(id).style.display = 'block';
}

function getStyle(card) {
    removeStyle(card_form);
    document.getElementById(card).classList.remove('border-gray-300');
    document.getElementById(card).classList.add('bg-[#0874f20d]', 'border-[#0874F2]');
    document.getElementById(card).children[1].classList.add('text-blue-500', 'font-semibold');
}

/** Card Click Functionality */
const card_form = {'add-money-card' : 'add-money-form', 'cashout-card' : 'cash-out-form', 'transfer-money-card' : 'transfer-money-form', 'get-bonus-card' : 'get-bonus-form', 'paybill-card' : 'pay-bill-form', 'transaction-card' : 'transaction-form'};
for (const card in card_form) {
    document.getElementById(card).addEventListener('click', function() {
        getForm(card_form[card]);
        getStyle(card);
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
});

document.getElementById('withdraw-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = getTextNumber('current-balance');
    const agentNumber = getInputValueNumber('agent-number');
    const cashout = getInputValueNumber('cashout-amount');
    const pin = getInputValueNumber('pin-number-cashout');

    if (agentNumber !== 1643496398 || pin !== 2244) {
        alert('invalid credentials');
        return;        
    } else if (cashout < 0 || cashout > currentBalance) {
        alert('Invalid Amount');
        return;
    } else {
        document.getElementById('current-balance').innerText = currentBalance - cashout;
        removeFieldValue(['agent-number', 'cashout-amount', 'pin-number-cashout']);
    }
});