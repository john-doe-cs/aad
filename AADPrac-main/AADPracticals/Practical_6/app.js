var app = angular.module('recordsApp', []);


app.controller('RecordsController', function () {
    var vm = this;


    vm.records = [
        { name: 'Aman', age: 19 }
    ];


    vm.newRecord = {};


    vm.addRecord = function () {
        vm.records.push(angular.copy(vm.newRecord));
        vm.newRecord = {};
    };


    vm.removeRecord = function (index) {
        vm.records.splice(index, 1);
    };
});
