import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Tour } from "../tour";

import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { TourService } from "../tours/tour.service";

@Component({
  selector: "app-tour-detail",
  templateUrl: "./tour-detail.component.html",
  styleUrls: ["./tour-detail.component.css"]
})
export class TourDetailComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private _formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private _tourService: TourService
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
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this._tourService.getTour(id.toString()).subscribe({
      next: tours => {
        console.log(tours);
        this.tour = tours;
      }
    });
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
