import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-weatherform',
  templateUrl: './weatherform.component.html',
  styleUrls: ['./weatherform.component.css']
})
export class WeatherformComponent implements OnInit {
  weatherForm = this.fb.group({
    airportCode: [''],
    maxCrosswind: [''],
    gustingConditions: [''],
    weatherCategories: this.fb.group({
      lifr: [''],
      ifr: [''],
      mvfr: [''],
      vfr: ['']
    }),
    states:['']
  });

  //Can be removed eventually, used to see how to access formControl data within template
  // which can be done with {{weatherForm.value["key"]}}
  airportCodeVar:string;


  //TODO: write parser to break out each airport and clean the output for the JSON file or for verifying airport is valid
  // example " KTPA" would remove the leading space 
  onSubmit() {
    this.airportCodeVar = this.weatherForm.value["airportCode"];
    console.log("submitted weatherform");
    console.log(JSON.stringify(this.weatherForm.value)); //JSON.stringify to send form inputs to backend
    console.log(`airportCode = ${this.weatherForm.value['airportCode']}`);
    console.log(`weatherCategories = ${this.weatherForm.value['weatherCategories']}`)

  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

}
