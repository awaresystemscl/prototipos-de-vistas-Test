'use strict';

describe('Controller: ProyectosVerproyectoCtrl', function () {

  // load the controller's module
  beforeEach(module('workshopApp'));

  var ProyectosVerproyectoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProyectosVerproyectoCtrl = $controller('ProyectosVerproyectoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProyectosVerproyectoCtrl.awesomeThings.length).toBe(3);
  });
});
