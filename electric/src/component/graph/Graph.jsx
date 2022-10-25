import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

const Graph = (props) =>{
    const { month } = props;

    useEffect(()=>{
        
    },[])
    return(
        <Chart
            chartType="LineChart"
            data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
            height="400px"
            options={{
                title:"1월의 LSTM 모델로 1시간 단위로 예측한 그래프",
                legend: {position: 'bottom'},
                chartArea: {width: "90%", height: "50%"},
                selectionMode: "multiple",
                tooltip: {trigger: 'both'},
                aggreationTarget: 'none',
                focusTarget: 'category',
                explorer:{
                axis: 'horizontal',
                actions: ['dragToZoom', 'rightClickToReset']
                },
                crosshair: {
                trigger: 'both',
                orientation: 'vertical',
                },
                width: '100%',
                height: '30vh',
                haxis:{
                gridlines: {
                    units: {
                    days: {format: ['dd일']},
                    hours: {format: ['HH', 'ha']},
                    }
                }
                },
                minorGridlines: {
                units: {
                    hours: {format: ['hh a', 'ha']},
                    minutes: {format: ['HH a Z', ':mm']},
                }
                },
                colors: ['#2D9FF1', '#E22A2A' ],
            }}
            legendToggle
        />
    )
}

export default Graph;