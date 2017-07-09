/**
 * Created by leonidad on 5/1/17.
 */

angular.module('cognitoBlog', ['ngRoute','cognitoBlog.authService','cognitoBlog.login','cognitoBlog.register', 'cognitoBlog.confirm', 'cognitoBlog.loggedIn'])

.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/views/signIn.html",
            controller:"signInController"
        })
        .when("/register", {
            templateUrl : "app/views/register.html",
            controller:"registerController"
        })
        .when("/confirm", {
            templateUrl : "app/views/confirm.html",
            controller:"confirmController"
        })
        .when("/loggedIn", {
            templateUrl : "app/views/loggedIn.html",
            controller:"loggedInController"
    })
});