const express = require('express');
const router = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController');

// Endpoint pentru a verifica dacă ruta funcționează corect
router.get('/test', (req, res) => {
    res.send('Booking route is working!');
});

router.post('/', createBooking);
router.get('/', getBookings);

module.exports = router;
