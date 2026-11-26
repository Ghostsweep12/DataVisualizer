// import { x, y } from "./parse.js"

// For chart element
const ctx = document.getElementById('myChart');

// Chart chooser element
const graphType = document.getElementById('graphTypeSelect');

let data1 = [12, 19, 3, 5, 2, 3]
let data2 = [5,2,23,8,1,4]
let data3 = [5,5,5,5,6,5]
let originalLabels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'];
let yScale = {
    y: {
        beginAtZero: true
    }
};
let xyScale = {
    x: {
        type: 'linear',
        position: 'bottom'
    },
    y: {
        beginAtZero: true
    }
};

// Make the chart
let chart = new Chart(ctx, 
    {
    type: 'bar',
    data: {
        labels: originalLabels,
        // datasets is an array
        datasets: [{
            label: '# of Votes',
            data: data1,
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
        scales: yScale
    }
    }
);

// barGraph lineGraph pieGraph scatterGraph bubbleGraph polarareaGraph
graphType.addEventListener("change", () => {
    if (graphType.value==="barGraph"){
        chart.config.type='bar';
        // Y axis
        chart.config.data.datasets[1] = {label: "#oof", data:data3}
        // X axis is data labels
        chart.config.data.labels = originalLabels
        chart.config.options.scales = yScale
        chart.update();
    } else if (graphType.value==="pieGraph"){
        chart.config.type='pie';
        // No axis
        chart.config.options.scales=''
        // Label the data
        chart.config.data.labels = originalLabels
        // Data
        chart.config.data.datasets[0].data = data2
        chart.update();
    } //else if (graphType.value==="lineGraph"){
    //     chart.config.type='line';
    //     chart.config.options.scales=yScale
    //     chart.config.data.labels = originalLabels
    //     chart.update();
    // }  else if (graphType.value==="scatterGraph"){
    //     chart.config.type="scatter";
    //     chart.config.options.scales=xyScale
    //     chart.config.data.labels = originalLabels
    //     chart.update();
    // } else if (graphType.value==="bubbleGraph"){
    //     chart.config.type="bubble";
    //     chart.config.options.scales=xyScale
    //     chart.config.data.labels = originalLabels
    //     chart.update();
    // } else if (graphType.value==="polarareaGraph"){
    //     chart.config.type="polarArea";
    //     chart.config.options.scales=''
    //     chart.config.data.labels = originalLabels
    //     chart.update();
    // }
});
