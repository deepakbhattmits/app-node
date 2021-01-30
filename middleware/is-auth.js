/** @format */

module.exports = (req, res, next) => {
	//isLoggedIn
	if (!req.session.isLoggedIn) {
		return res.redirect('/login');
	}
	next();
};
