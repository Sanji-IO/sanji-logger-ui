const $inject = ['$log', 'toastr'];
class LoggerService {
  constructor(...injects) {
    LoggerService.$inject.forEach((item, index) => this[item] = injects[index]);
  }

  error(message, data, title) {
    this.toastr.error(message, title);
    this.$log.error('Error: ' + message, data);
  }

  info(message, data, title) {
    this.toastr.info(message, title);
    this.$log.info('Info: ' + message, data);
  }

  success(message, data, title) {
    this.toastr.success(message, title);
    this.$log.info('Success: ' + message, data);
  }

  warning(message, data, title) {
    this.toastr.warning(message, title);
    this.$log.warn('Warning: ' + message, data);
  }

  log(message) {
    this.$log.log(message);
  }
}

LoggerService.$inject = $inject;

export default LoggerService;
