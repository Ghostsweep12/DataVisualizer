import data from './test.json' with { type: 'json' };

export function fetchData() {
    return data;
}

export function getChartLabels(data, key) {
    return data.map((row) => {return row[key];});
}

export function buildDatasets(data, yKey) {
    const color = [
        "rgb(255, 0, 0)",
        "rgb(255, 140, 0)",
        "rgb(230, 195, 0)",
        "rgb(0, 180, 0)",
        "rgb(0, 110, 255)",
        "rgb(170, 0, 255)"
    ];

    return {
        label: yKey,
        data: data.map((row) => { return row[yKey]; }),
        borderWidth: 1,
        backgroundColor: color[0]
    };
}