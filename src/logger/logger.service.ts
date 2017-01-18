export class LoggerService {
  constructor(
    private $log: ng.ILogService,
    private $mdToast: ng.material.IToastService
  ) { }

  error(message: string, data?: any) {
    this.show('error', message);
    this.$log.error(`Error: ${message}`, data);
  }

  success(message: string, data?: any) {
    this.show('success', message);
    this.$log.info(`Success: ${message}`, data);
  }

  warn(message: string, data?: any) {
    this.show('warn', message);
    this.$log.warn(`Warning: ${message}`, data);
  }

  info(message: string, data?: any) {
    this.show('info', message);
    this.$log.info(`Info: ${message}`, data);
  }

  log(message: string, data?: any) {
    this.$log.log(`Log: ${message}`, data);
  }

  show(type: string, message: string) {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(message)
        .position('bottom right')
        .theme(`${type}-toast`)
    );
  }
}