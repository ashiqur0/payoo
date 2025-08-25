document.getElementById('loginbtn').addEventListener('click', function(e) {
    e.preventDefault();
    const mobileNumber = '01643496398';
    const pinNumber = 2244;

    const inputMobileNumber = document.getElementById('mobile-number').value;
    const inputPinNumber = parseInt(document.getElementById('pin-number').value);

    if (mobileNumber === inputMobileNumber && pinNumber === inputPinNumber) {
        window.location.href = './home.html';
    } else {
        alert('Invalid credentials');
    }
})