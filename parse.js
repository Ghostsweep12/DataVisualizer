import data from './test.json' with { type: 'json' };

export function fetchData() {
    return data;
}

export function getXY(row, xKey, yKey = null, index = 0) {
    let xVal;
    let yVal;
    
    if (xKey && row && xKey in row){
        xVal = row[xKey]
    } else {
        xVal = index
    }

    if (yKey && row && yKey in row){
        yVal = row[yKey]
    } else {
        yVal = row[xKey]
    }

    return {
        x: xVal,
        y: yVal
    };
}

export function getChartLabels(records, selectedKey) {
    // Use the selected field's value per record if present, otherwise Dataset 1..N
    return records.map((row, idx) => {
        const val = row?.[selectedKey];
        return val !== undefined && val !== "" ? String(val) : `Dataset ${idx + 1}`;
    });
}

export function buildDatasets(records, xKey, yKey) {
    const palette = [
        "rgb(255, 0, 0)",
        "rgb(255, 140, 0)",
        "rgb(230, 195, 0)",
        "rgb(0, 180, 0)",
        "rgb(0, 110, 255)",
        "rgb(170, 0, 255)"
    ];

    return records.map((row, i) => {
        const xVal = row?.[xKey] ?? `Dataset ${i + 1}`;
        const rawY = row?.[yKey];
        const yVal = Number.isFinite(Number(rawY)) ? Number(rawY) : 0;

        return {
            label: `Dataset ${i + 1}`,
            data: [{ x: xVal, y: yVal }],
            borderWidth: 1,
            backgroundColor: palette[i % palette.length]
        };
    });
}