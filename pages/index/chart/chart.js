import theme from '../../component/ec-canvas/theme';
import * as echarts from '../../component/ec-canvas/echarts';


let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, 'customed', {
    width: 350,
    height: 200,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: '当日血压上限',
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      },
      {
        name: '当日血压下限',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
    ],
    legend: {
      bottom: "0",
      left: "center",
      data: ['当日血压上限', '当日血压下限', '收缩压下限', '收缩压上限']
    },
    grid: {
      x: 32,
      y: 16,
      x2: 0,
      y2: 48,
      borderWidth: 10
    },
    backgroundColor: "#F5F6FA"
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () {},
      fail: function () {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});