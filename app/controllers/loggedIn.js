/**
 * Created by leonidad on 5/4/17.
 */
angular.module('cognitoBlog.loggedIn', ['cognitoBlog.authService'])
    .controller('loggedInController', function($scope, $location, authService) {

        if (true) {
                authService.isAuthenticated().then(function(result) {
                    console.log(result);

                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";

                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";

            };


        $scope.status="";

        $scope.replaceDynamoDBItem = function(isValid, status) {

            if (isValid) {
                authService.updateItemDynamo(status).then(function(result) {
                    console.log(result);
                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";

                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";

            }
        };

        $scope.scanDynamoDBItems = function(isValid) {

            if (isValid) {

                authService.scanDynamoDB().then(function(result) {
                    console.log(result);

                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";

                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";

            }
        };

    });