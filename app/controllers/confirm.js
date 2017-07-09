/**
 * Created by leonidad on 5/4/17.
 */
angular.module('cognitoBlog.confirm', ['cognitoBlog.authService'])
    .controller('confirmController', function($scope, $location, authService) {

        $scope.confirmAccount = function(newuser, isValid) {
            console.log(newuser);
            if (isValid) {
                newuser.username = newuser.email.replace("@", "_").replace(".", "_");
                console.log("Confirmation code " + newuser.confirmCode);

                authService.confirm(newuser).then(function(){
                    $location.path('/');
                }, function(msg) {
                    $scope.errormessage = "An unexpected error has occurred. Please try again.";
                    $scope.$apply();
                    return;
                });

            } else {
                $scope.errormessage = "There are still invalid fields.";
                $scope.$apply();
            }
        };
    });