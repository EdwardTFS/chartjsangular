import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart2',
  imports: [BaseChartDirective],
  templateUrl: './chart2.html',
  styleUrl: './chart2.scss'
})
export class Chart2 {
  readonly barChartData = {
    datasets: [{
      data: [{x: 'Sales', y: 20}, {x: 'Revenue', y: 10}]
    }]
  };
  readonly barChartOptions = {};
  readonly barChartType = 'bar';
}
