var patients = require('../controllers/patients.server.controller');

module.exports = function(app) {
    app.route('/patients').post(patients.create);
};