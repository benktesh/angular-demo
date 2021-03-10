import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import {
  DomSanitizer,
  SafeUrl
} from "@angular/platform-browser";
import { Observable } from "rxjs";

import { ITour } from "../tour";
import { Tours } from "../tours";

@Component({
  selector: "app-tour-list",
  templateUrl: "./tour-list.component.html",
  styleUrls: ["./tour-list.component.css"]
})
export class TourListComponent {
  pageTitle: String = "Availbale Tours";
  tours = Tours;
  filteredTours: ITour[] = [];
  isLinear = false;
  _filterTour: string = "";
  
  selectedTour?: ITour;
  videoLink?: SafeUrl;
  clear:boolean = true; //in the beginning no detained view

  constructor(
    private sanitizer: DomSanitizer,
  ) {

  }

  ngOnInit() {

    this.filteredTours = this.tours;
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
    this.filteredTours = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.tours;
  }

  performFilter(filterBy: string): ITour[] {
    if(filterBy == null || filterBy == "*" || filterBy.length == 0 ){
      return this.tours;
    }
    filterBy = filterBy.toLocaleLowerCase();
    return this.tours.filter(
      (tour: ITour) =>
        tour.name.toLocaleLowerCase().includes(filterBy) || 
        tour.description.toLocaleLowerCase().includes(filterBy) 
    );
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

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
