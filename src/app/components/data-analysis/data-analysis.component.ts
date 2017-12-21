import { Component, OnInit } from '@angular/core';
import { DataAnalysisService } from './data-analysis.service';

@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.scss'],
  providers: [ DataAnalysisService ]
})
export class DataAnalysisComponent implements OnInit {

  public curCar: any;
  public bar1: any;
  public pie1: any;
  public pie2: any;
  public pie3: any;
  public pie4: any;
  public pie5: any;
  public echartsIntance: any;
  public selectOption1: any;
  public selectOption2: any;
  public selectOption3: any;
  public detectResults: any;

  constructor(private dataAnalysisService: DataAnalysisService) { }

  ngOnInit() {
    this.selectOption1 = [
      { value: '奥迪Q5', label: '奥迪Q5' },
      { value: 'A6L', label: 'A6L' },
    ];
    this.selectOption2 = [
      { value: '2017', label: '2017年' },
      { value: '2016', label: '2016年' },
    ]; 
    this.selectOption3 = [
      { value: '2017', label: '2017年' },
      { value: '2016', label: '2016年' },
    ]; 

    this.curCar = this.selectOption1[0].value;
    //柱形图
    this.bar1 = {
      title : {
        text: '检测次数排名',
        textStyle: {
          color: '#7f7f7f',
          fontSize: 15,
        },
      },
      tooltip : {
          trigger: 'axis'
      },
      grid: {
        left: 30,
      },
      legend: {
        data:['该车型检测次数','该车型数量'],
        right: 0,
        width: 40,
        top: 50,
      },
      calculable : true,
      xAxis : [
          {
            type : 'category',
            data : ['Q5','A6L','A3两厢','A3三厢','A4L','XXX','XXX','XXX']
          }
      ],
      yAxis : [
          {
            type : 'value',
            splitNumber: 2,
          }
      ],
      series : [
          {
            name:'该车型检测次数',
            type:'bar',
            data:[173, 125, 105, 95, 71, 60, 54, 20],
            barWidth: 20,
            barGap: 0,
            itemStyle:{
              normal: {
                color: '#1792e5',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#000'
              }
            }
          },
          {
            name:'该车型数量',
            type:'bar',
            data:[126, 89, 77, 42, 69, 61, 42, 14],
            barWidth: 20,
            barGap: 0,
            itemStyle:{
              normal: {
                color: '#f58d4d',
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#000'
              }
            }
          }
      ]
    }
    //饼图1
    this.pie1 = {
      title : {
        text: '发动机',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        left: '20%',
        top: '75%'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: '60%',
          top: '15%',
          data: ['100-90','89-60','59-20','19-0']
      },
      series : [
        { 
          name: '获得该分数的次数',
          type: 'pie',
          radius : '55%',
          center: ['30%', '40%'],
          data:[
            {value:45, name:'100-90',label:{normal:{position: 'inside',formatter:'{d}%'}},itemStyle:{normal:{color:'#1792e5'}}},
            {value:30, name:'89-60',label:{normal:{position: 'inside',formatter:'{d}%'}},itemStyle:{normal:{color:'#f58d4d'}}},
            {value:20, name:'59-20',label:{normal:{position: 'inside',formatter:'{d}%'}},itemStyle:{normal:{color:'#ffc627'}}},
            {value:5, name:'19-0',label:{normal:{position: 'inside',formatter:'{d}%'}},itemStyle:{normal:{color:'#f1594f'}}},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    }
    //饼图2
    this.pie2 = {
      title : {
        text: '电瓶',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        left: '20%',
        top: '75%'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: '60%',
          top: '15%',
          data: ['100-90','89-60','59-20','19-0']
      },
      series : [
        { 
          name: '获得该分数的次数',
          type: 'pie',
          radius : '55%',
          center: ['30%', '40%'],
          data:[
            {value:45, name:'100-90',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#1792e5'}}},
            {value:30, name:'89-60',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f58d4d'}}},
            {value:20, name:'59-20',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#ffc627'}}},
            {value:5, name:'19-0',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f1594f'}}},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    }
    //饼图3
    this.pie3 = {
      title : {
        text: '冷却系统',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        left: '20%',
        top: '75%'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: '60%',
          top: '15%',
          data: ['100-90','89-60','59-20','19-0'],
      },
      series : [
        { 
          name: '获得该分数的次数',
          type: 'pie',
          radius : '55%',
          center: ['30%', '40%'],
          data:[
            {value:45, name:'100-90',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#1792e5'}}},
            {value:30, name:'89-60',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f58d4d'}}},
            {value:20, name:'59-20',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#ffc627'}}},
            {value:5, name:'19-0',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f1594f'}}},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    }
    //饼图4
    this.pie4 = {
      title : {
        text: '积碳',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        left: '20%',
        top: '75%'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: '60%',
          top: '15%',
          data: ['100-90','89-60','59-20','19-0']
      },
      series : [
        { 
          name: '获得该分数的次数',
          type: 'pie',
          radius : '55%',
          center: ['30%', '40%'],
          data:[
            {value:45, name:'100-90',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#1792e5'}}},
            {value:30, name:'89-60',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f58d4d'}}},
            {value:20, name:'59-20',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#ffc627'}}},
            {value:5, name:'19-0',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f1594f'}}},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    }
    //饼图5
    this.pie5 = {
      title : {
        text: '机油',
        textStyle: {
          color: '#000',
          fontSize: 12,
        },
        left: '20%',
        top: '75%'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: '60%',
          top: '15%',
          data: ['100-90','89-60','59-20','19-0']
      },
      series : [
        { 
          name: '获得该分数的次数',
          type: 'pie',
          radius : '55%',
          center: ['30%', '40%'],
          data:[
            {value:45, name:'100-90',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#1792e5'}}},
            {value:30, name:'89-60',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f58d4d'}}},
            {value:20, name:'59-20',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#ffc627'}}},
            {value:5, name:'19-0',label:{normal:{position: 'inside',formatter:function(d){return d.percent + '%';}}},itemStyle:{normal:{color:'#f1594f'}}},
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }
      ]
    }

    //检测结果
    this.detectResults = [
      {
        type: '奥迪Q5',
        time: '9月1号 11:39 am',
        license: '沪X XXX'
      },
      {
        type: 'A4L',
        time: '9月1号 11:39 am',
        license: '沪X XXX'
      }
    ]
  }

  onChartInit(ec) {
    this.echartsIntance = ec;
  }                               
  
  ngAfterViewInit(){
    this.resizeChart();
  }

  resizeChart() {
    if (this.echartsIntance) {
      // $(this.echartsIntance._dom).height($(window).height()*0.3);
      this.echartsIntance.resize();
    }
  }
}
