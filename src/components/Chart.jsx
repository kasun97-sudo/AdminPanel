import React, { useEffect } from "react";
import Chart from "react-apexcharts";

function ChartSimple(props){

  React.useEffect(() => {
    setState(prevState => ({
      options : {
        ...prevState.options
      },
      series : prevState.series.map(
        el => ({
            ...el,
            data : props.sales
        })
      )
    }));
  } , [props.sales]);


  const [state , setState] = React.useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11 , 12]
            }
          },
          series: [
            {
              name: "Month",
              data: []
            }
          ]
    });

    return (
        <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
          </div>
    )
}

export default ChartSimple;