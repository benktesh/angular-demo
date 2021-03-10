import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }
  
  
  @Input()
  rating: number; 
  starWidth: number;

  @Output()
  ratingClicked: EventEmitter<String> = new EventEmitter<String>(); 

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75/5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} clicked`);
     
  }

}
