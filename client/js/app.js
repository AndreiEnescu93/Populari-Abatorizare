document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const bookingData = {
        companyName: document.getElementById('companyName').value,
        location: document.getElementById('location').value,
        numItems: document.getElementById('numItems').value,
        avgWeight: document.getElementById('avgWeight').value,
        deliveryDate: document.getElementById('deliveryDate').value
    };

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });

        if (response.ok) {
            alert('Booking created successfully');
            document.getElementById('bookingForm').reset();
        } else {
            alert('Error creating booking');
        }
    } catch (error) {
        alert('Network error');
    }
});
