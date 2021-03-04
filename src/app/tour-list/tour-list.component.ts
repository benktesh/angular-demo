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
  tours = Tours;
  isLinear = false;

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
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
