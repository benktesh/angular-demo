import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Tour } from "../tour";

@Component({
  selector: "app-tour-step",
  templateUrl: "./tour-step.component.html",
  styleUrls: ["./tour-step.component.css"]
})
export class TourStepComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() step: Tour;
  videoLink?: SafeUrl;

  ngOnInit() {
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(

      this.step.videoLink
    );
  }
}
