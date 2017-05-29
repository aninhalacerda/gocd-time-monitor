var methods = {};

methods.timeHistory = function(pipeline, callback) {
	callback({"last_scheduled" : "today"});
};

module.exports = methods;