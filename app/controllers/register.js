/**
 * Created by leonidad on 5/1/17.
 */
angular.module('cognitoBlog.register', ['cognitoBlog.authService'])
    .controller('registerController', function($scope, $location, authService) {

    $scope.errormessage="";

    $scope.register = function(newuser, isValid) {
        console.log(newuser);

        if (isValid) {
            //$ionicLoading.show();
            authService.signup(newuser).then(function() {
               // $ionicLoading.hide();
                $location.path('/confirm');
            }, function(msg) {
                $scope.errormessage = "An unexpected error has occurred. Please try again.";
                //$ionicLoading.hide();
                $scope.$apply();
                return;
            });

        } else {
            $scope.errormessage = "There are still invalid fields.";
            //$ionicLoading.hide();
            $scope.$apply();
        }
    }

});


