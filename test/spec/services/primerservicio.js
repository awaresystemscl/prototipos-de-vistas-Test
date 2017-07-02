'use strict';

describe('Service: primerServicio', function () {

  // load the service's module
  beforeEach(module('workshopApp'));

  // instantiate service
  var primerServicio;
  beforeEach(inject(function (_primerServicio_) {
    primerServicio = _primerServicio_;
  }));

  it('should do something', function () {
    expect(!!primerServicio).toBe(true);
  });

});
