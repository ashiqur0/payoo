document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = parseInt(document.getElementById('current-balance').innerText);
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addMoney = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('pin-number').value);
    if (bank === 'Select a back' || accountNumber.length != '01643496398' || addMoney < 0 || pin !== 2244) {
        alert('invalid credentials');
        return;        
    }
    
    document.getElementById('current-balance').innerText = currentBalance + addMoney;
})