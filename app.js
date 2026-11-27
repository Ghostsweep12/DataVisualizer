import { fetchData, getChartLabels, buildDatasets } from "./parse.js"

// JSON file
let data = fetchData();
// Chart element
const ctx = document.getElementById('myChart');
// Chart chooser element
const graphType = document.getElementById('graphTypeSelect');
let chartOptions = {
    barGraph: "bar",
    bubbleGraph: "bubble",
    pieGraph: "pie",
    doughnutGraph: "doughnut",
    lineGraph: "line",
    polarareaGraph: "polarArea",
    radarGraph: "radar",
    scatterGraph: "scatter"
};
// Y chooser element
const yValue = document.getElementById('yValue');
let yOptions = []
// X chooser element
const xValue = document.getElementById('xValue');
let xOptions = []

let yScale = {
    y: {
        beginAtZero: true
    }
};

// Make the chart
let chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: getChartLabels(data, xValue.value),
        datasets: [buildDatasets(data, yValue.value)]
    },
    options: {
        scales: yScale,
        datasets: {
            bar: {
                grouped: false,
            }
        }
    }
});

function refreshChart() {
    chart.config.data.labels = getChartLabels(data, xValue.value);
    chart.config.data.datasets = [buildDatasets(data, yValue.value)];
    chart.update();
}

xValue.addEventListener("change", refreshChart);
yValue.addEventListener("change", refreshChart);

graphType.addEventListener("change", () => {
    if (graphType.value === "barGraph") {
        chart.config.type = "bar";
        chart.config.options.scales = yScale;
    } else if (graphType.value === "pieGraph") {
        chart.config.type = "pie";
        chart.config.options.scales = {};
    } else if (graphType.value === "lineGraph") {
        chart.config.type = "line";
        chart.config.options.scales = {};
    }
    chart.update();
});