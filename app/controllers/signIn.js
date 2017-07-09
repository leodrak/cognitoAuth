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
            //$ionicLoading.show();
            authService.signin(user).then(function(result) {
                console.log('Id Token : ' + result.getIdToken().getJwtToken());
                $location.path('/loggedIn');
            }, function(msg) {
                console.log(msg);
                $scope.errormessage = "Unable to sign in user. Please check your username and password.";
                //$ionicLoading.hide();
                if ($scope.$$phase != '$digest') {
                    $scope.$apply();
                }
                return;
            });
        } else {
            $scope.errormessage = "There are still invalid fields.";
            //$ionicLoading.hide();
        }
    };


});







