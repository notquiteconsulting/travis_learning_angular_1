angular.module("minesweeper").directive("grid", function() {
    return {
        scope: {},
        restrict: "E",
        bindToController: true,
        controllerAs: "ctrl",
        template: `
            <div class="board">
                <div ng-repeat="row in ctrl.rows" ng-init="x = $index">
                    <div ng-repeat="cell in row" ng-init="y = $index">
                        <div class="tile"></div>
                    </div>
                </div>
            </div>
        `,
        controller: function($scope) {
            this.rows = [
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9],
                [0,1,2,3,4,5,6,7,8,9]
            ]
        }
    };
});
