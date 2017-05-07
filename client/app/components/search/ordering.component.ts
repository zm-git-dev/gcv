// Angular
import { AfterViewInit,
         Component,
         ElementRef,
         OnDestroy,
         OnInit,
         ViewChild } from '@angular/core';

// App services
import { FilterService }         from '../../services/filter.service';
import { ORDER_ALGORITHMS }      from '../../constants/order-algorithms';
import { UrlQueryParamsService } from '../../services/url-query-params.service';

declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-ordering',
  template: `
    <form id="order-form" class="navbar-form navbar-left" #orderForm="ngForm">
      <div class="form-group">
        <select class="form-control" id="order"
            (change)="update()"
            [(ngModel)]="model.order" name="order">
          <option *ngFor="let alg of algorithms" [value]="alg.id">{{alg.name}}</option>
        </select>
      </div>
    </form>
    <ul class="nav navbar-nav">
      <li><a #help class="color" data-toggle="tooltip" data-placement="top" title="How micro-synteny tracks should be ordered"><span class="glyphicon glyphicon-question-sign"></span></a></li>
    </ul>
  `,
  styles: [`
    form {
      padding-right: 0;
    }
    form button {
      margin-right: 0;
    }
    .color {
      color: #337ab7 !important;
    }
  `]
})

export class OrderingComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('help') el: ElementRef;

  algorithms = ORDER_ALGORITHMS;
  private _ids = this.algorithms.map(a => a.id);
  model: any = {order: this.algorithms[0].id};

  private _sub: any;

  constructor(private _filterService: FilterService,
              private _url: UrlQueryParamsService) { }

  ngAfterViewInit(): void {
    $(this.el.nativeElement).tooltip();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  ngOnInit(): void {
    this._sub = this._url.params.subscribe(params => {
      if (params['order'])
        this.model.order = params['order'];
    });
    this.update();
  }

  update(): void {
    var idx = this._ids.indexOf(this.model.order);
    if (idx != -1) {
      this._filterService.setOrder(this.model.order);
      this._url.updateParams(this.model);
    }
  }
}
