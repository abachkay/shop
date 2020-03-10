import { Component, OnInit, InjectionToken, Inject, Optional } from '@angular/core'

import { AppSettingsService } from './../../../core/services/app-settings.service';
import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { constants } from './../../../core/services/constant.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { ConfigOptionsModel } from 'src/app/core/models/config-options.model';
import { RandomStringsGeneratorService } from 'src/app/core/services/random-strings-generator.service';
import { randomStringGeneratorFactory } from 'src/app/core/services/random-strings-generator-factory';

const Constants = new InjectionToken<any[]>('Constants');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: Constants, useValue: constants },
    { provide: RandomStringsGeneratorService, useFactory: randomStringGeneratorFactory(5) }
  ]
})
export class AboutComponent implements OnInit {
  constructor(
    private rsg5: RandomStringsGeneratorService,
    private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(Constants) private constantsObject: any,
    private appSettingsService: AppSettingsService
  ) { }

  public test = this.appSettingsService.getAppSettings();

  ngOnInit() {
    const configOptions = new ConfigOptionsModel(1, 'login');
    this.configOptionsService.setConfigOptions(configOptions);
    console.log(`Config options have been set: ${JSON.stringify(configOptions)}`);

    const receivedConfigOptions = this.configOptionsService.getConfigOptions();
    console.log(`Config options have been received from ConfigOptionsService: ${JSON.stringify(receivedConfigOptions)}`);

    this.localStorageService.setItem('configOptions', JSON.stringify(receivedConfigOptions));
    console.log('Config options have been added to local storage.');

    const cachedConfigOptions = this.localStorageService.getItem('configOptions');
    console.log(`Config options have been returned from local storage: ${cachedConfigOptions}`);

    this.localStorageService.removeItem('configOptions');
    console.log('Config options have been removed from local storage.');

    console.log(`Constants: ${JSON.stringify(this.constantsObject)}`);

    console.log(`Randomly generated string of 5 characters: ${JSON.stringify(this.rsg5.generateString())}`);

    console.log(`App Version: ${this.appSettingsService.getAppSettings().version}`);
  }
}
