import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
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
    
    this.mainFormGroup = this._formBuilder.group({
      formCount: 0,
      stepData: this._formBuilder.array([
        this._formBuilder.group({
          name: ["Benktesh", Validators.required],
          detail: ["Mugatu", Validators.required],
          title: "Benktesh"

        }),
        this._formBuilder.group({
          name: ["Bang", Validators.required],
          detail: ["Chang", Validators.required],
        title: "Sharma"

        })
      ])
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes['tour'].currentValue);

    console.log("changing tour");
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.tour ? this.tour.videoLink : ""
    );

  
  }

}
