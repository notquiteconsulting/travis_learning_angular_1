angular.module("minesweeper").directive("minesweeper", function() {
    return {
        scope: {},
        restrict: "E",
        template: `
            <grid></grid>
        `,
        bindToController: true,
        controllerAs: 'ctrl',
        controller: function() {}
    };
});
