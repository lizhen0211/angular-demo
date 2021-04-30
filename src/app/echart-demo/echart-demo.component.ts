import {Component, OnInit} from '@angular/core';
import TimeUtil from '../../util/time-util';

@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.less']
})
export class EchartDemoComponent implements OnInit {
  options: any;

  constructor() {
  }

  ngOnInit(): void {
    // this.setDefaultSeries();
    const dataItems: Array<DataItem> = new Array<DataItem>();
    const dataItemLen: number = 7 * 24 * 6;
    const date1 = new Date();
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    console.log(date1.getHours());
    console.log(date1.getMinutes());
    console.log(date1.getSeconds());
    // 今日 00:00:00 点
    const todayTimestamp = Math.floor(date1.getTime() / 1000);
    console.log(todayTimestamp);
    const sevenDaysAgoTimestamp = todayTimestamp - 7 * 24 * 60 * 60;
    console.log(sevenDaysAgoTimestamp);
    // 单位秒
    const timeInterval = todayTimestamp - sevenDaysAgoTimestamp;
    // 每小时有几个十分钟
    const tenMinCountsInOneHour = 60 / 10;
    // 这时间里总共有多少个小时 时间(秒)/60(秒)/60(小时)
    const totalHours = timeInterval / 60 / 60;
    console.log(totalHours);
    const xAxisInterval = totalHours * tenMinCountsInOneHour;
    // const xAxisInterval = timeInterval / (24 * 60 / 10);
    console.log(xAxisInterval);

    for (let i = 0; i < xAxisInterval; i++) {
      const dataItem = new DataItem();
      if ((i > 100 && i < 110)) {
        dataItem.x = String(i);
        dataItem.y = null;
      } else if ((i > 200 && i < 210)) {
        dataItem.x = String(i);
        dataItem.y = null;
      } else {
        // 七天前 + 第几个*10分钟*60秒
        dataItem.x = String(sevenDaysAgoTimestamp + i * 10 * 60);
        dataItem.y = String(i);
      }

      dataItems.push(dataItem);
    }

    console.log(dataItems.length);

    this.options = {
      tooltip: {
        show: true,
        trigger: 'axis',
        formatter: 'x:{b0},y:{c0}'
      },
      xAxis: {
        type: 'category',
        data: dataItems.map(item => {
          return item.x;
        }),
        axisLabel: {
          interval: 144,
          formatter: (value, index) => {
            console.log(value);
            return TimeUtil.getDateYYYYMMDD(Number(value * 1000));
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: dataItems.map(item => {
          return item.y;
        }),
        // connectNulls: false,
        type: 'line'
      }]
    };
  }

  private setDefaultSeries(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }
}

class DataItem {
  public x: string;
  public y: string;
}
