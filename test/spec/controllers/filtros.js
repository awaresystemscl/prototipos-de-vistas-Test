'use strict';

describe('Controller: FiltrosCtrl', function () {

  // load the controller's module
  beforeEach(module('workshopApp'));

  var FiltrosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FiltrosCtrl = $controller('FiltrosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FiltrosCtrl.awesomeThings.length).toBe(3);
  });
});
