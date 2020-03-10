import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { AppSettingsModel } from './../models/app-settings.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(
    private localStorageService: LocalStorageService,
    private httpClient: HttpClient) { }

  public getAppSettings(): Observable<AppSettingsModel> {
    const localAppSettings = this.localStorageService.getItem('appSettings');

    if (localAppSettings) {
      return of(JSON.parse(localAppSettings));
    }

    return this.httpClient.get('../../../assets/app-settings.json').pipe(
      retry(2),
      map(response => this.handleAppSettingsResponse(response)),
      catchError(_ => {
        return of(new AppSettingsModel());
      })
    );
  }

  private handleAppSettingsResponse(response) {
    const appSettings = response as AppSettingsModel;

    this.localStorageService.setItem('appSettings', JSON.stringify(appSettings));

    return appSettings;
  }
}
