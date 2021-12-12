/** @format */

module.exports = (req, res, next) => {
	console.log('add auth : ', req.session.isLoggedIn);
	// isLoggedIn
	if (!req.session.isLoggedIn) {
		return res.redirect('/login');
	}
	next();
};
