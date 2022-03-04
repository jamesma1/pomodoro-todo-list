const cookieController = {};


cookieController.setCookie = (req, res, next) => {
    res.cookie('username', res.locals.username);
    return next();
};

module.exports = cookieController;