const User = require('../models/userModel.js');

userController = {};

userController.createUser = (req, res, next) => {
    const { username, password } = req.body;
    User.create({username: username, password: password}, (err, user) => {
        if (err) {
            return next({
                log: `Error in userController.createUser: ERROR: ${err}.`,
                status: 400,
                message: 'This username already exists.',
            })
        } else {
            // console.log(user);
            res.locals.username = user.username;
            return next();
        }
    })
};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({username: username, password: password}, (err, user) => {
        if (err) {
            return next({
                log: `Error in userController.verifyUser: ERROR: ${err}.`,
                status: 400,
                message: 'Unknown error in verifying login information.',
            });
        } else {
            if (user === null) {
                return res.status(400).send('Incorrect username or password, please try again.');
            } else {
                res.locals.username = user.username;
                return next();
            }
        }
    })
};


module.exports = userController;