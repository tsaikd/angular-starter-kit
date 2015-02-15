app

.directive("version"
	, [       "Version"
	, function(Version) {
	return {
		templateUrl: "src/directive/version.html",
		link: function(scope) {
			scope.Version = Version;
		}
	};
}])

;
