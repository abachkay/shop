import { Component, OnInit, InjectionToken, Inject, Optional } from '@angular/core';

import { ConfigOptionsService } from './../../../core/services/config-options.service';
import { constants } from './../../../core/services/constant.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { randomStringGeneratorFactory } from 'src/app/core/services/generator.service';
import { ConfigOptionsModel } from 'src/app/core/models/config-options.model';

const Constants = new InjectionToken<any[]>('Constants');
const Rsg5 = new InjectionToken<any[]>('Rsg5');
const Rsg7 = new InjectionToken<any[]>('Rsg7');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: Constants, useValue: constants },
    { provide: Rsg5, useFactory: randomStringGeneratorFactory(5) },
    { provide: Rsg7, useFactory: randomStringGeneratorFactory(7) },
  ]
})
export class AboutComponent implements OnInit {


  constructor(
    private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Inject(Constants) private constantsObject: any,
    @Inject(Rsg5) private rsg5: any,
    @Inject(Rsg7) private rsg7: any,
  ) { }

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

    console.log(`Randomly generated string of 5 characters: ${JSON.stringify(this.rsg5)}`);
    console.log(`Randomly generated string of 7 characters: ${JSON.stringify(this.rsg7)}`);
  }
}
