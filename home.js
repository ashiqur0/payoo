/** Shared Code / Reusable Function */
function getTextValue(id) {
    return parseInt(document.getElementById(id).innerText);
}

function getInputValue(id) {
    return parseInt(document.getElementById(id).value);
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

function getForm(id) {
    displayNone(['add-money-parent', 'cash-out-parent', 'transfer-money-parent', 'get-bonus-parent', 'pay-bill-parant', 'transaction-parant']);
    document.getElementById(id).style.display = 'block';
}

/** Card Click Functionality */
document.getElementById('add-money-option').addEventListener('click', function() {
    getForm('add-money-parent');
});

document.getElementById('cashout-option').addEventListener('click', function() {
    getForm('cash-out-parent');
});

document.getElementById('transfer-money-option').addEventListener('click', function() {
    getForm('transfer-money-parent');
});

document.getElementById('get-bonus-option').addEventListener('click', function() {
    getForm('get-bonus-parent');
});

document.getElementById('paybill-option').addEventListener('click', function() {
    getForm('pay-bill-parant');
});

document.getElementById('transaction-option').addEventListener('click', function() {
    getForm('transaction-parant');
});

/** Button Click Functionality */
document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = getTextValue('current-balance');
    const bank = document.getElementById('bank').value;
    const accountNumber = getInputValue('account-number');
    const addMoney = getInputValue('add-amount');
    const pin = getInputValue('pin-number');

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
    const currentBalance = getTextValue('current-balance');
    const agentNumber = getInputValue('agent-number');
    const cashout = getInputValue('cashout-amount');
    const pin = getInputValue('pin-number-cashout');

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