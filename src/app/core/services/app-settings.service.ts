import { Injectable } from '@angular/core';

import { AppSettingsModel } from './../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';
import AppSettings from '../../../assets/app-settings.json';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    private localStorageService: LocalStorageService) { }

  public getAppSettings(): AppSettingsModel {
    const localAppSettings = this.localStorageService.getItem('appSettings');

    if (localAppSettings) {
      return JSON.parse(localAppSettings);
    }

    const appSettings = AppSettings as unknown as AppSettingsModel;

    this.localStorageService.setItem('appSettings', JSON.stringify(appSettings));

    return appSettings;
  }
}
