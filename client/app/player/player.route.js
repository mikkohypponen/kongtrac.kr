(function() {
    'use strict';

    angular.module('kongtrac.player').config(playerConfiguration);

    /* @ngInject */
    function playerConfiguration($stateProvider) {
        $stateProvider.state('player', {
            url: '/player/:playerName',
            templateUrl: 'app/player/player.htm',
            controller: 'PlayerController as player'
        });
    }
})();
