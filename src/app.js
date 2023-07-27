import Chart from 'chart.js/auto';
import { Colors } from 'chart.js';

Chart.register(Colors);

const ctx = document.getElementById('myChart');
Chart.defaults.color = '#000';

const data1 = {
  labels: ['1950年', '1951年', '1952年', '1953年', '1954年', '1955年','1956年','1957年','1958年'],
  datasets: [{
    label: '打率',
    data: [.355, 0.261, 0.284, 0.283, 0.297,0.285,0.259,0.256,0.247],
    borderWidth: 1
  }]
};

const data2 = {
  labels: ['1950年', '1951年', '1952年', '1953年', '1954年', '1955年','1956年','1957年','1958年'],
  datasets: [{
    label: '本塁打数',
    data: [51, 24, 17, 14, 15, 18,11,8,8],
    borderWidth: 1
  }]
};
const data3 = {
  labels: ['1950年', '1951年', '1952年', '1953年', '1954年', '1955年','1956年','1957年','1958年'],
  datasets: [{
    label: '打点数',
    data: [161, 85, 49, 74, 72, 67,43,38,26],
    borderWidth: 1
  }]
};

const data4 = {
  labels: ['1950年', '1951年', '1952年', '1953年', '1954年', '1955年','1956年','1957年','1958年'],
  datasets: [{
  label: '盗塁数',
  data: [28, 20, 19, 33, 21, 26, 16, 7, 2],
  borderWidth: 1
}]
};


function myEventHandler(event) {
  const id = event.currentTarget.id;
  console.log(id)
  if (id == "my-button") {
    chart.data = data1;
  } else if (id == "my-button1") {
    chart.data = data2;
  }else if (id == "my-button2") {
   chart.data = data3;
  }else if (id == "my-button3") {
  chart.data = data4;
 }
   chart.update();
}

let button = document.getElementById("my-button");
let button1 = document.getElementById("my-button1");
let button2 = document.getElementById("my-button2");
let button3 = document.getElementById("my-button3");
button.onclick = myEventHandler;
button1.onclick = myEventHandler;
button2.onclick = myEventHandler;
button3.onclick = myEventHandler;





let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1950年', '1951年', '1952年', '1953年', '1954年', '1955年','1956年','1957年','1958年'],
      datasets: [{
        label: '打率',
        data: [.355, 0.261, 0.284, 0.283, 0.297,0.285,0.259,0.256,0.247],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });
console.log(ctx);
