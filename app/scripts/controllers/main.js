'use strict';

/**
 * @ngdoc function
 * @name homieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the homieApp
 */
angular.module('homieApp')
    .controller('MainCtrl', function(MqttClient) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        function successCallback() {
            console.log('here!');
            var message;
            MqttClient.subscribe('/World');
            message = new Paho.MQTT.Message('Hello');
            message.destinationName = '/World';
            MqttClient.send(message);
        }

        var ip = '192.168.0.109';
        var port = '9001';
        var id = 'angular-client';

        MqttClient.init(ip, port, id);
        MqttClient.connect({ onSuccess: successCallback });

    });
