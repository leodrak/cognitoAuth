/**
 * Created by leonidad on 5/1/17.
 */
angular.module('cognitoBlog.register', ['cognitoBlog.authService'])
    .controller('registerController', function($scope, $location, authService) {

    $scope.errormessage="";

    $scope.register = function(newuser, isValid) {
        console.log(newuser);

        if (isValid) {

            authService.signup(newuser).then(function() {

                $location.path('/confirm');
            }, function(msg) {
                $scope.errormessage = "An unexpected error has occurred. Please try again.";

                $scope.$apply();
                return;
            });

        } else {
            $scope.errormessage = "There are still invalid fields.";

            $scope.$apply();
        }
    }

});


