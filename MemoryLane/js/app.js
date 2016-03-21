angular.module('app', ['ngMaterial']).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey');
});