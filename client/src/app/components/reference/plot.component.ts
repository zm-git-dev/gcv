// Angular + dependencies
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild }
  from "@angular/core";
import { GCV } from "../../../assets/js/gcv";

@Component({
  selector: "plot",
  styles: [],
  template: "<div #container></div>",
})
export class PlotComponent implements AfterViewInit, OnDestroy {

  @ViewChild("container") container: ElementRef;

  ngAfterViewInit() {
    //const viewer = new GCV.visualization.Micro(this.container.nativeElement);
    this.container.nativeElement.innerHTML = "plot viewer";
  }

  ngOnDestroy() {
    console.log('plot destroyed');
  }
}
