import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  proportion = 25;
  interval= 5000;
  totalSlides= 5;
  displayImage = "https://material.angular.io/assets/img/examples/shiba1.jpg";

  images = ['https://material.angular.io/assets/img/examples/shiba1.jpg', 
    'https://material.angular.io/assets/img/examples/shiba2.jpg'
  ];
  disableNextButton: boolean = false;
  disablePreviousButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeImage(value : string) {
    console.log('inside change image' + 'value=>' + value);
    console.log(this.displayImage);
    let index = this.images.indexOf(this.displayImage);
    console.log(index);
    
    if(value == 'next') {
      this.displayImage = this.images[index+1];
      if((this.images.indexOf(this.displayImage)+1) == this.images.length) {
        this.disableNextButton = true;
      }
      this.disablePreviousButton = false;
    } else if(value == 'previous') {
      this.displayImage = this.images[index-1];
      if((index-1)== 0) {
        this.disablePreviousButton = true;
      }
      this.disableNextButton = false;
    }
  }

}
