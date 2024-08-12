const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    numItems: { type: Number, required: true },
    avgWeight: { type: Number, required: true },
    deliveryDate: { type: Date, required: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
