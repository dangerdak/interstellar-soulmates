const getProfileDb = require('../model/getProfile');
const errors = require('../dictionary/errorMessages');

module.exports = (req, res) => {
    getProfileDb(req.params.name, (err, singleProfile) => {
        if (err) {
            res.status(500).send(errors[500]);
        } else if (singleProfile == undefined) {
            res.status(404).send(errors[404]);
        } else {
            res.render('profile', {singleProfile});
        }
    })

}