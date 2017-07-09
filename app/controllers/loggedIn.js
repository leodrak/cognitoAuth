/**
 * Created by leonidad on 5/4/17.
 */
angular.module('cognitoBlog.loggedIn', ['cognitoBlog.authService'])
    .controller('loggedInController', function($scope, $location, authService) {

        $scope.createDynamoDBItem = function(isValid) {

            if (isValid) {
                //$ionicLoading.show();
                authService.isAuthenticated().then(function(result) {
                    console.log(result);
                    //console.log('access token + ' + result.getIdToken().getJwtToken());
                    //$location.path('/loggedIn');
                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";
                    //$ionicLoading.hide();
                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";
                //$ionicLoading.hide();
            }
        };

        $scope.replaceDynamoDBItem = function(isValid) {

            if (isValid) {
                //$ionicLoading.show();
                authService.updateItemDynamo().then(function(result) {
                    console.log(result);
                    //console.log('access token + ' + result.getIdToken().getJwtToken());
                    //$location.path('/loggedIn');
                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";
                    //$ionicLoading.hide();
                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";
                //$ionicLoading.hide();
            }
        };

        $scope.scanDynamoDBItems = function(isValid) {

            if (isValid) {
                //$ionicLoading.show();
                authService.scanDynamoDB().then(function(result) {
                    console.log(result);
                    //console.log('access token + ' + result.getIdToken().getJwtToken());
                    //$location.path('/loggedIn');
                }, function(msg) {
                    console.log(msg);
                    $scope.errormessage = "Unable to access DynamoDB";
                    //$ionicLoading.hide();
                    if ($scope.$$phase != '$digest') {
                        $scope.$apply();
                    }
                    return;
                });
            } else {
                $scope.errormessage = "Some error happened";
                //$ionicLoading.hide();
            }
        };

    });