/** @format */

const fs = require('fs');
// deleteFile
const deleteFile = (filePath) => {
	fs.unlink(filePath, (err) => {
		if (err) {
			throw err;
		}
	});
};
exports.deleteFile = deleteFile;
