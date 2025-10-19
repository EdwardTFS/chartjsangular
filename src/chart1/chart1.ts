import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
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
  readonly doughnutType= 'doughnut';
  readonly doughnutData: ChartData<'doughnut'> = {
    datasets: [
      { data: [1,2,3]}
    ]
  };
  readonly doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right',
        labels: { usePointStyle: true }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const v = Number(ctx.parsed);
            const total = (ctx.dataset.data as number[]).reduce((a, b) => a + b, 0) || 1;
            const pct = Math.round((v / total) * 100);
            return `${ctx.label}: ${v}h (${pct}%)`;
          }
        }
      },
      // datalabels: {
      //   formatter: (value, context) => {
      //     const data = context.dataset.data as number[];
      //     const total = data.reduce((a, b) => a + b, 0) || 1;
      //     const pct = Math.round((Number(value) / total) * 100);
      //     return pct >= 3 ? `${pct}%` : '';
      //   },
      //   anchor: 'center',
      //   align: 'center',
      //   clamp: true,
      //   font: { weight: 'bold' }
      // }
    }
  };

}
