var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    patientId: Number,
    doctorId: Number,
    subject: String,
    date: Date,
    time: Date,
    notes: String,
});

mongoose.model('Appointment', AppointmentSchema);