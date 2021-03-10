import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Tour } from "../tour";

import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-tour-detail",
  templateUrl: "./tour-detail.component.html",
  styleUrls: ["./tour-detail.component.css"]
})
export class TourDetailComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder
  ) {}

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  mainFormGroup: FormGroup; //main group for steps

  stepData: Tour[];

  currentStep = 0;

  @Input() tour: Tour;

  
  videoLink?: SafeUrl;
  childrenLinks?: SafeUrl[];

  ngOnInit() {
    
  
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changing tour");
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.tour ? this.tour.videoLink : ""
    );

  }

  onRatingClicked(message: string): void{
    console.log(`${this.tour.id} ${this.tour.name} : ${message}`)  ;
    //TODO call services
  }

}
