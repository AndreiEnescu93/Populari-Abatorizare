const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
    const { companyName, location, numItems, avgWeight, deliveryDate } = req.body;

    try {
        const newBooking = new Booking({ companyName, location, numItems, avgWeight, deliveryDate });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createBooking, getBookings };
