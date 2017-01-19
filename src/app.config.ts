import { LoggerProvider } from './logger/logger.provider';

appConfig.$inject = ['loggerProvider'];
export function appConfig(loggerProvider: LoggerProvider) {
  loggerProvider.configure({
    successTheme: 'green-theme',
    errorTheme: 'red-theme'
  });
}