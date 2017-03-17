var app = angular.module('highCard', ['btford.socket-io']);

app.factory('socket', function (socketFactory) {
    return socketFactory();
});

app.controller('GameCtrl', function($scope, socket) {

    $scope.players = [
        { name: "Matt" },
        { name: "Dave" }
    ];

});

app.component('playerPanel', {
    controller: function() {

    },
    controllerAs: "playerPanelCtrl",
    templateUrl: "/templates/player-panel.html",
    bindings: {
        player: "="
    }
});