import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { Metar } from '../metar';

@Component({
  selector: 'app-weatherform',
  templateUrl: './weatherform.component.html',
  styleUrls: ['./weatherform.component.css']
})
export class WeatherformComponent implements OnInit {

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
