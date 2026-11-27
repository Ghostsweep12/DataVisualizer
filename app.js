import { fetchData, getChartLabels, buildDatasets } from "./parse.js"

// JSON file
let data = fetchData();
// Chart element
const ctx = document.getElementById('myChart');
// Chart chooser element
const graphType = document.getElementById('graphTypeSelect');
// Y chooser element
const yValue = document.getElementById('yValue');
// X chooser element
const xValue = document.getElementById('xValue');

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
        datasets: buildDatasets(data, xValue.value, yValue.value)
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
    chart.config.data.datasets = buildDatasets(data, xValue.value, yValue.value);
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
    }
    chart.update();
});