document.getElementById('add-money-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const currentBalance = parseInt(document.getElementById('current-balance').innerText);
    const addMoney = parseInt(document.getElementById('add-amount').value);
    document.getElementById('current-balance').innerText = currentBalance + addMoney;
})