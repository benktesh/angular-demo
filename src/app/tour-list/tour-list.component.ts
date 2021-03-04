import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";

import { Tour } from "../tour";
import { Tours } from "../tours";

@Component({
  selector: "app-tour-list",
  templateUrl: "./tour-list.component.html",
  styleUrls: ["./tour-list.component.css"]
})
export class TourListComponent {
  pageTitle:String = "Availbale Tours"
  tours = Tours;
  filteredTours: Tour[] = [];
  isLinear = false;
  _filterTour:string = '';

  selectedTour?: Tour;
  videoLink?: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
  }

  onSelect(tour: Tour): void {
    this.selectedTour = tour;
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      tour.videoLink
    ) as string;
  }

  share() {
    window.alert("The tour has been shared!");
  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTours = this.listFilter ? this.performFilter(this.listFilter) : this.tours;
  }

  performFilter(filterBy: string): Tour[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tours.filter((product: Tour) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1 || product.description.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
