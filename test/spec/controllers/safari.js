'use strict';

describe('Controller: SafariCtrl', function () {

  // load the controller's module
  beforeEach(module('bleedingEdgeBrowsersApp'));

  var SafariCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SafariCtrl = $controller('SafariCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
