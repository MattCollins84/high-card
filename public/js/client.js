var app = angular.module('highCardClient', ['btford.socket-io']);

app.factory('socket', function (socketFactory) {
    return socketFactory();
});

app.controller('ClientCtrl', function($scope, socket) {

    $scope.connected = false;
    $scope.valid = true;
    $scope.name = "Matt";

    $scope.connect = function() {

        if (!$scope.name) {
            $scope.valid = false;
            return;
        }

        $scope.valid = true;

        console.log(socket);

        socket.emit('playerConnect', {
            name: $scope.name
        })
    }

});