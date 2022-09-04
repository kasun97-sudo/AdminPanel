import React from 'react';
import Chart from 'react-apexcharts'


function DonutSimple(props){

    React.useEffect(() => {
        // setState(prevState => ({
        //     options : {
        //         ...prevState.options
        //       },
        //     series : prevState.series.map(el => {
                
        //     })
        // }))
        setState({
            options:{},
            series : props.types,
            chartOptions: {
                labels: ["apple", 'Mango', 'Orange', 'Watermelon']
            }
        })
    } , [props.types]);

    const [state , setState] = React.useState({
        options: {},
        series: [0,0,0,0],
        chartOptions: {
            labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
        }
    });




    return (
        <div className="donut">
            <Chart options={state.options} series={state.series} type="donut" width="380" />
        </div>
    )
}

export default DonutSimple;