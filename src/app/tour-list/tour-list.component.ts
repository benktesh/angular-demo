import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import {
  DomSanitizer,
  SafeUrl
} from "@angular/platform-browser";
import { Observable } from "rxjs";

import { ITour } from "../tour";
import {TourService} from "../tours/tour.service";

@Component({
  selector: "app-tour-list",
  templateUrl: "./tour-list.component.html",
  styleUrls: ["./tour-list.component.css"]
})
export class TourListComponent {

  pageTitle: String = "Availbale Tours";
  
  filteredTours: ITour[] = []; //filtered tours
  tours: ITour[] = []; //all tours

  isLinear = false;
  _filterTour: string = "";
  errorMessage: any = "";
  
  selectedTour?: ITour;
  videoLink?: SafeUrl;
  clear:boolean = true; //in the beginning no detained view

  constructor(private sanitizer: DomSanitizer, private tourService: TourService) {}

  ngOnInit() {
    this.getTours(); 
  }

  private getTours() {
    this.tourService.getTours().subscribe({
      next: tours => {
        this.tours = tours,
        this.filteredTours = this.tours;
      },
      error: err => this.errorMessage = err
    });

    return this.filteredTours;

  }

  onSelect(tour: ITour): void { 
    console.log("Selected a tour")
    this.clear = false; 
    this.selectedTour = tour;
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      tour.videoLink
    ) as string;
  }

  share() {
    window.alert("The tour has been shared!");
  }

  _listFilter = "";
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTours = this.performFilter(this._listFilter);
    
  }


  performFilter(filterBy: string): ITour[] {
    console.log("Filtering for: " + filterBy);
    if(filterBy == null || filterBy == "*" || filterBy.length == 0 ){
      return  this.getTours(); ;  
    }
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredTours = this.tours.filter(
      (tour: ITour) =>
        tour.name.toLocaleLowerCase().includes(filterBy) || 
        tour.description.toLocaleLowerCase().includes(filterBy) 
    );

    return this.filteredTours; 
  }

  getTourImage(tour: ITour) {
    if(tour.imageSource == null){
      console.log("Empty Tour.");
      return null;
    } else {
      return tour.imageSource[Math.floor(Math.random() * tour.imageSource.length)];
    }

  }

  ClearSelected(){
    this.clear=true; 
  }

}

