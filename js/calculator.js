angular.module("Calculator", []).controller("CalculatorController",
    function CalculatorController($scope) {
        $scope.displayValue = '';
        $scope.memory = null;
        $scope.result = 0;
        $scope.operation = null;

        $scope.addNumber = function(newNumber) {
            if ($scope.displayValue.length < 18) {
                $scope.displayValue += String(newNumber);
            }
        }

        $scope.saveInMemory = function() {
            if ($scope.memory == null) {
                $scope.memory = parseFloat($scope.displayValue);
            }
        };
        $scope.onClickClear = function() {
            $scope.operation = null;
            $scope.memory = null;
            $scope.displayValue = '';
            $scope.result = 0;
        };
        $scope.onClickSum = function() {
            $scope.saveInMemory();
            $scope.operation = "+";
            $scope.displayValue = '';
        };
        $scope.onClickSubtract = function() {
            $scope.saveInMemory();
            $scope.operation = "-";
            $scope.displayValue = '';
        };
        $scope.onClickMultiply = function() {
            $scope.saveInMemory();
            $scope.operation = "*";
            $scope.displayValue = '';
        };
        $scope.onClickDivide = function() {
            $scope.saveInMemory();
            $scope.operation = "/";
            $scope.displayValue = '';
        };
        $scope.onClickCalculate = function() {
            if ($scope.operation == "+"){
                $scope.result = parseFloat($scope.memory) + parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "-"){
                $scope.result = parseFloat($scope.memory) - parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "*"){
                $scope.result = parseFloat($scope.memory) * parseFloat($scope.displayValue);
            }
            else if ($scope.operation == "/"){
                $scope.result = parseFloat($scope.memory) / parseFloat($scope.displayValue);
            }

            $scope.operation = null;
            if ($scope.result != 0) {
                $scope.memory = $scope.result;
            }
            if ($scope.result != 0) {
                $scope.displayValue = $scope.result;
            }
        };
    }
);
