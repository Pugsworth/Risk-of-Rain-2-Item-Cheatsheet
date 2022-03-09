import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
    private prefix: string = "";

  constructor() { }

    setPrefix(_prefix: string)
    {
        this.prefix = _prefix;
    }

  log(msg?: string, ...other: any[]) { console.log(this.prefix, msg, ...other); }
  error(msg?: string, ...other: any[]) { console.error(this.prefix, msg, ...other); }
  warn(msg?: string, ...other: any[]) { console.warn(this.prefix, msg, ...other); }
}
