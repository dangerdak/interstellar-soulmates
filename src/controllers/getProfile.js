const getProfileDb = require('../model/getProfile');
const errors = require('../dictionary/errorMessages');

module.exports = (req, res) => {
    console.log('in getProfile cont', req.params.user_id)
    getProfileDb(req.params.user_id, (err, profile) => {
        if (err) {
            res.status(500).send(errors[500]);
        } else if (profile == undefined) {
            res.status(404).send(errors[404]);
        } else {
            console.log(profile)
            res.render('profile', {pageTitle: 'Profile', profile});
        }
    })

}