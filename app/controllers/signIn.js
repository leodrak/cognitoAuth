/**
 * Created by leonidad on 5/1/17.
 */

angular.module('cognitoBlog.login', ['cognitoBlog.authService'])
    .controller('signInController', function($scope, $location, authService) {

    $scope.changeView = function(view){
        $location.path(view); // path not hash
    };

    $scope.login = function(user, isValid) {

        if (isValid) {
            authService.signin(user).then(function(result) {
                console.log('Id Token: ' + result.getIdToken().getJwtToken());
                $location.path('/loggedIn');
            }, function(msg) {
                console.log(msg);
                if ($scope.$$phase != '$digest') {
                    $scope.$apply();
                }
                return;
            });
        } else {
            console.log("Probably you have provided invalid login fields");

        }
    };


});







