import { Injectable } from '@angular/core';

import { ConfigOptionsModel } from '../models/config-options.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: ConfigOptionsModel;

  setConfigOptions(configOptions: ConfigOptionsModel): void {
    // тут желательно не устанавливать ссылку на объект,
    // а делат копирование указанных свойств.
    // не всегда удобно полностью заменять объект.
    this.configOptions = configOptions;
  }

  getConfigOptions(): ConfigOptionsModel {
    return this.configOptions;
  }
}
