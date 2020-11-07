import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // create a log service
  log(message: string) {
    console.log((`${message}`))
  }

  constructor() { 
    console.log("hello from logger")
  }
}
