import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues); // max takes only list values. dataPoints values were array objects. so first we converted them to single array of values. but since max takes only list values we need to convert array of values to single. That's why we used ... spread operator.

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                maxValue={totalMaximum}
                />
            ))}
        </div>
    )
};

export default Chart;

