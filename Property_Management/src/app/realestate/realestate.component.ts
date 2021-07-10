import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.scss']
})
export class RealestateComponent implements OnInit {

  proportion = 25;
  interval= 5000;
  totalSlides= 5;

  slides = [
    {'image': 'https://material.angular.io/assets/img/examples/shiba1.jpg'}, 
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {'image': 'https://material.angular.io/assets/img/examples/shiba1.jpg'}, 
    {'image': 'https://material.angular.io/assets/img/examples/shiba2.jpg'}, 
    {'image': 'https://material.angular.io/assets/img/examples/shiba1.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
