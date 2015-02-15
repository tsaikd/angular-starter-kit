app

.factory("Version"
	, [       "$http"
	, function($http) {

	function Version() {
		// the version maybe modify by gulp task
		this.version = "0";

		if (this.version == "0") {
			// load version from package.json in dev mode
			$http.get("package.json").then(function(data) {
				if (data && data.data && data.data.version) {
					this.version = data.data.version + "-dev";
				}
			}.bind(this));
		}
	}

	Version.prototype.toString = function() {
		return this.version;
	};

	return new Version();
}])

;
