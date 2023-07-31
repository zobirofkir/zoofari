document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    try {
        const response = await fetch('http://localhost:8000/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        console.log(responseData);

        if (response.status === 201) {
            // Status code 201 (Created), navigate to index.html
            window.location.href = "index.html";
        }else{
            alert("This email has been already existing !!!");
        }
        } catch (error) {
        console.error('Error sending data:', error);
    }
});
