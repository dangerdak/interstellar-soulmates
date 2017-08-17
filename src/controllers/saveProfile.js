const errors = require('../dictionary/errorMessages');
const updateProfile = require('../model/updateProfile');

module.exports = (req, res) => {
    //TODO: change hardcoded user_id (1) to user_id taken from cookie
    updateProfile(req.body, 1, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(errors[500]);
        } else {
            res.redirect('/edit-profile');
        }
    })
}