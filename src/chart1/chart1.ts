import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart1',
  imports: [BaseChartDirective],
  templateUrl: './chart1.html',
  styleUrl: './chart1.scss'
})
export class Chart1 {
  readonly barChartData = {
    datasets: [{
      data: [{x: 'Sales', y: 20}, {x: 'Revenue', y: 10}]
    }]
  };
  readonly barChartOptions = {};
  readonly barChartType = 'bar';

}
