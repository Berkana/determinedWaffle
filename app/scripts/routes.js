angular.module('thumbsCheckApp')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl'
      })
      .when('/student', {
        templateUrl: 'views/student.html',
        controller: 'StudentCtrl'
      })
      .when('/instructor', {
        templateUrl: 'views/instructor.html',
        controller: 'InstructorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
