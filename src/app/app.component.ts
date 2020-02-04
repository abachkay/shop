import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', { static: false }) title: ElementRef;

  ngAfterViewInit() {
    this.title.nativeElement.innerHTML = 'Home Tasks';
  }
}
