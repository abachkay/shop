import { Injectable } from '@angular/core';

import { ConfigOptionsModel } from '../models/config-options.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private configOptions: ConfigOptionsModel;

  setConfigOptions(configOptions: ConfigOptionsModel): void {
    this.configOptions = { ...configOptions };
  }

  getConfigOptions(): ConfigOptionsModel {
    return this.configOptions;
  }
}
