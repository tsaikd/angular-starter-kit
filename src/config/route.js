app

.config([     "$stateProvider", "$urlRouterProvider"
	, function($stateProvider,   $urlRouterProvider) {

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state("index", {
			url: "/",
			templateUrl: "src/route/index.html",
			controller: "indexCtrl"
		})
	;

}])

;
