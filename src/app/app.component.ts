import { LocalStorageService } from './core/services/local-storage.service';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService }
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false }) title: ElementRef;

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'Home Tasks';
  }
}
