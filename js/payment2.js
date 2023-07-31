document.getElementById('paymentForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const expirationMonth = document.getElementById('expirationMonth').value;
    const expirationYear = document.getElementById('expirationYear').value;
    const cvc = document.getElementById('cvc').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    const data = {
        card_number: cardNumber,
        expiration_month: expirationMonth,
        expiration_year: expirationYear,
        cvc: cvc,
        amount: amount,
        currency: currency
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/payment/2/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (response.status === 200) {
            document.getElementById('result').innerText = responseData.message;
        } else {
            document.getElementById('result').innerText = 'Payment failed';
        }
    } catch (error) {
        console.error('Error sending data:', error);
    }
});