var sass = require("node-sass");

module.exports = function processSass(data, filename) {
	var result;
	try {
		result = sass.renderSync({
			data: data,
			file: filename,
			includePaths: ["node_modules"]
		}).css;
	} catch (error) {
		console.log("error", error);
	}
	return result.toString("utf8");
};
