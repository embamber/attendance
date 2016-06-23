import { Injectable, provide } from '@angular/core';

@Injectable()
export class ConsoleLog {
  public log(logMsg:string) {
    console.log(logMsg); 
  }
}

export var LOGGING_PROVIDERS = [
	provide(ConsoleLog, {useClass:ConsoleLog}),
];
