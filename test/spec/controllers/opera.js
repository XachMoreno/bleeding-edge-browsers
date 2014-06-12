'use strict';

describe('Controller: OperaCtrl', function () {

  // load the controller's module
  beforeEach(module('bleedingEdgeBrowsersApp'));

  var OperaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperaCtrl = $controller('OperaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
