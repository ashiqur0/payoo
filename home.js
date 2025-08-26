document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = parseInt(document.getElementById('current-balance').innerText);
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addMoney = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('pin-number').value);

    if (bank === 'Select a back' || accountNumber != '01643496398' || addMoney < 0 || pin !== 2244) {
        alert('invalid credentials');
        return;        
    } else {
        document.getElementById('current-balance').innerText = currentBalance + addMoney;
        document.getElementById('bank').innerHTML = `
        <option disabled selected>Select a back</option>
        <option>Dutch Bangla Bank</option>
        <option>Brac Bank </option>
        <option>Midland Bank</option>
        `
        document.getElementById('account-number').value = '';
        document.getElementById('add-amount').value = '';
        document.getElementById('pin-number').value = '';
    }    
});

document.getElementById('withdraw-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = parseInt(document.getElementById('current-balance').innerText);
    const agentNumber = document.getElementById('agent-number').value;
    const cashout = parseInt(document.getElementById('cashout-amount').value);
    const pin = parseInt(document.getElementById('pin-number-cashout').value);

    if (agentNumber != '01643496398' || cashout < 0 || cashout > currentBalance || pin !== 2244) {
        alert('invalid credentials');
        return;        
    } else {
        document.getElementById('current-balance').innerText = currentBalance - cashout;
        document.getElementById('agent-number').value = '';
        document.getElementById('cashout-amount').value = '';
        document.getElementById('pin-number-cashout').value = '';
    }
});

function getForm(id) {
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
    document.getElementById('get-bonus-parent').style.display = 'none';
    document.getElementById('pay-bill-parant').style.display = 'none';
    document.getElementById('transaction-parant').style.display = 'none';

    document.getElementById(id).style.display = 'block';
}

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