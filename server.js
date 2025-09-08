import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Providers data (hidden numbers)
let providers = [
  { id: 1, name: "Ramesh Kumar", number: "+917060675133" },
  { id: 2, name: "Suresh Verma", number: "+917017866089" },
  { id: 3, name: "Anil Sharma", number: "+919988776655" },
];

// Bookings storage
let bookings = [];

// Get bookings for a provider
app.get("/api/provider/:id/bookings", (req, res) => {
  const providerId = Number(req.params.id);
  const providerBookings = bookings.filter((b) => b.providerId === providerId);
  res.json(providerBookings);
});

// Create a booking
app.post("/api/bookings", (req, res) => {
  const { providerId, customerName, date, time, location, notes } = req.body;

  const newBooking = {
    id: bookings.length + 1,
    providerId,
    customerName,
    date,
    time,
    location,
    notes: notes || "",
    status: "Pending",
  };

  bookings.push(newBooking);

  res.json({ success: true, booking: newBooking });
});

// Update booking status (Accept / Decline)
app.put("/api/bookings/:id/status", (req, res) => {
  const bookingId = Number(req.params.id);
  const { status } = req.body; // "Accepted" or "Declined"

  const booking = bookings.find((b) => b.id === bookingId);
  if (!booking) return res.status(404).json({ error: "Booking not found" });

  booking.status = status;
  res.json({ success: true, booking });
});

app.listen(5000, () => console.log("Server running on port 5000"));

