import React from 'react';
import Chart from 'react-apexcharts'


function DonutSimple(){

    const [state , setState] = React.useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    })


    return (
        <div className="donut">
            <Chart options={state.options} series={state.series} type="donut" width="380" />
        </div>
    )
}

export default DonutSimple;