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
const card_form = {'add-money-option' : 'add-money-parent', 'cashout-option' : 'cash-out-parent', 'transfer-money-option' : 'transfer-money-parent', 'get-bonus-option' : 'get-bonus-parent', 'paybill-option' : 'pay-bill-parant', 'transaction-option' : 'transaction-parant'};
for (const form in card_form) {
    document.getElementById(form).addEventListener('click', function() {
        getForm(card_form[form]);
    });
}

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