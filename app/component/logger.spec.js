import loggerModule from './index';

describe('Service: logger', function() {
  let $log;
  let toastr;
  let logger;
  let component;
  let string;
  let log, warn, info, success, error;

  beforeEach(angular.mock.module(loggerModule));

  beforeEach(angular.mock.inject(function(_$log_, _logger_, _toastr_) {
    $log = _$log_;
    toastr = _toastr_;
    logger = _logger_;
  }));

  beforeEach(function() {
    string = '';
    log = function() {
      string+= 'log;';
    };
    warn = function() {
      string+= 'warn;';
    };
    info = function() {
      string+= 'info;';
    };
    success = function() {
      string+= 'success;';
    };
    error = function() {
      string+= 'error;';
    };
    $log.log = log;
    toastr.warning = warn;
    toastr.info = info;
    toastr.success = success;
    toastr.error = error;
  });

  it('should provide error api function', function() {
    expect(logger.error).to.be.a('function');
  });

  it('should provide info api function', function() {
    expect(logger.info).to.be.a('function');
  });

  it('should provide success api function', function() {
    expect(logger.success).to.be.a('function');
  });

  it('should provide warn api function', function() {
    expect(logger.warn).to.be.a('function');
  });

  it('should provide log api function', function() {
    expect(logger.log).to.be.a('function');
  });

  it('should use $log if present', function() {
    logger.log();
    logger.warn();
    logger.info();
    logger.success();
    logger.error();
    expect(string).to.equal('log;warn;info;success;error;');
  });
});
