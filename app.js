// For chart element
const ctx = document.getElementById('myChart');

// Chart chooser element
const graphType = document.getElementById('graphTypeSelect');

let originalLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
let originalScaleY = "y: {beginAtZero: true}"
let originalScaleX = "x: {type: 'linear',position: 'bottom'}"

// Make the chart
let chart = new Chart(ctx, 
    {
    type: 'bar',
    data: {
        labels: originalLabels,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'rgb(255,0,0)',
                'rgb(255, 85, 0)',
                'rgb(255, 213, 0)',
                'rgb(0,255,0)',
                'rgb(0,100,255)',
                'rgb(255,0,255)'
            ]
        }]
    },
    options: {
        scales: {
           originalScaleY
        }
    }
    }
);

// barGraph lineGraph pieChart
graphType.addEventListener("change", () => {
    if (graphType.value==="barGraph"){
        chart.config.type='bar';
        chart.config.options.scales=originalScaleY
        chart.update();
    } else if (graphType.value==="lineGraph"){
        chart.config.type='line';
        chart.config.options.scales=originalScaleY
        chart.update();
    } else if (graphType.value==="pieGraph"){
        chart.config.type='pie';
        chart.config.options.scales=''
        chart.update();
    } else if (graphType.value==="scatterGraph"){
        chart.config.type="scatter";
        chart.config.options.scales=originalScaleX
        chart.update();
    } else if (graphType.value==="bubbleGraph"){
        chart.config.type="bubble";
        chart.config.options.scales=originalScaleX
        chart.update();
    } else if (graphType.value==="polarareaGraph"){
        chart.config.type="polarArea";
        chart.config.options.scales=''
        chart.update();
    }
});
