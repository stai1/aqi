import Chart from 'chart.js';

import { ConcPM25 } from './aqi';

let ctx = document.getElementById('chart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      {
        label: "PM2.5 density",
        borderColor: 'rgba(255,0,0)',
        data: [
        ],
        borderWidth: 2,
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    animation: {
      duration: 0,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    hover: {
      animationDuration: 0,
      mode: 'index',
      intersect: false,
    },
    responsiveAnimationDuration: 0,
    scales: {
      xAxes: [
        {
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'AQI (EPA)',
          },
          position: 'bottom',
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            max: 500,
          },
        },
      ],
      yAxes: [
        {
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'μg/m³',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 50,
            max: 550,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return "AQI " + tooltipItem[0]['index'];
        },
        label: function(tooltipItem, data) {
          return `${tooltipItem.yLabel.toFixed(1)} μg/m³`;
        },
      },
      mode: 'index',
      intersect: false,
    },
  },
});

chart.data.datasets[0].data = [...Array(501).keys()].map(
  x => {
    return { x: x, y: ConcPM25(x) };
  }
);
chart.update();